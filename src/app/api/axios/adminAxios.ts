import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { adminLogout } from '../service/admin/adminAuth';

const adminAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*',
  },
});

adminAxios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


adminAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response?.data as { result?: { code?: string; httpStatus?: number; message?: string } };
      const refreshToken = localStorage.getItem('refreshToken');

      if (errorData?.result?.code === 'EXPIRED_TOKEN' && refreshToken) {
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
      }
      else if (["EXPIRED_TOKEN", 'INVALID_KEY', 'INVALID_TOKEN', 'MALFORMED_TOKEN', 'UNSUPPORTED_TOKEN', 'EMPTY_AUTHENTICATION'].includes(errorData?.result?.code as string)) {
        adminLogout();
      }
    }
    return Promise.reject(error);
  }
);

export default adminAxios;