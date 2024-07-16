"use client";
import React, { useState, useEffect } from 'react';
import ResponsiveTest from './ResponsiveTest';
import Footer from '../_components/footer/page';

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStudentCard, setFilterStudentCard] = useState<boolean | null>(null);
  const [sortByCongestion, setSortByCongestion] = useState(false);
  const [sortByLowCongestion, setSortByLowCongestion] = useState(false);

  const handleStudentCardFilter = () => {
    setFilterStudentCard(prev => (prev === false ? null : false));
  };

  const handleSortByCongestion = () => {
    setSortByCongestion(prev => !prev);
    setSortByLowCongestion(false);
  };

  const handleSortByLowCongestion = () => {
    setSortByLowCongestion(prev => !prev);
    setSortByCongestion(false);
  };

  useEffect(() => {
    // Check if the page has been refreshed before
    if (!localStorage.getItem('pageRefreshed')) {
      // Set the flag to indicate the page has been refreshed
      localStorage.setItem('pageRefreshed', 'true');
      // Force a page refresh
      window.location.reload();
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-col min-h-screen bg-white-100 mb-20 ">
      <header className="fixed top-0 w-full max-w-[30rem] bg-white rounded-lg text-center z-10 ">
        <div className="w-full h-[7.5vh] bg-white rounded-lg flex items-center justify-between px-2 md:px-4 border-black">
          <a href="/landing" className="w-1/5 flex items-center justify-center rounded-lg">
            <img src="/images/logo.png" alt="Logo" className="w-11 h-11 rounded-full" />
          </a>
          <div className="w-3/5 h-full flex items-center justify-center rounded-lg">
            <input
              type="text"
              className="w-full h-10 bg-gray-200 rounded-full border-none px-4"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <a href="/mypage" className="w-1/5 flex items-center justify-center rounded-lg">
            <img src="/images/mypage.png" alt="My Page" className="w-11 h-11 rounded-full" />
          </a>
        </div>
        <div className="w-full h-7 bg-white rounded-lg flex items-center justify-between mt-3 mb-3">
          <div className="w-full h-7 bg-white rounded-lg flex items-center justify-center gap-10">
            <div
              className={`w-1/4 h-[5vh] font-bold flex items-center justify-center border-b-4 cursor-pointer ${sortByCongestion ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleSortByCongestion}
            >
              대기 많은 순
            </div>
            <div
              className={`w-1/4 h-[5vh] font-bold flex items-center justify-center border-b-4 cursor-pointer ${sortByLowCongestion ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleSortByLowCongestion}
            >
              대기 낮은 순
            </div>
            <div
              className={`w-1/4 h-[5vh] font-bold flex items-center justify-center border-b-4 cursor-pointer ${filterStudentCard === false ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleStudentCardFilter}
            >
              학생증 불필요
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-start w-full max-w-2xl mt-[18vh] gap-6 flex-grow overflow-y-auto">
        <ResponsiveTest
          searchTerm={searchTerm}
          filterStudentCard={filterStudentCard}
          sortByCongestion={sortByCongestion}
          sortByLowCongestion={sortByLowCongestion}
        />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;