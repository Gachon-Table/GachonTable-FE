'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LeftArrow } from 'public';
import AfterProfile from './_components/AfterProfile';
import BeforeProfile from './_components/BeforeProfile';
import CancelModal from './_components/CancelModal';
import Tab from './_components/Tab';
import WaitedList from './_components/WaitedList';
import WaitingList from './_components/WaitingList';

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
      <div className="ml-[2rem] mt-[2rem] flex items-center gap-[1rem]">
        <LeftArrow
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <div className="text-[2rem] font-bold">마이 웨이팅</div>
      </div>
      {accessToken ? <AfterProfile /> : <BeforeProfile />}
      <Tab curTab={curTab} setFunc={setCurTab} />
      <div className="h-full overflow-y-auto py-[2rem]">
        {curTab === 'ing' ? (
          <WaitingList modal={modal} setFunc={setModal} setId={setId} />
        ) : (
          <WaitedList />
        )}
      </div>
      {modal && <CancelModal setModal={setModal} waitingId={id} />}
    </div>
  );
};
export default Mypage;
