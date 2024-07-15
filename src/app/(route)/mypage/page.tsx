'use client';
import React from 'react';
import { useState } from 'react';
import Waited from './_components/waited/page';
import Waiting from './_components/waiting/page';
import BeforeProfile from './_components/beforeProfile/page';
import Tab from './_components/tab/page';
import { useSession } from 'next-auth/react';
import AfterProfile from './_components/afterProfile/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CancelModal from './_components/cancelModal/page';

const Mypage = () => {
  const [curTab, setCurTab] = useState('ing');
  const [modal, setModal] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  return (
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
      {session ? <AfterProfile /> : <BeforeProfile />}
      <Tab curTab={curTab} setFunc={setCurTab} />
      {curTab === 'ing' ? (
        <Waiting modal={modal} setFunc={setModal} />
      ) : (
        <Waited />
      )}
      {modal && <CancelModal />}
    </div>
  );
};
export default Mypage;
