'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
export const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex h-52 flex-col space-y-2.5 bg-[#f9f9f9] px-5 py-9 text-[11px] text-[#8f8f8f]">
      <p className="text-[#666666]">참숯한우천국</p>
      <div className="space-y-2.5">
        <p>
          대표: <span className="text-[#666666]">김선창</span>
        </p>
        <p>
          주소:
          <span className="text-[#666666]">
            경기도 부천시 원미구 상이로21번길 26-15, 1층
          </span>
        </p>
        <p>
          사업자 등록 번호: <span className="text-[#666666]">488-28-01237</span>
        </p>
        <p>
          개인정보담장: <span className="text-[#666666]">tisckd@naver.com</span>
        </p>
      </div>
      <div>
        <button
          className="cursor-pointer font-semibold text-[#666666]"
          onClick={() => router.push('/privacy-policy')}
        >
          개인정보 처리방침
        </button>
      </div>
    </div>
  );
};
