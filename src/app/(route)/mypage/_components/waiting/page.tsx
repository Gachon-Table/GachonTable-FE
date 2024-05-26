import Link from 'next/link';
import React from 'react';

const Waiting = () => {
  return (
    <div className="flex h-[5rem] w-[100%] flex-col border-b-[1px] p-[1.2rem]">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center">
          <div>주점이름</div>
          <div className="text-[0.7rem] font-light">예상 대기 시간 : 1시간</div>
        </div>
        <div>대기순번 : 1</div>
        <Link href={'/mypage/cancel'} className="cursor-pointer text-red-600">
          취소
        </Link>
      </div>
    </div>
  );
};

export default Waiting;
