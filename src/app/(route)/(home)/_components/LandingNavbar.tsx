'use client';
import React, { useState } from 'react';

const LandingNavbar: React.FC<{ onFilterChange: (filters: any) => void }> = ({
  onFilterChange,
}) => {
  const [filterStudentCard, setFilterStudentCard] = useState<boolean | null>(
    null,
  );
  const [sortByCongestion, setSortByCongestion] = useState(true);
  const [sortByLowCongestion, setSortByLowCongestion] = useState(false);

  const handleStudentCardFilter = () => {
    const newValue = filterStudentCard === false ? null : false;
    setFilterStudentCard(newValue);
    setSortByCongestion(false);
    setSortByLowCongestion(false);
    onFilterChange({
      filterStudentCard: newValue,
      sortByCongestion: false,
      sortByLowCongestion: false,
    });
  };

  const handleSortByCongestion = () => {
    setSortByCongestion((prev) => !prev);
    setSortByLowCongestion(false);
    setFilterStudentCard(null);
    onFilterChange({
      sortByCongestion: !sortByCongestion,
      sortByLowCongestion: false,
      filterStudentCard: null,
    });
  };

  const handleSortByLowCongestion = () => {
    setSortByLowCongestion((prev) => !prev);
    setSortByCongestion(false);
    setFilterStudentCard(null);
    onFilterChange({
      sortByLowCongestion: !sortByLowCongestion,
      sortByCongestion: false,
      filterStudentCard: null,
    });
  };

  return (
    <nav className="w-full">
      <div className="mb-6 flex items-center bg-wt px-4">
        <div className="flex w-full border-b-2 border-gray-200">
          <div
            onClick={handleSortByCongestion}
            className={`flex flex-1 cursor-pointer items-center justify-center px-2 py-2 transition duration-300 ease-in-out font-b1-normal-semibold ${
              sortByCongestion
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
