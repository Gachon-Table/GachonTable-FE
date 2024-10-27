'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BackButton } from 'public';

interface PageHeaderProps {
  icon?: React.ReactNode;
  title?: string;
  isDetailPage?: boolean;
  isBackButton?: boolean;
}

export const PageHeader = ({
  icon = <BackButton />,
  title,
  isDetailPage = false,
  isBackButton,
}: PageHeaderProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (isBackButton) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div
      className={`z-99999 relative flex w-full items-center px-4 py-3 ${isDetailPage ? 'absolute bg-none' : 'bg-wt'}`}
    >
      <button
        onClick={handleClick}
        className="relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center"
      >
        {icon}
      </button>
      <div className="absolute left-0 right-0 z-0 text-center font-b1-normal-semibold">
        {title}
      </div>
    </div>
  );
};
