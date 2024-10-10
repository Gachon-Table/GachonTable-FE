'use client';
import adminAxios from '../../axios/adminAxios';
import { AxiosError } from 'axios';
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
      return { success: true, code: 200 };
    } else {
      return { success: false, code: 500 };
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    let code = 500;

    if (axiosError.response) {
      const statusCode = axiosError.response.status;
      if (statusCode === 403) {
        code = 403;
      }
    }

    return { success: false, code };
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
