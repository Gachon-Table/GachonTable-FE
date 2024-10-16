import React from 'react';

export const NoteBox = () => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-md border border-gy-200 px-4 pb-[26px]  pt-4">
      <div className="text-gy-600 font-c1-semibold">유의사항</div>
      <ul className="list-disc space-y-2 pl-4 text-gy-900 font-c1-semibold">
        <li>
          대기 접수 후 <span className="text-red-400">알림톡</span>을 꼭
          확인해주세요.
        </li>
        <li>
          시간 내에 입장하지 않으면{' '}
          <span className="text-red-400">자동으로 취소</span> 처리됩니다.
        </li>
        <li>
          빠른 입장을 위해{' '}
          <span className="text-red-400">재학생 인증 수단 및 주민등록증</span>을
          준비해주세요.
        </li>
      </ul>
    </div>
  );
};
