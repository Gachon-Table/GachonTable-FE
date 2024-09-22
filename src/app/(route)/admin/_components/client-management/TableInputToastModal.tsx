'use client';
import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import { ClearButton } from 'public';

export interface TableInputToastModalProps {
  onCancel: () => void;
  onSubmit: (tableNumber: number) => void;
}

export const TableInputToastModal = ({
  onCancel,
  onSubmit,
}: TableInputToastModalProps) => {
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTableNumber(value === '' ? null : Number(value));
  };

  const handleClear = () => {
    setTableNumber(null);
  };

  const handleSubmit = () => {
    if (tableNumber !== null && tableNumber > 0) {
      onSubmit(tableNumber);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="fixed inset-0 bg-bk/30" onClick={onCancel}></div>
      <div className="relative z-50 rounded-t-[20px] bg-wt px-4 pb-4 pt-8">
        <div className="mb-4 font-h3">테이블 번호를 지정해주세요.</div>
        <div className="mb-6 rounded-lg bg-gy-0 px-[15px] py-3 ">
          <input
            ref={inputRef}
            type="text"
            value={tableNumber === null ? '' : tableNumber}
            onChange={handleChange}
            className="w-full bg-gy-0 font-h2 focus:outline-none"
            aria-label="테이블 번호 입력"
          />
          {tableNumber !== null && (
            <div
              className="absolute right-10 top-[103px] -translate-y-1/2 transform cursor-pointer"
              onClick={handleClear}
            >
              <ClearButton />
            </div>
          )}
        </div>

        <button
          className={`rounded-md bg-primary-400 px-6 py-[19px] ${
            tableNumber === null || tableNumber <= 0
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          onClick={handleSubmit}
          disabled={tableNumber === null || tableNumber <= 0}
        >
          <span className="block w-[334px] text-center text-wt font-h4">
            입장 처리하기
          </span>
        </button>
      </div>
    </div>
  );
};
