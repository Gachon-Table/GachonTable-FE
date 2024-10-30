import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { userLogout } from '@/app/api/service/user/userAuth';
import userAxios from '@/app/api/axios/userAxios';

const userWaitingAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/waiting`,
    headers: {
        'Content-Type': 'application/json',
      },
})

userWaitingAxios.interceptors.request.use(
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

// userWaitingAxios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       if (typeof window !== 'undefined') {
//         const refreshToken = localStorage.getItem('userRefreshToken');

//         try {
//           const response = await userAxios.post('/refresh', { refreshToken: refreshToken });
//           const accessToken = response.data.accessToken;

//           localStorage.setItem('userAccessToken', accessToken);

//           error.config.headers['Authorization'] = `Bearer ${accessToken}`;
//           return userWaitingAxios(error.config); 
//         } catch (refreshError) {
//           userLogout();
//           return Promise.reject(refreshError);
//         }
//       } else {
//         return Promise.reject(new Error('Unauthorized - No access to localStorage'));
//       }
//     }
//     return Promise.reject(error);
//   }
// );

userWaitingAxios.interceptors.response.use(
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

export default userWaitingAxios;