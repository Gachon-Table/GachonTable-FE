import React from 'react';

interface buttonProp {
  handleCancel: () => void;
  order: number;
}

const CancelButton = ({ handleCancel, order }: buttonProp) => {
  return (
    <button
      onClick={handleCancel}
      disabled={order < 0}
      className="cursor-pointer rounded-md bg-primary-400 px-6 py-[19px] text-sm text-white font-h4"
    >
      <span className="block w-[334px] text-center">대기 취소하기</span>
    </button>
  );
};

export default CancelButton;
