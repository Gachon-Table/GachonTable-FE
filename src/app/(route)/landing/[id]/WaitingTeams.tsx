import React, { useState } from 'react';

const WaitingTeams: React.FC = () => {
  const [numberOfTeams] = useState(5); // Example static number
  const [peopleCount, setPeopleCount] = useState(1); // Default people count

  const incrementPeople = () => {
    setPeopleCount(peopleCount + 1);
  };

  const decrementPeople = () => {
    if (peopleCount > 1) {
      setPeopleCount(peopleCount - 1);
    }
  };

  return (
    <div className="w-full h-full max-h-screen mt-2 flex flex-col">
      <div className="text-xl font-bold mb-10">현재 {numberOfTeams}팀이 웨이팅 중입니다.</div>
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
      <div className="bg-gray-800 text-white flex justify-center items-center h-24 text-2xl font-bold">
        웨이팅 신청
      </div>
    </div>
  );
};

export default WaitingTeams;
