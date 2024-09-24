/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import { Divider } from '@/app/common/Divider';

const divideCreatedAt = (createdAt: string | undefined) => {
  if (!createdAt || !createdAt.includes('T')) {
    return 'Invalid date';
  }

  const [date, timePart] = createdAt.split('T');
  const [hours, minutes] = timePart.split(':');

  return `${date} ${hours}:${minutes}`;
};

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  headCount: number;
  order: number;
  createdAt: string;
}
const DetailBox = ({ pubName, headCount, order, createdAt }: WaitingProps) => {
  const formattedCreatedAt = createdAt
    ? divideCreatedAt(createdAt)
    : 'Loading...';
  return (
    <div className="flex w-[382px] flex-col rounded-md bg-gy-0 p-6">
      <div className="mb-3 text-gray-800 font-h4">{pubName}</div>
      <div className="w-[334px] border-b-2 bg-gy-100" />
      <div className="mt-3 flex flex-row space-x-[51px]">
        <div className="flex flex-col space-y-[6px] pt-[11px]">
          <div className="flex flex-row space-x-2">
            <span className="text-gy-400 font-b1-normal-semibold">인원</span>
            <span className="text-gy-800 font-b1-normal-semibold">
              {headCount}명
            </span>
          </div>

          <div className="flex flex-row space-x-2">
            <span className="text-gy-400 font-b1-normal-semibold">시간</span>
            <span className="text-gy-800 font-b1-normal-semibold">
              {formattedCreatedAt}
            </span>
          </div>
        </div>
        <div className="h-[76px] border-r-2 bg-gy-100" />
        <div className=" flex flex-col items-center pt-[7px]">
          {order < 0 ? (
            order === -1 ? (
              <div className="text-gy-400 font-b1-normal-semibold">
                대기 취소
              </div>
            ) : (
              <div className="text-gy-400 font-b1-normal-semibold">
                입장 완료
              </div>
            )
          ) : (
            <>
              <div className="block w-[72px] text-center text-gy-400 font-b1-normal-semibold">
                내 순서
              </div>
              <div className="flex h-8 flex-row items-baseline space-x-1">
                <div className="font-num text-primary-400">{order}</div>
                <div className="pb-2 text-gy-800 font-b1-normal-semibold">
                  번째
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DetailBox;
