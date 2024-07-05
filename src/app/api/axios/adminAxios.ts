import axios from 'axios';
import { useRouter } from 'next/navigation';
import { adminLogout } from '../service/adminAuth';

const adminAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
    }
});

adminAxios.interceptors.request.use(
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
  
  adminAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        adminLogout();
        const router = useRouter();
        router.push('/admin/login');
      }
      return Promise.reject(error);
    }
  );
  
  export default adminAxios;