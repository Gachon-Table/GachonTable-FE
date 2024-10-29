import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { userLogout } from '../service/user/userAuth';

const userAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*',
  },
});

userAxios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('userAccessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

userAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response?.data as { result?: { code?: string; httpStatus?: number; message?: string } };
      const userRefreshToken = localStorage.getItem('userRefreshToken');
      
      if (errorData?.result?.code === 'EXPIRED_TOKEN' && userRefreshToken) {
        originalRequest._retry = true;
      
        try {
          const response = await userAxios.post('/refresh', { refreshToken: userRefreshToken });
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('userAccessToken', newAccessToken);
      
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return userAxios(originalRequest);
        } catch (refreshError) {
          userLogout();
          return Promise.reject(refreshError);
        }
      } 
      else if (["EXPIRED_TOKEN", 'INVALID_KEY', 'INVALID_TOKEN', 'MALFORMED_TOKEN', 'UNSUPPORTED_TOKEN', 'EMPTY_AUTHENTICATION'].includes(errorData?.result?.code as string)) {
        userLogout();
      }
    }

    return Promise.reject(error);
  }
);

export default userAxios;