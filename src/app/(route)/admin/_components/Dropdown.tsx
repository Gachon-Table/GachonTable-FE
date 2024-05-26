'use client';

import Link from 'next/link';
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-deep-cove">
      <div className="relative mx-auto max-w-screen-xl">
        <div className="flex justify-center bg-deep-cove">
          <div
            className={`relative flex w-full max-w-screen-xl cursor-pointer items-center bg-white px-4 py-6 shadow-md ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
            onClick={toggleDropdown}
          >
            <img
              src="/images/dropdown.png"
              alt="드롭다운 아이콘"
              className="h-5 tablet:h-6 laptop:h-7 desktop:h-8"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm font-semibold mobile:text-base tablet:text-3xl">
                GACHONTABLE
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mx-auto w-full max-w-screen-xl rounded-b-md bg-white shadow-md">
            <Link
              href="/admin/waiting-management"
              onClick={handleMenuClick}
              className="relative flex items-center space-x-4 px-4 py-2 pb-6 pt-4 hover:bg-gray-100"
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
              onClick={handleMenuClick}
              className="relative flex items-center space-x-4 px-4 py-2 pb-6 pt-4 hover:rounded-b-lg hover:bg-gray-100"
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
