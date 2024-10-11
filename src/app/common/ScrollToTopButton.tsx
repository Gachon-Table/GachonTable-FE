'use client';
import { ScrollTopButton } from 'public';
import React from 'react';

interface ScrollToTopProps {
  listRef: React.RefObject<HTMLDivElement>;
}

export const ScrollToTopButton = ({ listRef }: ScrollToTopProps) => {
  const handleScrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <button onClick={handleScrollToTop}>
      <ScrollTopButton />
    </button>
  );
};
