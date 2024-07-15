import React, { Dispatch, SetStateAction } from 'react';

interface TabProps {
  curTab: string;
  setFunc: Dispatch<SetStateAction<string>>;
}

const Tab = ({ curTab, setFunc }: TabProps) => {
  return (
    <div className="mt-[3rem] flex justify-between">
      <div
        className={`flex w-[50%] cursor-pointer flex-col items-center border-b-2 p-2 ${curTab === 'ing' ? `border-black text-black` : `border-gray-200 text-gray-300`}`}
        onClick={() => {
          setFunc('ing');
        }}
      >
        <div className='font-bold'>줄서기 현황</div>
      </div>
      <div
        className={`flex w-[50%] cursor-pointer flex-col items-center border-b-2 p-2 ${curTab === 'ed' ? `border-black text-black` : `border-gray-200 text-gray-300`}`}
        onClick={() => {
          setFunc('ed');
        }}
      >
        <div className='font-bold'>줄서기 내역</div>
      </div>
    </div>
  );
};

export default Tab;
