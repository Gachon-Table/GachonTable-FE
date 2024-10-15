'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin, isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { Logo } from 'public';
import { ToastModal } from '@/app/common/ToastModal';
import AlertModal from '@/app/common/AlertModal';

export default function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isLoginErrorModalOpen, setIsLoginErrorModalOpen] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const errorMessage = {
    403: '로그인 정보를 다시 확인해 주세요.',
    500: '네트워크를 다시 확인해 주세요.',
  };
  const router = useRouter();

  const handleLogin = async () => {
    const credentials = {
      id: id,
      password: password,
    };

    const result = await adminLogin(credentials);
    if (result.success) {
      setIsLoginSuccess(true);
      setTimeout(() => {
        setIsLoginSuccess(false);
        router.push('/admin/menu-management');
      }, 2000);
    } else {
      setIsLoginSuccess(false);
      setErrorCode(result.code);
      setIsLoginErrorModalOpen(true);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          router.push('/admin/menu-management');
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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white px-4">
      <div className="mt-32 flex-grow">
        <div className="mb-14 flex flex-col items-center">
          <Logo />
          <div className="mt-6 text-center text-gy-700 font-h1">
            관리자 로그인
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 ">
          <div className="w-full space-y-[6px]">
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
              className="placeholder:text-font-b1-normal-medium w-full rounded-md bg-gy-0 py-4 pl-4 pr-[71px] focus:outline-none"
            />
          </div>
          <div className="w-full space-y-[6px]">
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
              className="placeholder:text-font-b1-normal-medium w-full rounded-md bg-gy-0 py-4 pl-4 pr-[71px] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mb-8 flex border-none bg-transparent">
        <button
          onClick={handleLogin}
          className="flex h-16 w-full cursor-pointer items-center justify-center rounded-md bg-primary-400 text-wt font-h4"
        >
          로그인
        </button>
      </div>

      {isLoginSuccess && (
        <div className="fixed bottom-[100px] left-0 right-0 mb-3 flex justify-center">
          <ToastModal message={'로그인이 완료되었습니다!'} />
        </div>
      )}

      {isLoginErrorModalOpen && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={`로그인에 실패했습니다.\n${errorCode === 403 ? errorMessage[403] : errorMessage[500]}`}
          onConfirm={() => setIsLoginErrorModalOpen(false)}
        />
      )}
    </div>
  );
}
