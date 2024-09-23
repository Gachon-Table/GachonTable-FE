import React from 'react';
import { patchWaitingCancel } from '@/app/api/service/user/patchWaitingCancel';

interface AlertModalProps {
  message: string;
  hasSubmessage: boolean;
  submessage?: string;
  onCancel: () => void;
  onConfirm?: () => void;
  waitingId?: string;
}

const AlertModal = ({
  message,
  hasSubmessage,
  submessage,
  onCancel,
  onConfirm,
  waitingId,
}: AlertModalProps) => {
  const handleConfirm = async () => {
    if (waitingId) {
      patchWaitingCancel(waitingId);
    }
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <>
      <div className="z-60 fixed left-0 top-0 h-full w-full bg-bk/30"></div>

      <div className="z-70 fixed left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-md bg-white p-6 px-4 pb-4 pt-8">
          <div className="block w-[279px] text-center text-gy-900 font-h4">
            {message}
          </div>
          {hasSubmessage && (
            <div className="block w-[279px] text-center text-gy-600 font-b2-normal-semibold">
              {submessage}
            </div>
          )}
          <div className="gap-5">
            <div className="mt-5 flex items-center justify-center gap-[7px]">
              <button
                className="h-[46px] w-[136px] rounded-md bg-gy-100 px-[14px] py-[13px] font-semibold text-gy-700 hover:bg-gray-100"
                onClick={onCancel}
              >
                취소
              </button>
              <button
                className="h-[46px] w-[136px] rounded-md bg-primary-400 px-[14px] py-[13px] font-semibold text-white"
                onClick={handleConfirm}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
