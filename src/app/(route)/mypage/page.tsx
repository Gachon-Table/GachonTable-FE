'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AfterProfile from './_components/AfterProfile';
import BeforeProfile from './_components/BeforeProfile';
import CancelModal from './_components/CancelModal';
import Tab from './_components/Tab';
import WaitedList from './_components/WaitedList';
import WaitingList from './_components/WaitingList';
import { PageHeader } from '@/app/common/PageHeader';

const Mypage = () => {
  const [curTab, setCurTab] = useState('ing');
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>('');
  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);
  useEffect(() => {
    localStorage.removeItem('pageRefreshed');
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);
  return (
    <div className="flex h-screen flex-col">
      <PageHeader isDetailPage={false} title={'마이 웨이팅'} />
      <Tab curTab={curTab} setFunc={setCurTab} />
      <div className="h-full overflow-y-auto">
        {curTab === 'ing' ? (
          <WaitingList modal={modal} setFunc={setModal} setId={setId} />
        ) : (
          <WaitedList />
        )}
      </div>
      {accessToken ? <AfterProfile /> : <BeforeProfile />}
      {modal && <CancelModal setModal={setModal} waitingId={id} />}
    </div>
  );
};
export default Mypage;
