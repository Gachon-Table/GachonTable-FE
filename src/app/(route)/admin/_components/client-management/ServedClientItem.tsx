import { TableTypeLabel } from '@/app/(route)/admin/_components/TableTypeLabel';
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
  tableType,
  handleExitModal,
}: ServedClientItemProps) => {
  return (
    <div className="flex flex-row justify-between  rounded-lg border border-gy-100 bg-wt px-5 py-6 shadow-client-item">
      <div className="flex flex-col space-y-[10px]">
        <div className="flex flex-row items-center space-x-[6px] font-h4">
          <div className="text-gy-800">{seatingNum}번 테이블</div>
          <TableTypeLabel tableType={tableType} />
        </div>
        <div className="text-gy-500 font-b2-normal-medium">
          퇴장시간 : {exitTime}
        </div>
      </div>
      <button
        className="w-[108px] rounded-md bg-primary-200 px-[16px] py-[13px] text-primary-400 font-b2-normal-semibold"
        onClick={handleExitModal}
      >
        퇴장 처리하기
      </button>
    </div>
  );
};
