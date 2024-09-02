'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { adminLogin, isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { Logo } from 'public';

export default function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const credentials = {
      id: id,
      password: password,
    };

    const loginSuccess = await adminLogin(credentials);
    if (loginSuccess) {
      router.push('/admin/waiting-management');
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          router.push('/admin/waiting-management');
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
    <div className=" flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="tablet:max-w-md laptop:max-w-lg desktop:max-w-xl mt-36 w-full max-w-xs mobile:max-w-sm">
        <div className="mb-[53px] flex flex-col items-center">
          <Logo />
          <div className="tablet:text-3xl laptop:text-4xl desktop:text-5xl text-gy-700 mt-9 text-center text-2xl font-bold">
            관리자 로그인
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="id"
            className="text-gy-600 mb-[6px] block text-sm font-medium"
          >
            아이디
          </label>
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-gy-0 focus:border-gy-0 w-full rounded-md border bg-[#F4F4F4] py-4 pl-4 pr-[71px] focus:outline-none focus:ring-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-gy-600 mb-[6px] block text-sm font-medium"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gy-0 focus:border-gy-0 w-full rounded-md border bg-[#F4F4F4] py-4 pl-4 pr-[71px] focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      <div className="tablet:max-w-md laptop:max-w-lg desktop:max-w-xl mb-8 w-full max-w-xs mobile:max-w-sm">
        <button
          onClick={handleLogin}
          className="h-[64px] w-full rounded-md bg-primary-400 px-6 py-[22px] text-lg font-bold leading-6 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          로그인
        </button>
      </div>
    </div>
  );
}
