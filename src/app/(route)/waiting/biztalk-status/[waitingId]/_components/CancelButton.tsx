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
      className={`${order < 0 ? 'bg-gy-400' : 'bg-primary-400'} mb-8 flex h-16 w-full cursor-pointer items-center justify-center rounded-md text-wt font-h4`}
    >
      대기 취소하기
    </button>
  );
};

export default CancelButton;
