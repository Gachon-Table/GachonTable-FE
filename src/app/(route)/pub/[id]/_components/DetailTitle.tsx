import React from 'react';

interface DetailTitleProps {
  pubName: string;
  oneLiner: string;
  instagramUrl: string;
  waitingCount: number;
}

const DetailTitle: React.FC<DetailTitleProps> = ({
  pubName,
  oneLiner,
  instagramUrl,
  waitingCount,
}) => (
  <div className="flex flex-col items-center justify-center py-4">
    <div className="mb-2 flex text-gy-700 font-b2-normal-semibold">
      <span className="mr-1 items-center">👥 </span>현재&nbsp;
      <span className="text-red-400">{waitingCount}</span>명 대기 중
    </div>
    <h1 className="mb-[2px] text-gy-900 font-h1">{pubName}</h1>
    <p className="mb-2 text-gy-700 font-b1-normal-medium">{oneLiner}</p>
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center border-b border-gy-500 text-gy-500 font-b2-normal-medium"
    >
      @인스타그램 바로가기
    </a>
  </div>
);

export default DetailTitle;
