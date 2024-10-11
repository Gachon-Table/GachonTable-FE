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
      className={`z-99999 relative flex w-full items-center px-4 py-3 ${isDetailPage ? 'absolute bg-none' : 'bg-wt'}`}
    >
      <div
        onClick={clickHandler || handleClick}
        className="flex h-8 w-8 cursor-pointer items-center justify-center"
      >
        {icon}
      </div>
      <div className="absolute left-0 right-0 text-center font-b1-normal-semibold">
        {title}
      </div>
    </div>
  );
};
