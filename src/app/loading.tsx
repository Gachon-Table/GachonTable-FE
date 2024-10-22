'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import spinner from 'public/icons/spinner.json';

interface LoadingProps {
  type?: string;
}

const Loading = ({ type }: LoadingProps) => {
  return (
    <div
      className={`space-y-2 ${type === 'component' ? '' : 'flex h-screen flex-col items-center justify-center'}`}
    >
      <Lottie loop animationData={spinner} play />
      <div className="pl-[7.5px] text-gy-400 font-b1-normal-semibold">
        로딩 중...
      </div>
    </div>
  );
};

export default Loading;
