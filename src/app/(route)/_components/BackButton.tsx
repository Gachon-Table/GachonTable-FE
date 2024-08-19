'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BackIcon } from '@/app/assets';

const BackButton = () => {
  const router = useRouter();

  const handleBackButton = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <BackIcon
      className="my-5 cursor-pointer justify-start"
      onClick={handleBackButton}
    />
  );
};

export default BackButton;
