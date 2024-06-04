'use client';

import React, { useState } from 'react';

const NumberKeypad = () => {
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

  const numbers = insertHyphens(value);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-32 flex-col items-center">
        <div className="mt-6 text-5xl font-bold">{value ? numbers : ''}</div>
        <p className="text-s mt-6 text-center text-gray-300">
          웨이팅 알림을 받을 수 있는 전화번호를 입력해주세요.
        </p>
      </div>
      <div className="border-width-xs mt-4 grid h-[500px] w-full grid-cols-3 grid-rows-4 divide-x divide-y divide-gray-200 border border-gray-200">
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
        className={`h-32 w-full px-4 text-4xl font-bold ${value.length === 11 ? 'bg-sunglo text-white' : 'bg-gray-300 text-gray-500'}`}
      >
        방문 인원 수 입력
      </button>
    </div>
  );
};

export default NumberKeypad;
