import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-none bg-white mobile:mx-auto mobile:max-w-[470px] ">
      <nav className="mx-auto flex w-full max-w-30rem justify-evenly ">
        <button className="flex w-1/3 items-center justify-center border-none bg-transparent p-2.5 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500">
          <img src="/images/Home.png" alt="홈" className="h-8 w-8" />
        </button>
        <button className="flex w-1/3 items-center justify-center border-none bg-transparent p-2.5 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500">
          <img src="/images/Discovery.png" alt="찾기" className="h-8 w-8" />
        </button>
        <button className="flex w-1/3 items-center justify-center border-none bg-transparent p-2.5 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500">
          <img src="/images/NavTab.png" alt="마이페이" className="h-8 w-8" />
        </button>
      </nav>
    </nav>
  );
};
