'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Instagram } from 'public';
import { Divider } from '@/app/common/Divider';

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between space-x-1 bg-gy-200 pb-[23px] pl-4 pr-6 pt-[15px]">
      <div className="flex flex-col space-y-[3px]">
        <div className="flex flex-row items-center space-x-1">
          <button
            className="cursor-pointer p-2 text-gy-700 font-b2-normal-semibold"
            onClick={() => router.push('/policy/privacy')}
          >
            개인정보 처리방침
          </button>
          <Divider length={14} borderColor={'border-gy-300'} />
          <button
            className="cursor-pointer p-2 text-gy-700 font-b2-normal-semibold"
            onClick={() => router.push('/policy/service')}
          >
            이용약관
          </button>
        </div>
        <div className="ml-2 text-gy-400 font-c1-medium">
          © 2024 LUPG. All Rights Reserved.
        </div>
      </div>
      <button onClick={() => alert('인스타그램으로 이동합니다!')}>
        <Instagram />
      </button>
    </div>
  );
};
