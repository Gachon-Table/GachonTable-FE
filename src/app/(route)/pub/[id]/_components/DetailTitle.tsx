import React from 'react';

interface DetailTitleProps {
  pubName: string;
  oneLiner: string;
  waitingCount: number;
}

const DetailTitle: React.FC<DetailTitleProps> = ({
  pubName,
  oneLiner,
  waitingCount,
}) => (
  <div className="flex flex-col items-center justify-center py-4">
    <div className="mb-2 flex text-gy-700 font-b2-normal-semibold">
      <span className="mr-1 items-center">👥 </span>현재&nbsp;
      <span className="text-red-400">{waitingCount}</span>명 대기 중
    </div>
    <h1 className="mb-[2px] text-gy-900 font-h1">{pubName}</h1>
    <p className="text-gy-700 font-b1-normal-medium">{oneLiner}</p>
  </div>
);

export default DetailTitle;
