import { LoadingIcon } from 'public';
import React from 'react';

interface LoadingModalProps {
  firstLine?: string;
  secondLine?: string;
}

const LoadingModal = ({
  firstLine = '웨이팅 신청 중...',
  secondLine = '곧 신청이 완료돼요.',
}: LoadingModalProps) => {
  return (
    <>
      <div className="z-60 fixed left-0 top-0 h-full w-full bg-bk/30"></div>

      <div className="z-70 fixed left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-md bg-gy-700 px-4 py-5">
          <LoadingIcon />
          <div className="block w-[279px] text-center text-white font-h4">
            {firstLine} <br />
            {secondLine}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
