import axios from 'axios';
import { useRouter } from 'next/navigation';
import { adminLogout } from '../service/adminAuth';

const pubAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/pub`,
    headers: {
        'Content-Type': 'application/json',
      },
})

pubAxios.interceptors.response.use(
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

export default pubAxios;