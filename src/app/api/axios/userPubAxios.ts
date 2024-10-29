/* eslint-disable @typescript-eslint/no-unused-vars */
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
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        const refreshToken = localStorage.getItem('userRefreshToken');

        try {
          const response = await userAxios.post('/refresh', { refreshToken: refreshToken });
          const accessToken = response.data.accessToken;

          localStorage.setItem('userAccessToken', accessToken);

          error.config.headers['Authorization'] = `Bearer ${accessToken}`;
          return userPubAxios(error.config); 
        } catch (refreshError) {
          userLogout();
          return Promise.reject(refreshError);
        }
      } else {
        return Promise.reject(new Error('Unauthorized - No access to localStorage'));
      }
    }
    return Promise.reject(error);
  }
);

export default userPubAxios;