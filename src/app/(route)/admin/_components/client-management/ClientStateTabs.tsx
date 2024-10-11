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
    <div className="w-full px-4">
      <div className="mb-3 mt-16 flex w-full items-start justify-center space-x-1.5 rounded-md bg-gy-200 p-1.5">
        <div
          className={`flex flex-1 cursor-pointer items-center justify-center rounded px-[33px] py-1.5 transition-colors duration-300 font-b1-normal-semibold ${
            selectedValue === '대기 고객'
              ? 'bg-wt text-gy-700'
              : 'bg-gy-200 text-gy-400'
          }`}
          onClick={() => onClick?.('대기 고객')}
          role="tab"
          aria-selected={selectedValue === '대기 고객'}
          tabIndex={0}
        >
          대기 고객
        </div>
        <div
          className={`flex flex-1 cursor-pointer items-center justify-center rounded px-[33px] py-1.5 transition-colors duration-300 font-b1-normal-semibold ${
            selectedValue === '이용 고객'
              ? 'bg-wt text-gy-700'
              : 'bg-gy-200 text-gy-400'
          }`}
          onClick={() => onClick?.('이용 고객')}
          role="tab"
          aria-selected={selectedValue === '이용 고객'}
          tabIndex={0}
        >
          이용 고객
        </div>
      </div>
    </div>
  );
};
