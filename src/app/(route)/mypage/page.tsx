'use client';
import React from 'react';
import { useState } from 'react';
import Waited from './_components/waited/page';
import Waiting from './_components/waiting/page';
import BeforeProfile from './_components/beforeProfile/page';
import Tab from './_components/tab/page';
import Navigation from '../_components/nav/Navigation';
import { useSession } from 'next-auth/react';
import AfterProfile from './_components/afterProfile/page';

const Mypage = () => {
  const [curTab, setCurTab] = useState('ing');
  const { data: session } = useSession();
  console.log(session?.accessToken)
  return (
    <div className="flex flex-col justify-center">
      {session ? <AfterProfile /> : <BeforeProfile />}
      <Tab curTab={curTab} setFunc={setCurTab} />
      {session?.accessToken ? (
        curTab === 'ing' ? (
          <Waiting />
        ) : (
          <Waited />
        )
      ) : null}
      <Navigation />
    </div>
  );
};
export default Mypage;
