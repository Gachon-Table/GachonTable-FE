import React, { useState } from 'react';

interface WaitingTeamsProps {
  queueing: number;
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({ queueing }) => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false); // 팝업 상태 관리

  const incrementPeople = () => {
    setPeopleCount(peopleCount + 1);
  };

  const decrementPeople = () => {
    if (peopleCount > 1) {
      setPeopleCount(peopleCount - 1);
    }
  };

  const openPopup = () => {
    setShowLoginPopup(true);
  };

  const closePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="w-full h-full max-h-screen mt-2 flex flex-col">
      <div className="text-xl font-bold mb-10">현재 {queueing}팀이 웨이팅 중입니다.</div>
      <div className="flex flex-col justify-center items-center mt-2">
        <div className="mb-2">인원 수</div>
        <div className="flex items-center mb-20">
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-l"
            onClick={decrementPeople}
          >
            -
          </button>
          <div className="bg-white text-black py-2 px-4 border">{peopleCount}</div>
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-r"
            onClick={incrementPeople}
          >
            +
          </button>
        </div>
      </div>
      <div onClick={openPopup} className="bg-gray-800 text-white flex justify-center items-center h-24 text-2xl font-bold cursor-pointer">
        웨이팅 신청
      </div>
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="absolute inset-0" onClick={closePopup}></div>
          <div className="relative h-1/3 w-full max-w-md mx-auto bg-white text-black text-center rounded-lg shadow-lg border">
            <div className="text-black text-xl font-bold h-20 flex justify-center items-center">신청하시겠습니까?</div>
            <div className="text-black text-xs h-10 flex justify-center items-center">신청 시 카카오톡으로 대기 현황을 알려 드려요!</div>
            <div className="text-red-600 text-xs flex justify-center items-center">해당 주점은 학생증이 필수인 주점입니다!</div>
            <div className="flex flex-row mt-5 h-16">
              <div className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300 cursor-pointer" onClick={closePopup}>취소</div>
              <div className="w-1/2 text-lg flex justify-center items-center cursor-pointer" >신청</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingTeams;