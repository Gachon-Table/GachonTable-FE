'use client';
import React from 'react';

interface LandingNavbarProps {
  onFilterChange: (filters: any) => void;
  sortByLowCongestion: boolean;
  sortByPopular: boolean;
}

const LandingNavbar: React.FC<LandingNavbarProps> = ({
  onFilterChange,
  sortByLowCongestion,
  sortByPopular,
}) => {
  const handleSortByLowCongestion = () => {
    if (!sortByLowCongestion) {
      onFilterChange({
        sortByLowCongestion: true,
        sortByPopular: false,
        filterStudentCard: null,
      });
    }
  };

  const handleSortByPopular = () => {
    if (!sortByPopular) {
      onFilterChange({
        sortByLowCongestion: false,
        sortByPopular: true,
        filterStudentCard: null,
      });
    }
  };

  return (
    <nav className="w-full">
      <div className="flex items-center px-4">
        <div className="flex w-full border-b-2 border-gray-200">
          <div
            onClick={handleSortByLowCongestion}
            className={`flex flex-1 cursor-pointer items-center justify-center px-2 py-2 transition duration-300 ease-in-out font-b1-normal-semibold ${
              sortByLowCongestion
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:border-gy-900 hover:text-gy-900'
            }`}
          >
            대기 적은 순
          </div>

          <div
            onClick={handleSortByPopular}
            className={`flex flex-1 cursor-pointer items-center justify-center px-2 py-2 transition duration-300 ease-in-out font-b1-normal-semibold ${
              sortByPopular
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
