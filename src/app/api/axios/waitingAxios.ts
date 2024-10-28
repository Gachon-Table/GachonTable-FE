import axios, { AxiosError } from 'axios';
// import adminAxios from './adminAxios';
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
    
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { code?: string; httpStatus?: number };
      
      if (errorData.httpStatus === 401) {
        adminLogout();
      }
    }
    
    return Promise.reject(error);
  }
);
export default waitingAxios;