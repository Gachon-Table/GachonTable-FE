import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { adminLogout } from '../service/admin/adminAuth';
import adminAxios from '@/app/api/axios/adminAxios';

const pubAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/pub`,
    headers: {
        'Content-Type': 'application/json',
    },
});

pubAxios.interceptors.request.use(
  async (config) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

pubAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string, httpStatus?: number };
      const refreshToken = localStorage.getItem('refreshToken');

      if (errorData?.code === 'EXPIRED_TOKEN' && refreshToken) {
        originalRequest._retry = true; 

        try {
          const response = await adminAxios.post('/refresh', { refreshToken });
          const accessToken = response.data.accessToken;
          localStorage.setItem('accessToken', accessToken);

          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return adminAxios(originalRequest);
        } catch (refreshError) {
          adminLogout();
          return Promise.reject(refreshError);
        }
      } else {
        adminLogout();
      }
    }

    return Promise.reject(error);
  }
);

export default pubAxios;
