import React from 'react';
import { AlertIcon } from 'public';

const AlertBox = () => {
  return (
    <div className="flex flex-row space-x-3 rounded-md bg-blue-200 px-6 pb-[23px] pt-6">
      <AlertIcon />
      <span className="text-gy-600 font-b1-normal-semibold">
        순서가 되면 카카오톡으로 알려드릴게요.
      </span>
    </div>
  );
};
export default AlertBox;
