import React from 'react';
import { LogoCircle } from 'public';

const Header = () => {
  return (
    <div className="mt-10 flex space-x-24">
      <LogoCircle />
      <span className="pt-2 text-xl font-bold">라인업지</span>
      <div />
    </div>
  );
};
export default Header;
