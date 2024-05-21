import React from 'react';

const Waiting = () => {
  return (
    <div className="flex w-[100%] flex-col">
      <div className="flex items-center justify-evenly border-b-2">
        <div>주점이름</div>
        <div>
          <div>방문 입장 시간 : 19:00</div>
          <div>대기 소요 시간 : 1시간</div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
