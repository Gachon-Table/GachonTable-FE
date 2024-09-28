'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/(route)/admin/_components/NavBar';
import AlertModal from '@/app/common/AlertModal';
import { ClouserCard } from '@/app/(route)/admin/_components/setting/ClosureCard';
import { LogoutButton } from '@/app/(route)/admin/_components/setting/LogoutButton';
import { WaitingClose, PubClose } from 'public';
import { patchPubStatus } from '@/app/api/service/admin/patchPubStatus';
import { patchWaitingStatus } from '@/app/api/service/admin/patchWaitingStatus';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';

export default function Setting() {
  const router = useRouter();
  const [isWaitModalOpen, setIsWaitModalOpen] = useState(false);
  const [isPubModalOpen, setIsPubModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [openStatus, setOpenStatus] = useState(false);
  const [waitingStatus, setWaitingStatus] = useState(false);

  const handleWaitingClouserClick = () => {
    setIsWaitModalOpen(true);
  };

  const handlePubClouserClick = () => {
    setIsPubModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = async () => {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('pubId');
      router.push('/admin');
    } catch (error) {
      console.error('로그아웃 처리 중 오류 발생:', error);
      alert('로그아웃 실패');
    } finally {
      setIsLogoutModalOpen(false);
    }
  };

  const handleConfirmWaiting = async () => {
    await patchWaitingStatus(
      waitingStatus,
      setWaitingStatus,
      setIsWaitModalOpen,
    );
  };

  const handleConfirmPub = async () => {
    await patchPubStatus(openStatus, setOpenStatus, setIsPubModalOpen);
  };

  useEffect(() => {
    const fetchPubInfo = async () => {
      try {
        const data = await getPubInfo();
        setOpenStatus(data.pub.openStatus);
        setWaitingStatus(data.pub.waitingStatus);
        console.log(openStatus, waitingStatus);
      } catch (error) {
        console.error('주점 정보 가져오기 실패:', error);
      }
    };
    fetchPubInfo();
  }, []);

  return (
    <div>
      <div className="flex h-screen flex-col items-center bg-gy-0">
        <Navbar />
        <div className="mb-6 flex flex-row space-x-3">
          <ClouserCard
            label={waitingStatus ? '대기 마감' : '대기 오픈'}
            icon={<WaitingClose />}
            buttonLabel={waitingStatus ? '대기 마감하기' : '대기 오픈하기'}
            onClick={handleWaitingClouserClick}
          />
          <ClouserCard
            label={openStatus ? '점포 마감' : '점포 오픈'}
            icon={<PubClose />}
            buttonLabel={openStatus ? '점포 마감하기' : '점포 오픈하기'}
            onClick={handlePubClouserClick}
          />
        </div>
        <LogoutButton onClick={handleLogoutClick} />
      </div>

      {isWaitModalOpen && (
        <AlertModal
          hasSubmessage={false}
          message={`대기를 ${waitingStatus ? '마감' : '오픈'}할까요?`}
          onCancel={() => setIsWaitModalOpen(false)}
          onConfirm={handleConfirmWaiting}
        />
      )}

      {isPubModalOpen && (
        <AlertModal
          hasSubmessage={false}
          message={`점포를 ${openStatus ? '마감' : '오픈'}할까요?`}
          onCancel={() => setIsPubModalOpen(false)}
          onConfirm={handleConfirmPub}
        />
      )}

      {isLogoutModalOpen && (
        <AlertModal
          hasSubmessage={false}
          message="로그아웃 하시겠습니까?"
          onCancel={() => setIsLogoutModalOpen(false)}
          onConfirm={confirmLogout}
        />
      )}
    </div>
  );
}
