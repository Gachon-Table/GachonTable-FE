'use client';

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

  return (
    <div className="flex flex-col justify-center">
      {session ? <AfterProfile /> : <BeforeProfile />}
      <Tab curTab={curTab} setFunc={setCurTab} />
      {curTab === 'ing' && <Waiting />}
      {curTab === 'ed' && <Waited />}
      <Navigation />
    </div>
  );
};
export default Mypage;
