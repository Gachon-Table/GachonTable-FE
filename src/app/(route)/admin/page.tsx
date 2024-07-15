'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { adminLogin, isAuthenticated } from '@/app/api/service/adminAuth';

export default function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const credentials = {
      id: id,
      password: password,
    };

    try {
      const data = await adminLogin(credentials);
      console.log('로그인 성공 : ', data);
      alert('로그인 성공');
      router.push('/admin/waiting-management');
    } catch (error) {
      console.log(error);
      alert('로그인 실패');
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="mb-10 flex flex-col items-center">
        <Image
          src="/images/logo-blue.png"
          alt="로고"
          className="mb-10 size-40"
          width={298}
          height={283}
        />
        <div className="text-center text-3xl font-bold text-tory-blue mobile:text-3xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
          관리자 로그인
        </div>
      </div>

      <div className="w-full max-w-xs mobile:max-w-sm tablet:max-w-md laptop:max-w-lg desktop:max-w-xl">
        <div className="mb-4">
          <label
            htmlFor="id"
            className="mb-2 block font-extralight text-tory-blue"
          >
            ID
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full rounded-md border border-tory-blue px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mobile:py-4"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block font-extralight text-tory-blue"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-tory-blue px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mobile:py-4"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full rounded-md bg-main-blue py-3 font-light text-white transition-colors duration-300 hover:bg-blue-600 mobile:py-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}
