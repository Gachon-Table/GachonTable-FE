/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useEffect } from 'react';
import PubList from '../pub/_components/PubList';
import { Footer } from '@/app/common/Footer';
import LandingNavbar from './_components/LandingNavbar';
import LandingSearchBar from './_components/LandingSearchBar';
import { ScrollToTopButton } from '@/app/common/ScrollToTopButton';

const Landing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    filterStudentCard: null as boolean | null,
    sortByPopular: true,
    sortByLowCongestion: false,
  });

  useEffect(() => {
    if (!localStorage.getItem('pageRefreshed')) {
      localStorage.setItem('pageRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="flex h-full flex-col">
      <header className="fixed top-0 z-10 w-full max-w-[430px] rounded-lg bg-wt text-center">
        <LandingSearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          setSearchTerm={setSearchTerm}
        />
        <LandingNavbar onFilterChange={handleFilterChange} />
      </header>

      <div className="mt-32 flex h-3/4 w-full flex-col items-start">
        <PubList
          searchTerm={searchTerm}
          filterStudentCard={filters.filterStudentCard}
          sortByPopular={filters.sortByPopular}
          sortByLowCongestion={filters.sortByLowCongestion}
        />
        <Footer />
      </div>
      <div className="z-1111 fixed bottom-[110px] flex w-full max-w-[430px] justify-end pr-[17px]">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Landing;
