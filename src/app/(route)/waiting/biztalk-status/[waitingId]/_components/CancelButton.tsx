import React from 'react';

interface buttonProp {
  handleCancel: () => void;
}

const CancelButton = ({ handleCancel }: buttonProp) => {
  return (
    <button
      onClick={handleCancel}
      className="w-80 cursor-pointer rounded-2xl bg-[#3B4D9B] p-5 text-sm font-medium text-white"
    >
      취소하기
    </button>
  );
};

export default CancelButton;
