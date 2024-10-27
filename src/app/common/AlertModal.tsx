import React from 'react';
import { patchWaitingCancel } from '@/app/api/service/user/patchWaitingCancel';
import { throttle } from '@/app/utils/throttle';
import { useRouter } from 'next/navigation';

interface AlertModalProps {
  message: string;
  hasSubmessage: boolean;
  submessage?: string;
  hasCancelButton?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  waitingId?: string;
  isCloseButton?: boolean;
}

const AlertModal = ({
  message,
  hasSubmessage,
  submessage,
  hasCancelButton = true,
  onCancel,
  onConfirm,
  waitingId,
  isCloseButton = false,
}: AlertModalProps) => {
  const router = useRouter();
  const handleCancel = throttle(async () => {
    if (waitingId) {
      try {
        const result = await patchWaitingCancel(waitingId);
        if (result.success) {
          // router.push('/mypage');
          router.refresh();
        }
      } catch (error) {
        console.error('웨이팅 취소 중 오류 발생:', error);
      }
    } else {
      console.error('waitingId가 유효하지 않습니다.');
    }
  }, 5000);

  const handleConfirm = async () => {
    if (waitingId && onConfirm) {
      handleCancel();
      onConfirm();
    } else if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <>
      <div className="z-60 fixed left-0 top-0 h-full w-full bg-bk/30"></div>

      <div className="z-70 fixed left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-md bg-white p-6 px-4 pb-4 pt-8">
          <div className="block w-[279px] whitespace-pre-line text-center text-gy-900 font-h4">
            {message}
          </div>
          {hasSubmessage && (
            <div className="block w-[279px] text-center text-gy-600 font-b2-normal-semibold">
              {submessage}
            </div>
          )}
          <div className="gap-5">
            {hasCancelButton ? (
              <div className="mt-5 flex items-center justify-center gap-[7px]">
                <button
                  className="flex h-[46px] w-[136px] items-center justify-center rounded-md bg-gy-100 px-[14px] py-[13px] font-semibold text-gy-700 hover:bg-gray-100"
                  onClick={onCancel}
                >
                  <span>{isCloseButton ? '닫기' : '취소'}</span>
                </button>
                <button
                  className="flex h-[46px] w-[136px] items-center justify-center rounded-md bg-primary-400 px-[14px] py-[13px] font-semibold text-white"
                  onClick={handleConfirm}
                >
                  <span>{isCloseButton ? '웨이팅 내역 확인' : '확인'}</span>
                </button>
              </div>
            ) : (
              <div className="mt-5 flex items-center justify-center gap-[7px]">
                <button
                  className="rounded-md bg-primary-400 px-[85.5px] py-[13px] font-semibold text-white"
                  onClick={handleConfirm}
                >
                  <span className="block w-[108px] text-center">확인</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
