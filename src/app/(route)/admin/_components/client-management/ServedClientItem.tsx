import React from 'react';

export interface ServedClientItemProps {
  seatingId?: number;
  seatingNum?: number;
  tableType?: 'BASIC' | 'PARTY';
  exitTime?: string;
  waitingId?: string;
  handleExitModal?: () => void;
}

export const ServedClientItem = ({
  seatingNum,
  exitTime,
  handleExitModal,
}: ServedClientItemProps) => {
  return (
    <div className="flex flex-col space-y-3 rounded-lg border border-gy-100 bg-wt p-5 shadow-client-item">
      <div className="flex flex-row items-center space-x-1 font-h4">
        <div className="text-gy-800">{seatingNum}번 테이블</div>
        <div className="text-gy-200 font-b1-normal-semibold">|</div>
        <div className=" bg-wt text-gy-500">퇴장 예정 시간 {exitTime}</div>
      </div>
      <button
        className="w-[342px] rounded-md bg-primary-200 px-[117px] py-[13px] text-primary-400"
        onClick={handleExitModal}
      >
        <span className="block w-[108px] text-center font-b2-normal-semibold">
          퇴장 처리하기
        </span>
      </button>
    </div>
  );
};
