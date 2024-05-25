'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Cancel = () => {
  const route = useRouter();
  return (
    <div
      className="bg-modal-rgba absolute bottom-0 left-0 right-0 top-0 flex h-full items-center justify-center mobile:mx-auto mobile:max-w-[480px]"
      onClick={() => {
        route.back();
      }}
    >
      <div
        className="h-[13%] w-[80%] rounded-[10px] border-none bg-white text-black"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mt-8 flex w-full items-center justify-center text-center text-[20px]">
          xx 주점 웨이팅
          <br />
          취소하시겠습니까?
        </div>
        <div className="mt-5 flex w-full justify-evenly">
          <div className="w-12 cursor-pointer text-center">네</div>
          <div>|</div>
          <div className="w-12 cursor-pointer">아니요</div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
