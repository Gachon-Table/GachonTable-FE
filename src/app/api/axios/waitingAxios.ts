import axios from 'axios';
import adminAxios from './adminAxios';
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
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      
      try {
        const response = await adminAxios.post('/refresh', { refreshToken: refreshToken });
        const accessToken = response.data.accessToken
        localStorage.setItem('accessToken', accessToken);
        
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
        return waitingAxios(error.config);
      } catch (refreshError) {
        adminLogout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default waitingAxios;