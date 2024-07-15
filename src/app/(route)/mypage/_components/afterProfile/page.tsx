import React from 'react';

const AfterProfile = () => {
  return (
    <div className="mt-[4rem] flex w-[100%] gap-[5rem] pl-[1rem]">
      <div className="flex items-center text-[2rem] font-bold">
        <div>{localStorage.getItem('userName')}</div>
      </div>
    </div>
  );
};

export default AfterProfile;
