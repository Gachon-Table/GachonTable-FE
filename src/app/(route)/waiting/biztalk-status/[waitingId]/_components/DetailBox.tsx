/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';

const divideCreatedAt = (createdAt: string | undefined) => {
  if (!createdAt) {
    return 'Invalid date';
  }

  const dateRegex = /\d+일\s\(.\)/;
  const timeRegex = /\d{2}:\d{2}/;

  const dateMatch = createdAt.match(dateRegex);
  const timeMatch = createdAt.match(timeRegex);

  if (!dateMatch || !timeMatch) {
    return 'Invalid date';
  }

  return `${dateMatch[0]} ${timeMatch[0]}`;
};

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  order: number;
  createdAt: string;
  tableType: string;
}
const DetailBox = ({
  pubName,
  tableType,
  order = -1,
  createdAt,
}: WaitingProps) => {
  const formattedCreatedAt = createdAt
    ? divideCreatedAt(createdAt)
    : 'Loading...';
  return (
    <div className="pixel:px-6 flex w-full flex-col space-y-[11px] rounded-md bg-gy-0 px-4 py-6">
      <div className="text-gray-800 font-h4">참숯한우천국</div>
      <div className="flex w-full items-center justify-center border-b-2 bg-gy-100"></div>
      <div className="pixel:space-x-[15px] promax:space-x-6 flex w-full flex-row items-center justify-start space-x-3">
        <div className="flex w-full max-w-[151px] flex-col space-y-[6px] py-3">
          <div className="flex flex-row space-x-2">
            <span className="text-gy-400 font-b1-normal-semibold">좌석</span>
            <span className="text-gy-800 font-b1-normal-semibold">
              4인 테이블
            </span>
          </div>
          <div className="flex flex-row space-x-2">
            <span className="text-gy-400 font-b1-normal-semibold">시간</span>
            <span className="text-gy-800 font-b1-normal-semibold">
              16일 (수) 23:25
            </span>
          </div>
        </div>
        <div className="h-[76px] border-r-2 bg-gy-100"></div>
        <div className="flex w-full max-w-[151px] flex-col items-center justify-center space-y-1 py-[9px]">
          <div className="flex w-full justify-center text-center text-gy-400 font-b1-normal-semibold">
            내 순서
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="text-primary-400 font-num">3</div>
            <div className="py-1 text-gy-800 font-b1-normal-semibold">번째</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBox;
