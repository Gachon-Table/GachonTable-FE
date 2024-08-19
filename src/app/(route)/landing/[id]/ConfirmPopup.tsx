import React from 'react';

interface ConfirmPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ onClose, onConfirm }) => {
  
  const handleConfirm = () => {
    onConfirm(); // onConfirm 핸들러 호출
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 이벤트의 전파를 막기
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50" onClick={onClose}>
      <div className="relative w-full max-w-md mx-auto bg-white text-black text-center rounded-lg shadow-lg border p-4" onClick={stopPropagation}>
        <div className="text-black text-xl font-bold h-10 flex justify-center items-center">신청하시겠습니까?</div>
        <div className="text-black text-base h-10 flex justify-center items-center">인원수 확인 후 확인 버튼을 눌러주세요</div>
        <div className="text-black text-xs h-10 flex justify-center items-center">신청 시 카카오톡으로 대기 현황을 알려 드려요!</div>
        <div className="flex flex-row justify-center mt-4 gap-4 h-12">
          <div
            className="w-1/5 text-lg flex justify-center items-center border-r border-gray-300 cursor-pointer bg-gray-300 text-black rounded py-2"
            onClick={onClose}
          >
            취소
          </div>
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

export default ConfirmPopup;