import { LoadingIcon } from 'public';
import React from 'react';

interface LoadingModalProps {
  message?: string;
}

const LoadingModal = ({
  message = '웨이팅 신청 중...\n 곧 신청이 완료돼요.',
}: LoadingModalProps) => {
  return (
    <>
      <div className="z-60 fixed left-0 top-0 h-full w-full bg-bk/30"></div>

      <div className="z-70 fixed left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-md bg-gy-700 px-4 py-5">
          <LoadingIcon />
          <div className="block w-[279px] text-center text-white font-h4">
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
