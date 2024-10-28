import axios, { AxiosError } from 'axios';
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
    
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string; httpStatus?: number };
      
      if (errorData.httpStatus === 401) {
        adminLogout();
      }
    }
    
    return Promise.reject(error);
  }
);

export default adminAxios;