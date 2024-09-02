import React from 'react';
import { Logout } from 'public';

export interface LogoutButtonProps {
  onClick: () => void;
}

export const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <button
      className="border-gy-200 flex flex-row items-center space-x-2 rounded-md border bg-wt px-[130.5px] py-[19px]"
      onClick={onClick}
    >
      <div className="text-gy-900 font-h4">로그아웃 하기</div>
      <Logout />
    </button>
  );
};
