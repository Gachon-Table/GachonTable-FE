'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/(route)/admin/_components/NavBar';
import AlertModal from '@/app/common/AlertModal';
import { ClouserCard } from '@/app/(route)/admin/_components/setting/ClosureCard';
import { LogoutButton } from '@/app/(route)/admin/_components/setting/LogoutButton';
import { WaitingClose, PubClose } from 'public';
import { patchPubStatus } from '@/app/api/service/admin/patchPubStatus';
import { patchWaitingStatus } from '@/app/api/service/admin/patchWaitingStatus';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';
import { adminLogout } from '@/app/api/service/admin/adminAuth';

export default function Setting() {
  const [isWaitModalOpen, setIsWaitModalOpen] = useState(false);
  const [isPubModalOpen, setIsPubModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [openStatus, setOpenStatus] = useState(false);
  const [waitingStatus, setWaitingStatus] = useState(false);

  const [message, setMessage] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const handleWaitingClouserClick = () => {
    setIsWaitModalOpen(true);
  };

  const handlePubClouserClick = () => {
    setIsPubModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmWaiting = async () => {
    const result = await patchWaitingStatus(
      waitingStatus,
      setWaitingStatus,
      setIsWaitModalOpen,
    );

    if (result.success) {
      setMessage(result.message as string);
      setIsMessage(true);
    } else {
      setError(result.message as string);
      setIsError(true);
    }
  };

  const handleConfirmPub = async () => {
    const result = await patchPubStatus(
      openStatus,
      setOpenStatus,
      setIsPubModalOpen,
    );

    if (result.success) {
      setMessage(result.message as string);
      setIsMessage(true);
    } else {
      setError(result.message as string);
      setIsError(true);
    }
  };

  useEffect(() => {
    const fetchPubInfo = async () => {
      try {
        const data = await getPubInfo();
        setOpenStatus(data.pub.openStatus);
        setWaitingStatus(data.pub.waitingStatus);
        console.log(openStatus, waitingStatus);
      } catch (error) {
        setError('주점 정보 조회 실패\n 관리자에게 문의하세요.');
        setIsError(true);
      }
    };
    fetchPubInfo();
  }, []);

  return (
    <div className="box-border">
      <div className="flex h-screen flex-col items-center bg-gy-0">
        <Navbar />
        <div className="mb-6 flex w-full flex-row space-x-3 px-4">
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
        <div className="w-full px-4">
          <LogoutButton onClick={handleLogoutClick} />
        </div>
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
          onConfirm={adminLogout}
        />
      )}

      {isMessage && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={message}
          onConfirm={() => {
            setIsMessage(false);
            window.location.reload();
          }}
        />
      )}

      {isError && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={error}
          onConfirm={() => setIsError(false)}
        />
      )}
    </div>
  );
}
