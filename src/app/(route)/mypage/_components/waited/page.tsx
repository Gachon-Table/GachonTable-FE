'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface WaitedItem {
  pubName: string;
  status: string;
  enteredTime: string;
}

const Waited = () => {
  const [waitedList, setWaitedList] = useState<WaitedItem[]>([]);
  const accessToken = localStorage.getItem('accessToken');
  const waitedApi = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/waiting/history`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    setWaitedList(result.data);
  };

  useEffect(() => {
    if (accessToken) {
      waitedApi();
    }
  }, []);
  return (
    <div className="flex h-[5rem] w-[100%] flex-col p-[1rem]">
      <div className="flex items-center justify-around">
        {waitedList
          ? waitedList.map((element, index) => {
              return (
                <div key={index}>
                  <div>{element.pubName}</div>
                  <div>
                    <div>방문 상태 : {element.status}</div>
                    <div>방문 시간 : {element.enteredTime}</div>
                  </div>
                  <div className='border border-b-[1px]'></div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Waited;
