import { useSession } from 'next-auth/react';
import React from 'react';

const AfterProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="pl-[3rem] mt-[8rem] flex w-[100%] gap-[5rem]">
      <div className="flex h-[6rem]">
        <img src="/images/profile.png" />
      </div>
      <div className="flex items-center text-[30px]">
        <div>{session?.user?.name}님</div>
      </div>
    </div>
  );
};

export default AfterProfile;
