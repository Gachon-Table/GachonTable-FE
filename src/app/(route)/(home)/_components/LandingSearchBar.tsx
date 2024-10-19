'use client';
import React from 'react';
import { Close, Search, User } from 'public';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LandingSearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchTerm: (value: string) => void;
}

const LandingSearchBar: React.FC<LandingSearchBarProps> = ({
  searchTerm,
  onSearchChange,
  setSearchTerm,
}) => {
  const router = useRouter();

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex w-full items-center justify-between gap-3 p-4">
      <div className="flex-shrink-0">
        <button className="rounded-full p-1" onClick={() => router.push('/')}>
          <Image
            src="/images/logo-blue.jpg"
            alt="logo-blue"
            width={44}
            height={44}
            className="rounded-full"
          />
        </button>
      </div>

      <div className="relative flex w-full max-w-[270px] flex-grow items-center rounded-full bg-gy-100 py-2 pl-4 pr-6">
        <Search className="mr-2 text-gy-400" />
        <input
          type="text"
          className="placeholder:text-font-b1-normal-medium w-full border-none bg-gy-100 pr-2 outline-none placeholder:text-gy-400"
          placeholder="주점을 검색해보세요."
          value={searchTerm}
          onChange={onSearchChange}
        />

        {searchTerm && (
          <Close
            className="absolute right-2 cursor-pointer"
            onClick={clearSearch}
          />
        )}
      </div>

      <div className="flex-shrink-0">
        <User
          className="cursor-pointer"
          onClick={() => router.push('/mypage')}
        />
      </div>
    </div>
  );
};

export default LandingSearchBar;
