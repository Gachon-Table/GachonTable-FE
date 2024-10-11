'use client';
import React, { useEffect, useState } from 'react';
import CancelModal from './_components/CancelModal';
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
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);
  useEffect(() => {
    localStorage.removeItem('pageRefreshed');
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);
  return (
    <div className="flex h-screen flex-col bg-gy-0">
      <PageHeader isDetailPage={false} title={'마이 웨이팅'} />
      <div className="bg-wt">
        <Tab curTab={curTab} setFunc={setCurTab} />
      </div>
      <div className="flex h-screen items-center justify-center">
        {curTab === 'ing' ? (
          <WaitingList modal={modal} setFunc={setModal} setId={setId} />
        ) : (
          <WaitedList />
        )}
      </div>
      {accessToken ? null : <Profile />}
      {modal && <CancelModal setModal={setModal} waitingId={id} />}
    </div>
  );
};
export default Mypage;
