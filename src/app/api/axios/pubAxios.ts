import axios from 'axios';
import adminAxios from './adminAxios';
import { adminLogout } from '../service/adminAuth';

const pubAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/pub`,
    headers: {
        'Content-Type': 'application/json',
      },
})

pubAxios.interceptors.request.use(
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


pubAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      
      try {
        const response = await adminAxios.post('/refresh', { refreshToken });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
        return pubAxios(error.config);
      } catch (refreshError) {
        adminLogout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default pubAxios;