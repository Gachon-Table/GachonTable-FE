import { useSession } from 'next-auth/react';
import React from 'react';

const AfterProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="pl-[1rem] mt-[4rem] flex w-[100%] gap-[5rem]">
      <div className="flex items-center text-[2rem] font-bold">
        <div>{session?.user?.name}</div>
      </div>
    </div>
  );
};

export default AfterProfile;
