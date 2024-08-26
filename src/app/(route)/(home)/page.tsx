'use client';
import React, { useState, useEffect } from 'react';
import PubList from '../pub/_components/PubList';
import { LogoCircle, User } from 'public';
import { useRouter } from 'next/navigation';
import { Footer } from '@/app/common/Footer';

const Landing: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStudentCard, setFilterStudentCard] = useState<boolean | null>(
    null,
  );
  const [sortByCongestion, setSortByCongestion] = useState(false);
  const [sortByLowCongestion, setSortByLowCongestion] = useState(false);

  const handleStudentCardFilter = () => {
    setFilterStudentCard((prev) => (prev === false ? null : false));
  };

  const handleSortByCongestion = () => {
    setSortByCongestion((prev) => !prev);
    setSortByLowCongestion(false);
  };

  const handleSortByLowCongestion = () => {
    setSortByLowCongestion((prev) => !prev);
    setSortByCongestion(false);
  };

  useEffect(() => {
    if (!localStorage.getItem('pageRefreshed')) {
      localStorage.setItem('pageRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className="flex h-screen flex-col bg-white">
      <header className="fixed top-0 z-10 w-full max-w-[30rem] rounded-lg bg-white pl-5 text-center">
        <div className="flex h-[7.5vh] items-center space-x-10 bg-white">
          <LogoCircle
            className="ml-3.5 cursor-pointer"
            onClick={() => router.push('/')}
          />
          <div className="flex h-10 w-3/5 items-center justify-center rounded-lg">
            <input
              type="text"
              className="w-full rounded-full border-none bg-gray-200 px-4 pb-3 pt-2 placeholder:text-xs"
              placeholder="키워드 또는 주점명을 검색해보세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <User
            className="cursor-pointer"
            onClick={() => router.push('/mypage')}
          />
        </div>
        <div className="mb-3 mt-3 flex h-7 w-full items-center justify-between rounded-lg bg-white">
          <div className="flex h-7 w-full items-center justify-center gap-10 rounded-lg bg-white">
            <div
              className={`flex h-[5vh] w-1/4 cursor-pointer items-center justify-center border-b-4 font-bold ${sortByCongestion ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleSortByCongestion}
            >
              대기 많은 순
            </div>
            <div
              className={`flex h-[5vh] w-1/4 cursor-pointer items-center justify-center border-b-4 font-bold ${sortByLowCongestion ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleSortByLowCongestion}
            >
              대기 낮은 순
            </div>
            <div
              className={`flex h-[5vh] w-1/4 cursor-pointer items-center justify-center border-b-4 font-bold ${filterStudentCard === false ? 'border-blue-800 text-black' : 'border-gray-400 text-gray-600'}`}
              onClick={handleStudentCardFilter}
            >
              학생증 불필요
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[14vh] flex h-3/4 w-full flex-col items-start overflow-y-auto">
        <PubList
          searchTerm={searchTerm}
          filterStudentCard={filterStudentCard}
          sortByCongestion={sortByCongestion}
          sortByLowCongestion={sortByLowCongestion}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
