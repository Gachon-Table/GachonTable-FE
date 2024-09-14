'use client';
import React from 'react';
import { LogoCircle, Search, User } from 'public';
import { useRouter } from 'next/navigation';

interface LandingSearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LandingSearchBar: React.FC<LandingSearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3 p-4">
      <LogoCircle className="cursor-pointer" onClick={() => router.push('/')} />
      <div className="flex w-[270px] items-center rounded-full bg-gy-100 py-2 pl-4 pr-6">
        <Search className="mr-2 text-gy-400" />
        <input
          type="text"
          className="placeholder:text-font-b1-normal-medium w-full border-none bg-gy-100 outline-none placeholder:text-gy-400"
          placeholder="주점을 검색해보세요."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <User className="cursor-pointer" onClick={() => router.push('/mypage')} />
    </div>
  );
};

export default LandingSearchBar;
