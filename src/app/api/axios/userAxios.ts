import axios, { AxiosError } from 'axios';
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
    
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string; httpStatus?: number };
      
      if (errorData.httpStatus === 401) {
        userLogout();
      }
    }
    
    return Promise.reject(error);
  }
);
export default userAxios;