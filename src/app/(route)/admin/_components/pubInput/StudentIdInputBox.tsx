import React from 'react';

interface Props {
  studentIdeState: {
    studentId: boolean;
    setStudentId: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function StudentIdInputBox({ studentIdeState }: Props) {
  const { studentId, setStudentId } = studentIdeState;

  const handleClick = () => {
    setStudentId(!studentId);
  };

  return (
    <div className="h-18 relative mt-3 flex w-full max-w-md cursor-pointer flex-row overflow-hidden rounded-xl bg-white">
      <div
        className={`absolute left-0 top-0 h-full w-1/2 rounded-xl bg-main-blue transition-all duration-300 ease-in-out ${
          studentId ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>
      <div
        className={`z-10 flex w-1/2 flex-row items-center justify-center rounded-xl p-5 text-center font-medium transition-colors duration-300 ease-in-out ${
          studentId ? 'text-white' : 'text-black'
        }`}
        onClick={handleClick}
      >
        학생증 필요
      </div>
      <div
        className={`z-10 flex w-1/2 flex-row items-center justify-center rounded-xl p-5 text-center font-medium transition-colors duration-300 ease-in-out ${
          studentId ? 'text-black' : 'text-white'
        }`}
        onClick={handleClick}
      >
        학생증 불필요
      </div>
    </div>
  );
}

export default StudentIdInputBox;
