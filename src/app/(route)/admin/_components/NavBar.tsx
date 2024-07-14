'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { adminLogout } from '@/app/api/service/adminAuth';

export const Navbar = () => {
  const pathname = usePathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname?.() === path;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="flex flex-row items-center">
        <div className="w-20 flex-grow border-t border-[#C2C2C2]" />
        <div className="flex h-16 flex-shrink-0">
          <div className="flex items-center">
            <div className="flex flex-row space-x-1">
              <Link
                href="/admin/waiting-management"
                className={`${isActive('/admin/waiting-management') ? 'border-main-blue text-[#434343]' : 'border-transparent text-[#969595] hover:border-main-blue hover:text-[#434343]'} flex items-center border-b-2 px-2 py-2 text-sm font-medium`}
              >
                대기 인원
              </Link>
              <Link
                href="/admin/pub-management"
                className={`${isActive('/admin/pub-management') ? 'border-main-blue text-[#434343]' : 'border-transparent text-[#969595] hover:border-main-blue hover:text-[#434343]'} flex items-center border-b-2 px-2 py-2 text-sm font-medium`}
              >
                주점 메뉴
              </Link>
              <Link
                href="/admin/onsite-lineup"
                className={`${isActive('/admin/onsite-lineup') ? 'border-main-blue text-[#434343]' : 'border-transparent text-[#969595] hover:border-main-blue hover:text-[#434343]'} flex items-center border-b-2 px-2 py-2 text-sm font-medium`}
              >
                현장줄서기
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`${isActive('/설정') ? 'border-main-blue text-[#434343]' : 'border-transparent text-[#969595] hover:border-main-blue hover:text-[#434343]'} flex items-center border-b-2 px-4 py-2 text-sm font-medium`}
                >
                  설 정
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-16 rounded-lg bg-white shadow-lg ">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block py-2 pl-2.5 text-xs font-medium text-[#969595] hover:text-[#434343]"
                        role="menuitem"
                      >
                        대기마감
                      </a>
                      <a
                        onClick={adminLogout}
                        className="block py-2 pl-2.5 text-xs font-medium text-[#969595] hover:text-[#434343]"
                        role="menuitem"
                      >
                        로그아웃
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 flex-grow border-t border-[#C2C2C2]" />
      </div>
    </nav>
  );
};

export default Navbar;
