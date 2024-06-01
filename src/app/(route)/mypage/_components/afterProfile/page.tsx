import { useSession } from 'next-auth/react';
import React from 'react';

const AfterProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="mr-[8rem] mt-[8rem] flex w-[100%] justify-evenly gap-10">
      <div className="flex h-full">
        <img src="/images/profile.png" />
      </div>
      <div className="mt-2 flex w-[10rem] flex-col items-center justify-center text-[30px]">
        <div>{session?.user?.name}님</div>
      </div>
    </div>
  );
};

export default AfterProfile;
