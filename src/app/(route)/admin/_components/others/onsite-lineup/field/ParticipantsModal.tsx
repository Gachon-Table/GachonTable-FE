'use client';
import React, { useEffect, useState } from 'react';

interface ParticipantsModalProps {
  onClose: () => void;
  handleHeadCountChange: (headCount: number) => void;
  onSubmit: () => void;
}

const ParticipantsModal: React.FC<ParticipantsModalProps> = ({
  onClose,
  handleHeadCountChange,
  onSubmit,
}) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    handleHeadCountChange(count);
  }, [count, handleHeadCountChange]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="rounded-m flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="px-24 py-3 text-lg font-normal">
          방문 인원을 입력하세요.
        </div>
        <div className="w-full border border-gray-300"></div>
        <div className="mb-6 mt-10 flex items-center justify-center">
          <button
            className="rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-bold text-gray-300  shadow-md hover:bg-gray-100 hover:text-white"
            onClick={handleDecrement}
            disabled={count <= 1}
          >
            -
          </button>
          <div className="w-24 items-center justify-center border-y border-gray-300 py-3 text-center">
            {count}
          </div>
          <button
            className="text-m rounded-md border border-point-yellow bg-white px-5 py-3 font-bold text-point-yellow shadow-md hover:bg-point-yellow hover:text-white"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="mb-6 mr-5 rounded-md bg-gray-400 px-16 py-3 text-sm font-semibold text-white"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="mb-6 rounded-md bg-point-yellow px-12 py-3 text-sm font-semibold text-white"
            onClick={onSubmit}
          >
            대기 시작
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsModal;
