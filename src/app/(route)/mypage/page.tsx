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
          <Image
            src={'/images/left-arrow.png'}
            width={24}
            height={24}
            alt="left arrow"
            className="h-[24px] cursor-pointer"
            onClick={() => {
              router.push('/landing');
            }}
          />
          <div className="text-[2rem] font-bold">마이 웨이팅</div>
        </div>
        {accessToken ? <AfterProfile /> : <BeforeProfile />}
        <Tab curTab={curTab} setFunc={setCurTab} />
        {curTab === 'ing' ? (
          <Waiting modal={modal} setFunc={setModal} setId={setId} />
        ) : (
          <Waited />
        )}
        {modal && <CancelModal setModal={setModal} waitingId={id} />}
      </div>
    </RootLayout>
  );
};
export default Mypage;
