'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerText, setHeaderText] = useState('GACHON TABLE');
  const pathname = usePathname();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (pathname === '/admin/waiting-management') {
      setHeaderText('대기 인원 관리');
    } else if (pathname === '/admin/pub-management') {
      setHeaderText('주점 관리');
    }
  }, [pathname]);

  const handleMenuClick = (menuText: string) => {
    setHeaderText(menuText);
    setIsOpen(false);
  };

  return (
    <div className="bg-deep-cove">
      <div className="relative mx-auto max-w-screen-xl">
        <div className="flex justify-center bg-deep-cove pt-11">
          <div
            className="relative flex w-full max-w-screen-xl cursor-pointer items-center rounded-md bg-white px-4 py-2 shadow-md"
            onClick={toggleDropdown}
          >
            <img
              src="/images/dropdown.png"
              alt="드롭다운 아이콘"
              className="h-5 tablet:h-6 laptop:h-7 desktop:h-8"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm font-semibold mobile:text-base tablet:text-3xl">
                {headerText}
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mx-auto w-full max-w-screen-xl rounded-md bg-white shadow-md">
            <Link
              href="/admin/waiting-management"
              onClick={() => handleMenuClick('대기 인원 관리')}
              className="relative flex items-center space-x-4 px-4 py-2 hover:bg-gray-100"
            >
              <img
                src="/images/waiting-management.png"
                alt="대기 인원 관리 아이콘"
                className="h-5 tablet:h-6 laptop:h-7 desktop:h-8"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold mobile:text-base tablet:text-3xl">
                  대기 인원 관리
                </span>
              </div>
            </Link>
            <Link
              href="/admin/pub-management"
              onClick={() => handleMenuClick('주점 관리')}
              className="relative flex items-center space-x-4 px-4 py-2 hover:bg-gray-100"
            >
              <img
                src="/images/pub-management.png"
                alt="주점 관리 아이콘"
                className="h-5 tablet:h-6 laptop:h-7 desktop:h-8"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold mobile:text-base tablet:text-3xl">
                  주점 관리
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
