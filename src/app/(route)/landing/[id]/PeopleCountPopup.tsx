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
      className="fixed inset-0 flex items-end justify-center bg-transparent"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[30rem] mx-auto bg-white text-black text-center rounded-lg shadow-lg border pt-8 flex flex-col justify-between h-4/10"
        onClick={stopPropagation}
        style={{
          boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
      >
        <div>
          <div className="text-black text-xl font-bold mb-12">
            방문 인원을 입력하세요.
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded-l-lg" onClick={decrementPeople}>
                -
              </button>
              <div className="bg-white text-black py-2 px-4 border-t border-b border-gray-300 rounded-lg">{peopleCount}</div>
              <button className="bg-[#7DA4FF] text-white font-bold py-2 px-4 rounded-r-lg" onClick={incrementPeople}>
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={onConfirm}
            style={{ backgroundColor: '#3B4D9B' }}
            className="text-white flex justify-center items-center h-20 text-2xl font-bold cursor-pointer rounded-lg mt-4"
          >
            신청하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCountPopup;
