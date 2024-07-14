'use client';

import React, { useEffect, useState } from 'react';

interface NumberKeypadProps {
  onClose: () => void;
  handlePhoneNumberChange: (phoneNumber: string) => void;
}

const NumberKeypad: React.FC<NumberKeypadProps> = ({
  onClose,
  handlePhoneNumberChange,
}) => {
  const [value, setValue] = useState('010');
  const maxLength = 11;

  const onClickSetValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue === '←') {
      setValue((prevValue) => prevValue.slice(0, -1));
    } else if (maxLength && value.length < maxLength) {
      setValue((prevValue) => prevValue + newValue);
    } else if (maxLength && value.length === maxLength) {
      alert('정확한 핸드폰 번호를 입력해주세요.');
    }
  };

  const insertHyphens = (str: string) => {
    const parts = [];

    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        parts.push(str.charAt(i));
      } else if (i === 3) {
        parts.push('-' + str.charAt(i));
      } else if (i === 7) {
        parts.push('-' + str.charAt(i));
      } else {
        parts.push(str.charAt(i));
      }
    }

    return parts.join('');
  };

  const formatPhoneNumber = (number: string) => {
    if (number.length !== 11) return number;
    return `+82 ${number.slice(1, 3)}-${number.slice(3, 7)}-${number.slice(7)}`;
  };

  const numbers = insertHyphens(value);

  useEffect(() => {
    const formattedNumber = formatPhoneNumber(value);
    handlePhoneNumberChange(formattedNumber);
  }, [value, handlePhoneNumberChange]);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-1/5 flex-col items-center">
        <div className="mt-6 text-5xl font-bold">{value ? numbers : ''}</div>
        <p className="text-s mt-6 text-center text-gray-300">
          웨이팅 알림을 받을 수 있는 전화번호를 입력해주세요.
        </p>
      </div>
      <div className="border-width-xs mt-4 grid h-4/5 w-full grid-cols-3 grid-rows-4 divide-x divide-y divide-gray-200 border border-gray-200">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '←'].map(
          (item, index) => (
            <button
              key={index}
              className="flex items-center justify-center bg-white p-4 text-5xl font-bold text-black"
              onClick={onClickSetValue}
              value={item}
            >
              {item === '←' ? (
                <img
                  src="/images/delete-icon.png"
                  alt="delete icon"
                  className="h-15 w-15"
                />
              ) : (
                item
              )}
            </button>
          ),
        )}
      </div>
      <button
        className={`h-1/5 w-full px-4 text-4xl font-bold ${value.length === 11 ? 'bg-point-yellow text-white' : 'bg-gray-300 text-gray-500'}`}
        onClick={onClose}
      >
        방문 인원 수 입력
      </button>
    </div>
  );
};

export default NumberKeypad;
