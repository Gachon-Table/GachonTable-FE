'use client';
import { ScrollTopButton } from 'public';
import React from 'react';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button onClick={scrollToTop}>
      <ScrollTopButton />
    </button>
  );
};
