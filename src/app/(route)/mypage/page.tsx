'use client';
import React, { useEffect, useState } from 'react';
import AlertModal from '@/app/common/AlertModal';
import Tab from './_components/Tab';
import WaitedList from './_components/WaitedList';
import WaitingList from './_components/WaitingList';
import { PageHeader } from '@/app/common/PageHeader';
import Profile from './_components/Profile';

const Mypage = () => {
  const [curTab, setCurTab] = useState('ing');
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const [accessToken, setAccessToken] = useState<string | null>('');

  useEffect(() => {
    setAccessToken(localStorage.getItem('userAccessToken'));
  }, []);

  useEffect(() => {
    localStorage.removeItem('pageRefreshed');
    setAccessToken(localStorage.getItem('userAccessToken'));
  }, []);

  return (
    <div className="flex h-screen w-full flex-col bg-gy-0">
      <div className="fixed top-0 z-10 w-full max-w-[430px] bg-wt">
        <PageHeader isDetailPage={false} title={'마이 웨이팅'} />
        <div className="bg-wt">
          <Tab curTab={curTab} setFunc={setCurTab} />
        </div>
      </div>
      <div className="mt-32 w-full ">
        {curTab === 'ing' ? (
          <WaitingList modal={modal} setFunc={setModal} setId={setId} />
        ) : (
          <WaitedList />
        )}
      </div>
      {accessToken ? null : <Profile />}
      {modal && (
        <AlertModal
          message="대기를 취소하시겠습니까?"
          hasSubmessage={true}
          submessage="확인 후 확인 버튼을 눌러주세요."
          onCancel={() => setModal(false)}
          onConfirm={() => setModal(false)}
          waitingId={id}
        />
      )}
    </div>
  );
};

export default Mypage;
