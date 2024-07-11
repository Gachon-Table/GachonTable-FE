import adminAxios from '../axios/adminAxios';

interface AdminProps {
  id: string;
  password: string;
}

export const adminLogin = async (credentials: AdminProps) => {
  try {
    const response = await adminAxios.post('/login', credentials);
    const tokens = response.data;

    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('pubId', tokens.pubId);

    return response.data;
  } catch (error) {
    console.log('로그인 실패: ', error);
  }
};

export const adminLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken');
};
