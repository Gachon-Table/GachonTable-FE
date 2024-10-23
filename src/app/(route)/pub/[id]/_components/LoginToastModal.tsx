'use client';
import React from 'react';
import Image from 'next/image';

interface LoginToastModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

export const LoginToastModal = ({
  onClose,
  onSubmit,
}: LoginToastModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="fixed inset-0 bg-bk/30 opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-50 flex w-full max-w-[430px] flex-col items-center justify-center rounded-t-[20px] bg-wt px-4 pb-8 pt-10">
        <div className="mb-4">
          <Image
            src="/images/logo-blue.jpg"
            alt="logo-blue"
            width={44}
            height={44}
            className="rounded-full"
          />
        </div>
        <div className="mb-12 block w-[327px] text-center font-h3">
          대기를 하려면 로그인이 필요해요.
        </div>

        <button
          className="flex w-full items-center justify-center rounded-md bg-kakao py-5"
          onClick={onSubmit}
        >
          <span className="text-gy-900 font-b1-normal-semibold">
            카카오로 3초만에 시작하기
          </span>
        </button>
      </div>
    </div>
  );
};
