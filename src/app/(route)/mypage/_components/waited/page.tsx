import React from 'react';

const Waited = () => {
  return (
    <div className="flex w-[100%] flex-col p-[1rem] border-b-[1px] h-[5rem]">
      <div className="flex items-center justify-around">
        <div>주점이름</div>
        <div>
          <div>방문 입장 시간 : 19:00</div>
          <div>대기 소요 시간 : 1시간</div>
        </div>
      </div>
    </div>
  );
};

export default Waited;
