'use client';
import React, { useState } from 'react';

const LandingNavbar: React.FC<{ onFilterChange: (filters: any) => void }> = ({
  onFilterChange,
}) => {
  const [filterStudentCard, setFilterStudentCard] = useState<boolean | null>(
    null,
  );
  const [sortByPopular, setsortByPopular] = useState(true);
  const [sortByLowCongestion, setSortByLowCongestion] = useState(false);

  const handleSortByCongestion = () => {
    if (!sortByPopular) {
      setsortByPopular(true);
      setSortByLowCongestion(false);
      setFilterStudentCard(null);
      onFilterChange({
        sortByCongestion: true,
        sortByLowCongestion: false,
        filterStudentCard: null,
      });
    }
  };

  const handleSortByLowCongestion = () => {
    if (!sortByLowCongestion) {
      setSortByLowCongestion(true);
      setsortByPopular(false);
      setFilterStudentCard(null);
      onFilterChange({
        sortByLowCongestion: true,
        sortByCongestion: false,
        filterStudentCard: null,
      });
    }
  };

  return (
    <nav className="w-full">
      <div className="flex items-center px-4">
        <div className="flex w-full border-b-2 border-gray-200">
          <div
            onClick={handleSortByCongestion}
            className={`flex flex-1 cursor-pointer items-center justify-center px-2 py-2 transition duration-300 ease-in-out font-b1-normal-semibold ${
              sortByPopular
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:border-gy-900 hover:text-gy-900'
            }`}
          >
            대기 적은 순
          </div>

          <div
            onClick={handleSortByLowCongestion}
            className={`flex flex-1 cursor-pointer items-center justify-center px-2 py-2 transition duration-300 ease-in-out font-b1-normal-semibold ${
              sortByLowCongestion
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:border-gy-900 hover:text-gy-900'
            }`}
          >
            실시간 인기 순
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
