'use client';
import React, { useState } from 'react';
import Navbar from '@/app/(route)/admin/_components/NavBar';
import AlertModal from '@/app/(route)/admin/_components/AlertModal';
import { ClouserCard } from '@/app/(route)/admin/_components/setting/ClosureCard';
import { LogoutButton } from '@/app/(route)/admin/_components/setting/LogoutButton';
import { WaitingClose, PubClose } from 'public';

export default function Setting() {
  const [isWaitModalOpen, setIsWaitModalOpen] = useState(false);
  const [isPubModalOpen, setIsPubModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleWaitingClouserClick = () => {
    setIsWaitModalOpen(true);
  };

  const handlePubClouserClick = () => {
    setIsPubModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const clickHandler = () => {
    alert('click');
  };

  //   const confirmStatus = async () => {
  //     try {
  //       const newStatus = !openStatus;
  //       const credentials = {
  //         openStatus: newStatus,
  //       };

  //       const response = await adminAxios.patch('/status', credentials);

  //       if (response.status === 200) {
  //         setOpenStatus(newStatus);
  //         if (newStatus) {
  //           alert('대기 오픈되었습니다!');
  //         } else {
  //           alert('대기 마감되었습니다!');
  //         }
  //       }
  //     } catch (error) {
  //       console.error('대기 상태 변경 실패: ', error);
  //     } finally {
  //       setShowStatusModal(false);
  //     }
  //   };

  //   const confirmLogout = async () => {
  //     try {
  //       localStorage.removeItem('accessToken');
  //       localStorage.removeItem('refreshToken');
  //       localStorage.removeItem('pubId');
  //       router.push('/admin');
  //     } catch (error) {
  //       console.error('로그아웃 처리 중 오류 발생:', error);
  //       alert('로그아웃 처리 중 오류가 발생했습니다.');
  //     } finally {
  //       setShowLogoutModal(false);
  //     }
  //   };

  //   useEffect(() => {
  //     const fetchPubInfo = async () => {
  //       try {
  //         const data = await getPubInfo();
  //         setOpenStatus(data.pub.openStatus);
  //       } catch (error) {
  //         console.error('주점 정보 가져오기 실패:', error);
  //       }
  //     };
  //     fetchPubInfo();
  //   }, []);
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center space-y-6 bg-bg-white">
        <Navbar />
        <div className="flex flex-row space-x-3">
          <ClouserCard
            label={'대기 마감'}
            icon={<WaitingClose />}
            buttonLabel={'대기 오픈하기'}
            onClick={handleWaitingClouserClick}
          />
          <ClouserCard
            label={'점포 마감'}
            icon={<PubClose />}
            buttonLabel={'점포 오픈하기'}
            onClick={handlePubClouserClick}
          />
        </div>
        <LogoutButton onClick={handleLogoutClick} />
      </div>

      {isWaitModalOpen && (
        <AlertModal
          message="대기를 마감할까요?"
          onCancel={() => setIsWaitModalOpen(false)}
          onConfirm={clickHandler}
        />
      )}

      {isPubModalOpen && (
        <AlertModal
          message="점포를 마감할까요?"
          onCancel={() => setIsPubModalOpen(false)}
          onConfirm={clickHandler}
        />
      )}

      {isLogoutModalOpen && (
        <AlertModal
          message="로그아웃 하시겠습니까?"
          onCancel={() => setIsLogoutModalOpen(false)}
          onConfirm={clickHandler}
        />
      )}
    </div>
  );
}
