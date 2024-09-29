import React from 'react';

export interface TabProps {
  selectedValue?: '대기 고객' | '이용 고객';
  onClick?: (value: '대기 고객' | '이용 고객') => void;
}

export const ClientStateTabs = ({
  selectedValue = '대기 고객',
  onClick,
}: TabProps) => {
  return (
    <div className="mb-2 mt-16 flex space-x-1.5 rounded-md bg-gy-200 p-1.5">
      <div
        className={`flex cursor-pointer items-center justify-center rounded px-[33px] py-1.5 transition-colors duration-300 font-b1-normal-semibold ${
          selectedValue === '대기 고객'
            ? 'bg-wt text-gy-700'
            : 'bg-gy-200 text-gy-400'
        }`}
        onClick={() => onClick?.('대기 고객')}
        role="tab"
        aria-selected={selectedValue === '대기 고객'}
        tabIndex={0}
      >
        <span className="block w-[116px] text-center">대기 고객</span>
      </div>
      <div
        className={`flex cursor-pointer items-center justify-center rounded px-[33px] py-1.5 transition-colors duration-300 font-b1-normal-semibold ${
          selectedValue === '이용 고객'
            ? 'bg-wt text-gy-700'
            : 'bg-gy-200 text-gy-400'
        }`}
        onClick={() => onClick?.('이용 고객')}
        role="tab"
        aria-selected={selectedValue === '이용 고객'}
        tabIndex={0}
      >
        <span className="block w-[116px] text-center">이용 고객</span>
      </div>
    </div>
  );
};
