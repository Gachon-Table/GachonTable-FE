'use client';
import React, { useState, useEffect } from 'react';
import PubList from '../pub/_components/PubList';
import { Footer } from '@/app/common/Footer';
import LandingNavbar from './_components/LandingNavbar';
import LandingSearchBar from './_components/LandingSearchBar';

const Landing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    filterStudentCard: null as boolean | null,
    sortByCongestion: false,
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
    <div className="flex h-screen flex-col bg-white">
      <header className="fixed top-0 w-full max-w-[26rem] rounded-lg text-center">
        <LandingSearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          setSearchTerm={setSearchTerm}
        />
        <LandingNavbar onFilterChange={handleFilterChange} />
      </header>

      <div className="mt-32 flex h-3/4 w-full flex-col items-start overflow-y-auto">
        <PubList
          searchTerm={searchTerm}
          filterStudentCard={filters.filterStudentCard}
          sortByCongestion={filters.sortByCongestion}
          sortByLowCongestion={filters.sortByLowCongestion}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
