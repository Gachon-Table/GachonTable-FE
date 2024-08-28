/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const divideCreatedAt = (createdAt: string) => {
  const [date, timePart] = createdAt.split('T');
  return [date, timePart];
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
  const formattedCreatedAt = divideCreatedAt(createdAt);
  const [hour, minute, second] = formattedCreatedAt[1].split(':');
  return (
    <div className="flex w-80 flex-row space-x-7 rounded-2xl bg-[#F7F8F9] p-5">
      <div className="flex flex-col space-y-3.5">
        <div className="flex flex-col">
          <span className="text-xs font-light text-[#A1A19F]">주점</span>
          <span className="text-sm font-light">{pubName}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-light text-[#A1A19F]">인원</span>
          <span className="text-sm font-light">{headCount}명</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-light text-[#A1A19F]">예약시간</span>
          <span className="text-sm font-light">
            {formattedCreatedAt[0]}&nbsp;
            {hour}:{minute}
          </span>
        </div>
      </div>
      <div className="pt-4">
        <div className="h-28 border-l border-[#E7E7E7]" />
      </div>
      <div className="mt-7 flex flex-col items-center pl-5 ">
        <div className="text-xs font-light text-[#202010]">내 순서</div>
        {order === -1 ? (
          <div className="mt-5 text-sm">취소된 웨이팅입니다.</div>
        ) : (
          <div className="mt-5 text-sm">
            <span className="text-3xl font-medium">{order}</span> 번째
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailBox;
