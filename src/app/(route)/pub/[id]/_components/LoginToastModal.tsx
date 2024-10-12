'use client';
import React from 'react';
import { LogoCircle } from 'public';

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

      <div className="relative z-50 flex w-full flex-col items-center justify-center rounded-t-[20px] bg-wt px-6 pb-[53px] pt-8">
        <div className="mb-4">
          <LogoCircle />
        </div>
        <div className="mb-4 block w-[327px] text-center font-h3">
          대기를 하려면 로그인이 필요해요!
        </div>

        <button
          className="w-full rounded-md bg-kakao px-[43.5px] py-5"
          onClick={onSubmit}
        >
          <span className="block w-[279px] max-w-full text-center text-gy-900 font-b1-normal-semibold">
            카카오로 3초만에 시작하기
          </span>
        </button>
      </div>
    </div>
  );
};
