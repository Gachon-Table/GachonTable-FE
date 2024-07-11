import axios from 'axios';
import { useRouter } from 'next/navigation';
import { adminLogout } from '../service/adminAuth';

const waitingAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/waiting`,
    headers: {
        'Content-Type': 'application/json',
      },
})

waitingAxios.interceptors.response.use(
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

export default waitingAxios;