'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import AlertModal from './AlertModal';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';
import adminAxios from '@/app/api/axios/adminAxios';

export const Navbar = () => {
  const pathname = usePathname;
  const router = useRouter();
  const [openStatus, setOpenStatus] = useState<boolean | null>(null);
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
      const newStatus = !openStatus;
      const credentials = {
        openStatus: newStatus,
      };

      const response = await adminAxios.patch('/status', credentials);

      if (response.status === 200) {
        setOpenStatus(newStatus);
        if (newStatus) {
          alert('대기 오픈되었습니다!');
        } else {
          alert('대기 마감되었습니다!');
        }
      }
    } catch (error) {
      console.error('대기 상태 변경 실패: ', error);
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

  useEffect(() => {
    const fetchPubInfo = async () => {
      try {
        const data = await getPubInfo();
        setOpenStatus(data.pub.openStatus);
      } catch (error) {
        console.error('주점 정보 가져오기 실패:', error);
      }
    };
    fetchPubInfo();
  }, []);

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
              href="/admin/waiting-management"
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

      {showStatusModal && (
        <AlertModal
          message={openStatus ? '대기 마감' : '대기 오픈'}
          onCancel={() => setShowStatusModal(false)}
          onConfirm={confirmStatus}
        />
      )}

      {showLogoutModal && (
        <AlertModal
          message="로그아웃"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={confirmLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
