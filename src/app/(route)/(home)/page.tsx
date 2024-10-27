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
    sortByPopular: false,
    sortByLowCongestion: true,
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem('landingState');
    if (storedData) {
      const { searchTerm, filters } = JSON.parse(storedData);
      setSearchTerm(searchTerm || '');
      setFilters(
        filters || {
          filterStudentCard: null,
          sortByPopular: false,
          sortByLowCongestion: true,
        },
      );
    } else {
      setFilters({
        filterStudentCard: null,
        sortByPopular: false,
        sortByLowCongestion: true,
      });
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('landingState');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleFilterChange = (newFilters: any) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    sessionStorage.setItem(
      'landingState',
      JSON.stringify({ searchTerm, filters: updatedFilters }),
    );
  };

  const resetFilters = () => {
    setFilters({
      filterStudentCard: null,
      sortByPopular: false,
      sortByLowCongestion: true,
    });
    setSearchTerm('');
    sessionStorage.removeItem('landingState');

    window.history.replaceState(null, '', '?');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-10 w-full max-w-[430px] rounded-lg bg-wt text-center">
        <LandingSearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          setSearchTerm={setSearchTerm}
        />
        <LandingNavbar
          onFilterChange={handleFilterChange}
          sortByPopular={filters.sortByPopular}
          sortByLowCongestion={filters.sortByLowCongestion}
        />
      </header>

      <div className="mt-32 flex w-full flex-grow flex-col items-start">
        <PubList
          searchTerm={searchTerm}
          sortByPopular={filters.sortByPopular}
          sortByLowCongestion={filters.sortByLowCongestion}
        />
      </div>

      <div className="fixed bottom-[100px] right-4 z-20">
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
