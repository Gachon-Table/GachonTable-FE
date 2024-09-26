import adminAxios from '../../axios/adminAxios';
import { useRouter } from 'next/navigation';
import { getWaitingList } from './getWaitingList';

interface AdminProps {
  id: string;
  password: string;
}

export const adminLogin = async (credentials: AdminProps) => {
  try {
    const response = await adminAxios.post('/login', credentials);
    if (response.status === 200) {
      const tokens = response.data;
      localStorage.setItem('accessToken', tokens.accessToken);
      localStorage.setItem('refreshToken', tokens.refreshToken);
      localStorage.setItem('pubId', tokens.pubId);
      return true;
    } else {
      alert('로그인 실패');
    }
  } catch (error) {
    console.log('로그인 실패: ', error);
  }
};

export const adminLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('pubId');
  const router = useRouter();
  router.push('/admin');
};

export const isAuthenticated = async (): Promise<boolean> => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    return false;
  }

  try {
    await getWaitingList();
    return true;
  } catch (error) {
    console.error('로그인 유효성 검증 실패:', error);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('pubId');
    return false;
  }
};
