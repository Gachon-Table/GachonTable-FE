import React from 'react';

export interface ServedClientItemProps {
  tableNum?: number;
  exitTime?: string;
  waitingId?: string;
}

export const ServedClientItem = ({
  tableNum,
  exitTime,
}: ServedClientItemProps) => {
  return (
    <div className="shadow-client-item border-gy-100 flex flex-col space-y-2.5 rounded-lg border bg-wt p-5">
      <div className="font-h4">{tableNum}번 테이블</div>
      <div className="text-gy-600 border-gy-200 rounded-md border bg-wt px-[125.5px] py-[13px] font-b2-normal-semibold">
        퇴장 시간 {exitTime}
      </div>
    </div>
  );
};
