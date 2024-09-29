'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full">
      <div className="mb-6 flex items-center bg-wt px-4">
        <div className="flex w-full border-b-2 border-gray-200">
          <Link
            href="/admin/menu-management"
            className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold transition duration-300 ease-in-out ${
              isActive('/admin/menu-management')
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:border-gy-900 hover:text-gy-900'
            }`}
          >
            메뉴 관리
          </Link>

          <Link
            href="/admin/client-management"
            className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold transition duration-300 ease-in-out ${
              isActive('/admin/client-management')
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:text-gy-900'
            }`}
          >
            고객 관리
          </Link>

          <Link
            href="/admin/setting"
            className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold transition duration-300 ease-in-out ${
              isActive('/admin/setting')
                ? '-mb-0.5 border-b-2 border-gy-900 text-gy-900'
                : 'text-gy-400 hover:text-gy-900'
            }`}
          >
            설정
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
