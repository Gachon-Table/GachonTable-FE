'use client';
import { useRouter } from 'next/navigation';

export const userLogout = () => {
  localStorage.removeItem('userAccessToken');
  localStorage.removeItem('userRefreshToken');
  localStorage.removeItem('userName');
  const router = useRouter();
  router.push('/');
};

export const isUserAuthenticated = () => {
  return !!localStorage.getItem('userAccessToken');
};
