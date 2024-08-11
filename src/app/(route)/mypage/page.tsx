'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Waited from './_components/waited/page';
import Waiting from './_components/waiting/page';
import BeforeProfile from './_components/beforeProfile/page';
import Tab from './_components/tab/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CancelModal from './_components/cancelModal/page';
import AfterProfile from './_components/afterProfile/page';
import RootLayout from '../../layout';
import LeftArrow from 'public/icons/leftArrow';

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
    <RootLayout>
      <div className="flex h-full flex-col">
        <div className="ml-[2rem] mt-[2rem] flex items-center gap-[1rem]">
          <LeftArrow width={24} height={24} />
          <div className="text-[2rem] font-bold">마이 웨이팅</div>
        </div>
        {accessToken ? <AfterProfile /> : <BeforeProfile />}
        <Tab curTab={curTab} setFunc={setCurTab} />
        <div className='h-full overflow-y-auto py-[2rem]'>
          {curTab === 'ing' ? (
            <Waiting modal={modal} setFunc={setModal} setId={setId} />
          ) : (
            <Waited />
          )}
        </div>
        {modal && <CancelModal setModal={setModal} waitingId={id} />}
      </div>
    </RootLayout>
  );
};
export default Mypage;
