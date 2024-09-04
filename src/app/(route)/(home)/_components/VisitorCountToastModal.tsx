'use client';
import React, { useEffect, useState } from 'react';
import { Minus, Plus } from 'public';

interface VisitorCountToastModalProps {
  onClose: () => void;
  handleHeadCountChange: (headCount: number) => void;
  onSubmit: () => void;
}

export const VisitorCountToastModal = ({
  onClose,
  handleHeadCountChange,
  onSubmit,
}: VisitorCountToastModalProps) => {
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
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="fixed inset-0 bg-bk/30 opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-50 flex flex-col items-center justify-center rounded-t-[20px] bg-wt px-[15.5px] pb-8 pt-[40px]">
        <div className="mb-[29px] block w-[383px] text-center font-h3">
          테이블 번호를 지정해주세요.
        </div>

        <div className="mb-8 flex w-[172px] flex-row items-center space-x-[9px] rounded-[9px] border-[1.5px] border-gy-200 px-[15px] py-3">
          <button onClick={handleDecrement} disabled={count <= 1}>
            <Minus />
          </button>
          <div className="block w-[52.5px] text-center text-gy-900 font-h1">
            {count}
          </div>
          <button onClick={handleIncrement}>
            <Plus />
          </button>
        </div>

        <button
          className="rounded-md bg-primary-400 px-6 py-[19px]"
          onClick={onSubmit}
        >
          <span className="block w-[334px] text-center text-wt font-h4">
            웨이팅 신청하기
          </span>
        </button>
      </div>
    </div>
  );
};
