import React from 'react';
import { useRouter } from 'next/navigation';

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
  const router = useRouter();

  const handleConfirm = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <div className="relative mx-auto w-full max-w-md rounded-lg border bg-white p-4 text-center text-black shadow-lg">
        <div className="flex h-10 items-center justify-center text-xl font-bold text-black">
          신청이 완료되었습니다!
        </div>
        <div className="flex h-10 items-center justify-center text-base text-black">
          확인을 눌러 홈으로 돌아가세요.
        </div>
        <div className="mt-4 flex h-12 flex-row justify-center gap-4">
          <div
            className="flex w-1/5 cursor-pointer items-center justify-center rounded bg-red-600 py-2 text-lg text-white"
            onClick={handleConfirm}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
