import React from 'react';
import { TableTypeLabel } from '@/app/(route)/admin/_components/TableTypeLabel';
import { Phone } from 'public';

export interface PendingClientItemProps {
  index?: number;
  username?: string;
  tableType?: 'BASIC' | 'PARTY';
  tel?: string;
  waitingId?: string;
  waitingStatus?: string;
  handleCallUser?: () => void;
  handleTableInputModal?: () => void;
}

export const PendingClientItem = ({
  index,
  username,
  tableType,
  tel,
  waitingStatus,
  handleCallUser,
  handleTableInputModal,
}: PendingClientItemProps) => {
  const isDisabled = waitingStatus === 'AVAILABLE';
  const callButtonStyle =
    waitingStatus === 'AVAILABLE'
      ? 'bg-gy-100 text-gy-300'
      : 'bg-primary-200 text-primary-400';

  const callButtonText =
    waitingStatus === 'AVAILABLE' ? '고객 호출됨' : '고객 호출';

  const handlePhoneCall = (tel: string) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      window.location.href = `tel:${tel}`;
    } else {
      alert('이 기능은 모바일 기기에서만 사용할 수 있습니다.');
    }
  };

  return (
    <div className="flex flex-col space-y-4 rounded-lg border border-gy-100 bg-wt p-5 shadow-client-item">
      <div className="flex w-[342px] flex-row justify-between">
        <div className="flex flex-row items-center space-x-[5px] font-h4">
          <div className="text-gy-800">{index}번</div>
          <div className="text-gy-200 font-b1-normal-semibold">|</div>
          <div className="text-gy-800">{username}</div>
          <TableTypeLabel tableType={tableType} />
        </div>
        <button
          className="cursor-pointer"
          onClick={() => tel && handlePhoneCall(tel)}
        >
          <Phone />
        </button>
      </div>

      <div className="flex space-x-2.5">
        <button
          className={`rounded-md px-7 py-3 ${callButtonStyle}`}
          disabled={isDisabled}
          onClick={handleCallUser}
        >
          <span className="block w-[108px] text-center font-b2-normal-semibold">
            {callButtonText}
          </span>
        </button>
        <button
          className="rounded-md bg-primary-200 px-7 py-3 text-primary-400"
          onClick={handleTableInputModal}
        >
          <span className="block w-[108px] text-center font-b2-normal-semibold">
            입장 처리
          </span>
        </button>
      </div>
    </div>
  );
};
