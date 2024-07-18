'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { handleStatus } from '@/app/api/service/handleStatus';
import AlertModal from './AlertModal';

export const Navbar = () => {
  const pathname = usePathname;
  const router = useRouter();
  const [openStatus, setOpenStatus] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isActive = (path: string) => pathname?.() === path;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusClick = () => {
    setShowStatusModal(true);
    setIsDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsDropdownOpen(false);
  };

  const confirmStatus = async () => {
    try {
      const status = await handleStatus();
      setOpenStatus(status);
      if (openStatus) {
        alert('대기 오픈되었습니다!');
      } else {
        alert('대기 마감되었습니다!');
      }
    } catch (error) {
      console.error('대기 마감 처리 중 오류 발생:', error);
      alert('대기 마감 처리 중 오류가 발생했습니다.');
    } finally {
      setShowStatusModal(false);
    }
  };

  const confirmLogout = async () => {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('pubId');
      router.push('/admin');
    } catch (error) {
      console.error('로그아웃 처리 중 오류 발생:', error);
      alert('로그아웃 처리 중 오류가 발생했습니다.');
    } finally {
      setShowLogoutModal(false);
    }
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
                      {openStatus ? (
                        <a
                          onClick={handleStatusClick}
                          className="block cursor-pointer py-2 pl-2.5 text-xs font-medium text-[#969595] hover:text-[#434343]"
                          role="menuitem"
                        >
                          대기마감
                        </a>
                      ) : (
                        <a
                          onClick={handleStatusClick}
                          className="block cursor-pointer py-2 pl-2.5 text-xs font-medium text-[#969595] hover:text-[#434343]"
                          role="menuitem"
                        >
                          대기오픈
                        </a>
                      )}
                      <a
                        onClick={handleLogoutClick}
                        className="block cursor-pointer py-2 pl-2.5 text-xs font-medium text-[#969595] hover:text-[#434343]"
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

      {showStatusModal && (
        <AlertModal
          message="대기 마감"
          button="마감"
          onCancel={() => setShowStatusModal(false)}
          onConfirm={confirmStatus}
        />
      )}

      {showLogoutModal && (
        <AlertModal
          message="로그아웃"
          button="로그아웃"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={confirmLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
