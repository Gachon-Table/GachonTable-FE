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
    <div className="mt-5 flex w-full max-w-md cursor-pointer flex-row">
      <div
        className={`flex w-1/2 flex-row items-center justify-center rounded-l-md  p-5 text-center ${studentId ? 'bg-gray-300' : 'bg-white'}`}
        onClick={handleClick}
      >
        <img
          src="/images/id-icon.png"
          alt="학생증 아이콘"
          className="mr-2 h-5"
        />
        <span>학생증 필요</span>
      </div>
      <div
        className={`flex w-1/2 flex-row items-center justify-center rounded-r-md  p-5 text-center ${studentId ? 'bg-white' : 'bg-gray-300'}`}
        onClick={handleClick}
      >
        <img
          src="/images/no-id-icon.png"
          alt="학생증 아이콘"
          className="mr-2 h-5"
        />
        <span>학생증 불필요</span>
      </div>
    </div>
  );
}

export default StudentIdInputBox;
