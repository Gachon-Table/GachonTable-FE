import React from 'react';
import { useRouter } from 'next/navigation';

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
  const router = useRouter();

  const handleConfirm = () => {
    onClose();
    router.push('/landing');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto bg-white text-black text-center rounded-lg shadow-lg border p-4">
        <div className="text-black text-xl font-bold h-10 flex justify-center items-center">신청이 완료되었습니다!</div>
        <div className="text-black text-base h-10 flex justify-center items-center">확인을 눌러 홈으로 돌아가세요.</div>
        <div className="flex flex-row justify-center mt-4 gap-4 h-12">
          <div
            className="w-1/5 text-lg flex justify-center items-center cursor-pointer bg-red-600 text-white rounded py-2"
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
