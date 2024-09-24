import React from 'react';
import { AlertIcon } from 'public';

interface AlertBoxProps {
  color?: 'sementic' | 'primary';
}

const AlertBox = ({ color = 'sementic' }: AlertBoxProps) => {
  return (
    <div
      className={`flex w-[382px] flex-row space-x-3 rounded-md px-6 py-[18.5px] ${
        color === 'primary' ? 'bg-primary-400' : 'bg-blue-200'
      }`}
    >
      <AlertIcon />
      <span
        className={`font-b1-normal-semibold ${color === 'primary' ? 'text-primary-200' : 'text-gy-800'}`}
      >
        순서가 되면 카카오톡으로 알려드릴게요.
      </span>
    </div>
  );
};

export default AlertBox;
