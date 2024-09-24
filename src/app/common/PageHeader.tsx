'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BackButton } from 'public';

interface PageHeaderProps {
  icon?: React.ReactNode;
  title?: string;
  isDetailPage?: boolean;
  clickHandler?: () => void;
}

export const PageHeader = ({
  icon = <BackButton />,
  title,
  isDetailPage,
  clickHandler,
}: PageHeaderProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div
      className={`z-99999 flex items-center space-x-[45px] ${isDetailPage ? 'absolute bg-none' : 'bg-wt'}`}
    >
      <div
        onClick={clickHandler || handleClick}
        className="cursor-pointer py-3 pl-4"
      >
        {icon}
      </div>
      <div className="block w-[228px] text-center font-b1-normal-semibold">
        {title}
      </div>
    </div>
  );
};
