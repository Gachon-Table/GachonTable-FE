"use client";
import React, { useState } from 'react';
import ResponsiveTest from './ResponsiveTest';
import Navigation from '../_components/nav/Navigation';

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStudentCard, setFilterStudentCard] = useState<boolean | null>(null);
  const [sortByCongestion, setSortByCongestion] = useState(false);
  const [sortByLowCongestion, setSortByLowCongestion] = useState(false);

  const handleStudentCardFilter = () => {
    setFilterStudentCard(prev => (prev === false ? null : false));
  };

  const handleSortByCongestion = () => {
    // Toggle sorting by congestion
    setSortByCongestion(prev => !prev);
    // Ensure sorting by low congestion is off
    setSortByLowCongestion(false);
  };

  const handleSortByLowCongestion = () => {
    // Toggle sorting by low congestion
    setSortByLowCongestion(prev => !prev);
    // Ensure sorting by congestion is off
    setSortByCongestion(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-20">
      <header className="fixed top-0 w-full max-w-[30rem] bg-white rounded-lg shadow-md text-center">
        <div className="w-full h-[7.5vh] bg-white rounded-lg flex items-center justify-center">
          <div className="w-1/5 bg-white flex items-center justify-center rounded-lg">
            <div className="w-11 h-11 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-4/5 h-full bg-white flex items-center justify-center rounded-lg">
            <input
              type="text"
              className="w-4/5 h-10 bg-gray-200 rounded-full border-none px-4"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-7 bg-white rounded-lg flex items-center justify-between mt-3 mb-3">
          <div className="w-full h-7 bg-white rounded-lg flex items-center justify-center gap-10">
            <div
              className={`w-1/4 h-[5vh] rounded-xl border-2 flex items-center justify-center ${sortByCongestion ? 'border-red-500' : 'border-black'}`}
              onClick={handleSortByCongestion}
            >
              혼잡도 많은 순
            </div>
            <div
              className={`w-1/4 h-[5vh] rounded-xl border-2 flex items-center justify-center ${sortByLowCongestion ? 'border-red-500' : 'border-black'}`}
              onClick={handleSortByLowCongestion}
            >
              혼잡도 낮은 순
            </div>
            <div
              className={`w-1/4 h-[5vh] rounded-xl border-2 flex items-center justify-center ${filterStudentCard === false ? 'border-red-500' : 'border-black'}`}
              onClick={handleStudentCardFilter}
            >
              학생증 불필요
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center w-full max-w-2xl mt-[18vh] gap-6 h-full overflow-y-auto">
        <ResponsiveTest
          searchTerm={searchTerm}
          filterStudentCard={filterStudentCard}
          sortByCongestion={sortByCongestion}
          sortByLowCongestion={sortByLowCongestion}
        />
      </main>
      <Navigation />
    </div>
  );
};

export default LandingPage;
