import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { userLogout } from '@/app/api/service/user/userAuth';
import userAxios from '@/app/api/axios/userAxios';

const userPubAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/pub`,
    headers: {
        'Content-Type': 'application/json',
    },
});

userPubAxios.interceptors.request.use(
  async (config) => {
    if (typeof window !== 'undefined') {
      const userAccessToken = localStorage.getItem('userAccessToken');
      if (userAccessToken) {
        config.headers['Authorization'] = `Bearer ${userAccessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userPubAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string, httpStatus?: number };
      const userRefreshToken = localStorage.getItem('userRefreshToken');

      if (errorData?.code === 'EXPIRED_TOKEN' && userRefreshToken) {
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
      } else {
        userLogout();
      }
    }

    return Promise.reject(error);
  }
);

export default userPubAxios;