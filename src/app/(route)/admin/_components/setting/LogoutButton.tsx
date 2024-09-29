import React from 'react';
import { Logout } from 'public';

export interface LogoutButtonProps {
  onClick: () => void;
}

export const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <button
      className="flex w-[382px] max-w-full flex-row items-center justify-center space-x-2 rounded-md border border-gy-200 bg-wt py-[19px]"
      onClick={onClick}
    >
      <div className="text-gy-900 font-h4">로그아웃 하기</div>
      <Logout />
    </button>
  );
};
