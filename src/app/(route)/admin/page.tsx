'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin, isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { Logo } from 'public';
import { ToastModal } from '@/app/common/ToastModal';

export default function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const credentials = {
      id: id,
      password: password,
    };

    const loginSuccess = await adminLogin(credentials);
    if (loginSuccess) {
      router.push('/admin/client-management');
      setIsLoginSuccess(true);
      setTimeout(() => {
        setIsLoginSuccess(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          router.push('/admin/client-management');
        } else {
          router.push('/admin');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="mt-[157px]">
        <div className="mb-[54px] flex flex-col items-center">
          <Logo />
          <div className="mt-6 text-center text-gy-700 font-h1">
            관리자 로그인
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-[6px]">
            <label
              htmlFor="id"
              className="block text-gy-600 font-b1-normal-medium"
            >
              아이디
            </label>
            <input
              id="id"
              type="text"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="placeholder:text-font-b1-normal-medium w-[382px] rounded-md bg-gy-0 py-4 pl-4 pr-[71px] focus:outline-none"
            />
          </div>
          <div className="space-y-[6px]">
            <label
              htmlFor="password"
              className="block text-gy-600 font-b1-normal-medium"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-font-b1-normal-medium w-[382px] rounded-md bg-gy-0 py-4 pl-4 pr-[71px] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {isLoginSuccess && (
        <div className="mt-[206px] flex justify-center">
          <ToastModal message={'로그인이 완료되었습니다!'} />
        </div>
      )}

      <div className="fixed bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={handleLogin}
          className="flex w-[382px] items-center justify-center rounded-md bg-primary-400 px-6 py-[19px]"
        >
          <span className="block w-[334px] text-center text-wt font-h4">
            로그인
          </span>
        </button>
      </div>
    </div>
  );
}
