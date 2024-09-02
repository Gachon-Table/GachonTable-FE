import React from 'react';

interface AlertModalProps {
  message: string;
  onCancel: () => void;
  onConfirm?: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  message,
  onCancel,
  onConfirm,
}) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-30"></div>

      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-md bg-white p-6 px-4 pb-4 pt-8">
          <div className="text-lg font-bold">{message}</div>
          <div className="gap-5">
            <div className="mt-5 flex items-center justify-center gap-[7px]">
              <button
                className="h-[46px] w-[136px] rounded-md bg-opacity-100 px-[14px] py-[13px] font-semibold text-opacity-700 hover:bg-gray-100"
                onClick={onCancel}
              >
                취소
              </button>
              <button
                className="h-[46px] w-[136px] rounded-md bg-primary-400 px-[14px] py-[13px] font-semibold text-white"
                onClick={onConfirm}
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
