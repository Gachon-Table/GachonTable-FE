// src/app/(route)/landing/page.tsx
import React from 'react';
import ResponsiveTest from './ResponsiveTest';
import Navigation from '../_components/nav/Navigation';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full max-w-2xl h-full bg-white rounded-lg shadow-md text-center mt-6">
        <div className="w-full h-[7.5vh] bg-white rounded-lg flex items-center justify-center">
          <div className="w-1/5 bg-white flex items-center justify-center rounded-lg">
            <div className="w-11 h-11 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-4/5 h-full bg-white flex items-center justify-center rounded-lg">
            <input
              type="text"
              className="w-4/5 h-10 bg-gray-200 rounded-full border-none px-4"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="w-full h-7 bg-white rounded-lg flex items-center justify-between mt-3 mb-3">
          <div className="w-full h-7 bg-white rounded-lg flex items-center justify-center gap-10">
            <div className="w-1/4 h-[5vh] rounded-xl border-2 border-black flex items-center justify-center">혼잡도 많은 순</div>
            <div className="w-1/4 h-[5vh] rounded-xl border-2 border-black flex items-center justify-center">혼잡도 적은 순</div>
            <div className="w-1/4 h-[5vh] rounded-xl border-2 border-black flex items-center justify-center">학생증 불필요</div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center w-full max-w-2xl mt-6 gap-6 h-full">
        <ResponsiveTest />
      </main>
      <Navigation />
    </div>
  );
};

export default LandingPage;