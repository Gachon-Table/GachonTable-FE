import axios, { AxiosError } from 'axios';
// import adminAxios from './adminAxios';
import { adminLogout } from '../service/admin/adminAuth';

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
    
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string; httpStatus?: number };
      
      if (errorData.httpStatus === 401) {
        adminLogout();
      }
    }
    
    return Promise.reject(error);
  }
);

export default pubAxios;