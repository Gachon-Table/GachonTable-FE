'use client';
import React, { useState } from 'react';

const ParticipantsModal = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="rounded-m flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="px-24 py-3 text-lg font-normal">
          방문 인원을 입력하세요.
        </div>
        <div className="w-full border border-gray-300"></div>
        <div className="mb-6 mt-10 flex items-center justify-center">
          <button
            className="rounded-[5px]  border border-gray-300 bg-white px-[22px] py-3 text-[17px] font-bold text-gray-300  shadow-md hover:bg-gray-100 hover:text-white"
            onClick={handleDecrement}
            disabled={count <= 1} // 1보다 작아지면 버튼 비활성화
          >
            -
          </button>
          <div className="w-[90px] items-center justify-center border-y border-gray-300 py-3 text-center">
            {count}
          </div>
          <button
            className="text-m rounded-[5px] border border-sunglo bg-white px-5 py-3 font-bold text-sunglo shadow-md hover:bg-sunglo hover:text-white"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button className="mb-6 rounded-[5px] bg-sunglo px-[68px] py-3 text-sm font-semibold text-white">
          대기 시작
        </button>
      </div>
    </div>
  );
};

export default ParticipantsModal;
