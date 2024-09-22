import React, { Dispatch, SetStateAction } from 'react';

interface TabProps {
  curTab: string;
  setFunc: Dispatch<SetStateAction<string>>;
}

const Tab = ({ curTab, setFunc }: TabProps) => {
  return (
    <div className="mx-4 mt-4 flex justify-between">
      <div
        className={`flex w-[50%] cursor-pointer flex-col items-center border-b-2 p-2 ${curTab === 'ing' ? `text-text-gy-900 border-black` : `border-gy-200 text-gy-400`}`}
        onClick={() => {
          setFunc('ing');
        }}
      >
        <div className="font-b1-normal-semibold">줄서기 현황</div>
      </div>
      <div
        className={`flex w-[50%] cursor-pointer flex-col items-center border-b-2 p-2 ${curTab === 'ed' ? `text-text-gy-900 border-black` : `border-gy-200 text-gy-400`}`}
        onClick={() => {
          setFunc('ed');
        }}
      >
        <div className="font-b1-normal-semibold">줄서기 내역</div>
      </div>
    </div>
  );
};

export default Tab;
