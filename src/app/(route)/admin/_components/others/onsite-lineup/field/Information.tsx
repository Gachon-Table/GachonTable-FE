import React from 'react';
import Image from 'next/image';

interface InformationProps {
  pubName: string;
  queueing: number;
}

const Information: React.FC<InformationProps> = ({ pubName, queueing }) => {
  return (
    <div className="mt-14 flex flex-col items-center">
      <Image
        src="/images/logo-white.png"
        alt="로고"
        className="mb-10 size-40"
        width={298}
        height={283}
      />
      <div className="mt-8 flex flex-col items-center text-center text-3xl font-light">
        <span>휴대폰 번호를 입력하시면 </span>
        <div className="mt-1 flex items-center">
          <img src="/images/talk-icon.png" className="mr-2 w-8" />
          <span>
            <span className="font-semibold">카카오톡</span>으로 웨이팅 현황을{' '}
          </span>
        </div>
        <span className="mt-1">알림으로 알려드려요</span>
      </div>
      <p className="mt-20 text-center text-4xl font-bold">{pubName}</p>
      <div className="flex flex-row items-center">
        <p className="text-5xl font-bold">현재 대기 </p>
        <span className="mb-7 ml-3 text-9xl font-extrabold text-point-yellow">
          {queueing}
        </span>
        <p className=" text-center text-6xl font-bold text-point-yellow">팀</p>
      </div>
    </div>
  );
};

export default Information;
