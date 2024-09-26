import React from 'react';
import { CheckIcon } from 'public';

interface ToastModalProps {
  message: string;
}

export const ToastModal = ({ message }: ToastModalProps) => {
  return (
    <div className="flex w-[189px] flex-row space-x-2 rounded-md bg-gy-700 py-[11px] pl-4">
      <CheckIcon />
      <div className="text-wt font-c1-medium">{message}</div>
    </div>
  );
};
