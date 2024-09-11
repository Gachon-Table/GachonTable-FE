'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import spinner from 'public/icons/spinner.json';

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-1">
      <Lottie
        loop
        animationData={spinner}
        play
        style={{ width: 80, height: 80 }}
      />
      <div className="pl-[22px] text-gy-500 font-b1-normal-semibold">
        로딩 중...
      </div>
    </div>
  );
};

export default Loading;
