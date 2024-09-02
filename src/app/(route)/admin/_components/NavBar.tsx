'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar = () => {
  const pathname = usePathname;
  const isActive = (path: string) => pathname?.() === path;

  return (
    <nav className="ml-8 w-full">
      <div className="mt-6">
        <div className="mb-6 flex h-16 items-center">
          <div className="mr-8 flex w-full border-b-2 border-gray-200">
            <Link
              href="/admin/pub-management"
              className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold ${
                isActive('/admin/pub-management')
                  ? 'border-gy-900 text-gy-900 -mb-0.5 border-b-2'
                  : 'text-gy-400 hover:text-gy-400'
              }`}
            >
              메뉴 관리
            </Link>

            <Link
              href="/admin/client-management"
              className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold ${
                isActive('/admin/waiting-management')
                  ? 'border-gy-900 text-gy-900 -mb-0.5 border-b-2'
                  : 'text-gy-400 hover:text-gy-400'
              }`}
            >
              고객 관리
            </Link>

            <Link
              href="/admin/setting"
              className={`flex flex-1 items-center justify-center px-2 py-2 text-base font-semibold ${
                isActive('/admin/setting')
                  ? 'border-gy-900 text-gy-900 -mb-0.5 border-b-2'
                  : 'text-gy-400 hover:text-gy-400'
              }`}
            >
              설정
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
