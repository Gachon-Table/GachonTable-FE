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
    <div className="flex w-full flex-col rounded-md bg-gy-0 p-6">
      <div className="mb-3 text-gray-800 font-h4">{pubName}</div>
      <div className="w-full max-w-[334px] border-b-2 bg-gy-100" />
      <div className="mt-3 flex w-full max-w-[334px] flex-row">
        <div className="mr-[34px] flex flex-col space-y-[6px] pt-[11px]">
          <div className="flex flex-row space-x-2">
            <span className="text-gy-400 font-b1-normal-semibold">좌석</span>
            <span className="text-gy-800 font-b1-normal-semibold">
              {tableType === 'BASIC' ? '4인 테이블' : '8인 테이블'}
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
        <div className="ml-[51px] flex flex-col items-center pt-[7px]">
          {order < 0 ? (
            order === -1 ? (
              <div className="pl-[4px] pt-[21px] text-gy-400 font-b1-normal-semibold">
                대기 취소
              </div>
            ) : (
              <div className="pl-[4px] pt-[21px] text-gy-400 font-b1-normal-semibold">
                입장 완료
              </div>
            )
          ) : (
            <>
              <div className="block w-[72px] text-center text-gy-400 font-b1-normal-semibold">
                내 순서
              </div>
              <div className="flex h-8 flex-row items-baseline space-x-1">
                <div className="text-primary-400 font-num">{order}</div>
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
