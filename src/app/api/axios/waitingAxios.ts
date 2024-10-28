import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import adminAxios from './adminAxios';
import { adminLogout } from '../service/admin/adminAuth';

const waitingAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/waiting`,
    headers: {
        'Content-Type': 'application/json',
      },
})

waitingAxios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


waitingAxios.interceptors.response.use(
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
          const response = await adminAxios.post('/refresh', { refreshToken: refreshToken });
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

export default waitingAxios;