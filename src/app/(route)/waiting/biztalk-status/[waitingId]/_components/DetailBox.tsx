import React from 'react';

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  headCount: number;
  order: number;
  createdAt: string;
}
const DetailBox = ({ pubName, headCount, order, createdAt }: WaitingProps) => {
  return (
    <div className="flex w-80 flex-row space-x-10 rounded-2xl bg-[#F7F8F9] p-5">
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
          <span className="text-sm font-light">{createdAt}</span>
        </div>
      </div>
      <div className="pt-4">
        <div className="h-28 border-l border-[#E7E7E7]" />
      </div>
      <div className="pt-3.5">
        <span className="pl-3 text-xs font-light text-[#A1A19F]">내 순서</span>
        {/* order가 취소된 상태면 ? "취소된 웨이팅입니다." :  {orderStatus} 번째*/}
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
