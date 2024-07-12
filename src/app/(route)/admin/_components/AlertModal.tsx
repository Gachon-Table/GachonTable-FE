import React from 'react';

interface AlertModalProps {
  message: string;
  button: string;
  onCancel: () => void;
  onConfirm?: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  message,
  button,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-6 shadow-lg">
        <div className="text-lg font-medium">{message}하시겠습니까?</div>
        <div className="mt-2 text-sm font-light">
          맞는지 확인 후 {button} 버튼을 눌러주세요.
        </div>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <button
            className="rounded-lg bg-white px-5 py-3 text-sm font-light shadow-md hover:bg-gray-100"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="bg-point-red rounded-lg px-5 py-3 text-sm font-light text-white shadow-md"
            onClick={onConfirm}
          >
            {message.substring(message.length - 2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
