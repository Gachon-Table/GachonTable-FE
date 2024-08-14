import React from 'react';

interface PeopleCountPopupProps {
  peopleCount: number;
  incrementPeople: () => void;
  decrementPeople: () => void;
  onClose: () => void;
  onConfirm: () => void;
}

const PeopleCountPopup: React.FC<PeopleCountPopupProps> = ({
  peopleCount,
  incrementPeople,
  decrementPeople,
  onClose,
  onConfirm,
}) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[31rem] mx-auto bg-white text-black text-center rounded-lg shadow-lg border pt-8 flex flex-col"
        onClick={stopPropagation}
        style={{
          boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
          boxSizing: 'border-box',
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-black text-xl font-bold mb-10">
            방문 인원을 입력하세요.
          </div>
          <div className="flex items-center mb-10">
            <button
              className="bg-gray-300 text-black font-bold py-2 px-4 rounded-l-lg h-12"
              onClick={decrementPeople}
            >
              -
            </button>
            <div className="bg-white text-black py-2 px-4 border-t border-b border-gray-300 rounded-lg h-12 flex items-center justify-center">
              {peopleCount}
            </div>
            <button
              className="bg-[#7DA4FF] text-white font-bold py-2 px-4 rounded-r-lg h-12"
              onClick={incrementPeople}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={onConfirm}
            style={{ backgroundColor: '#3B4D9B', border: 'none' }}
            className="text-white text-2xl font-bold cursor-pointer w-full h-20 rounded-b-lg"
          >
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCountPopup;
