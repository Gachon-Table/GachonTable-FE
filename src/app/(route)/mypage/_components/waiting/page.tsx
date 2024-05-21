import React from 'react';

const Waiting = () => {
  return (
    <div className="flex w-[100%] flex-col p-[1.2rem] h-[5rem] border-b-[1px]">
      <div className="flex items-center justify-around">
        <div className='flex flex-col items-center'>
          <div>주점이름</div>
          <div className='font-light text-[0.7rem]'>예상 대기 시간 : 1시간</div>
        </div>
        <div>대기순번 : 1</div>
        <div>취소</div>
      </div>
    </div>
  );
};

export default Waiting;
