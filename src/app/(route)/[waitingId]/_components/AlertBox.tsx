import React from 'react';
import { AlertIcon } from '@/app/assets';

const AlertBox = () => {
  return (
    <div className="flex w-80 flex-row rounded-2xl bg-[#F7F8F9] p-5">
      <AlertIcon />
      <span className="pl-2 pt-0.5 text-sm font-light">
        순서가 되면 카카오톡으로 알려드릴게요
      </span>
    </div>
  );
};
export default AlertBox;
