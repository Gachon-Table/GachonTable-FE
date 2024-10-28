import adminAxios from '../../axios/adminAxios';
import { AxiosError } from 'axios';
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
      return { success: false, message: '관리자에게 문의하세요.' };
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { message?: string };
      return { success: false, message: errorData.message };
    }

    return { success: false, message: '관리자에게 문의하세요.' };
  }
};

export const adminLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('pubId');
  window.location.href = '/admin';
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
    window.location.href = '/admin';
    return false;
  }
};
