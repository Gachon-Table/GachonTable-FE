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
