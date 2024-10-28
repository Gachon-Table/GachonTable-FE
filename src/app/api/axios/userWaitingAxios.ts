import axios, { AxiosError } from 'axios';
import { userLogout } from '@/app/api/service/user/userAuth';
// import userAxios from '@/app/api/axios/userAxios';

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

userWaitingAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string; httpStatus?: number };
      
      if (errorData.httpStatus === 401) {
        userLogout();
      }
    }
    
    return Promise.reject(error);
  }
);

  export default userWaitingAxios;