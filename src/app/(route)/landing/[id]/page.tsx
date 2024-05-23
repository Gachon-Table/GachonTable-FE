// src/app/(route)/landing/[id]/page.tsx
"use client"; // Add the "use client" pragma comment
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import storeData from '../data.json'; // Adjust the path to your JSON file

const StoreDetailPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname to get the current URL pathname
  const id = pathname.split('/').pop(); // Extract the id from the pathname

  const store = storeData.stores.find((store) => store.id === Number(id));

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-9/12 h-full max-w-2xl bg-white rounded-lg shadow-md p-6 border border-red-500">
        <div className="w-full flex justify-between mb-10" >
          <div>
            <img src='/images/return.png' alt='뒤로가기' className="w-7 h-7" />
          </div>
          <div>
            {store.bookmark ? (
              <img src="/images/clickbookmark.png" alt="북마크됨" className="w-7 h-7" />
            ) : (
              <img src="/images/nonebookmark.png" alt="북마크안됨" className="w-7 h-7" />
            )}
          </div>
        </div>
        <div style={{ border: '1px solid red' }}>
          <div>
            {store.people === "많음" &&
              <div className="flex justify-left items-center">
                <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />
                <p className="text-red-600 font-bold">많음</p>
              </div>
            }
            {store.people === "보통" &&
              <div className="flex justify-left items-center">
                <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />
                <p className="text-yellow-500 font-bold">보통</p>
              </div>
            }
            {store.people === "적음" &&
              <div className="flex justify-left items-center">
                <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />
                <p className="text-green-500 font-bold">적음</p>
              </div>
            }
          </div>
          <h1 className="text-2xl font-bold mb-4">{store.department}</h1>
          <p>{store.introduction}</p>
          <p className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</p>
          <p className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.menu[0].name}</p>
          <div className="text-lg font-bold" style={{ borderBottom: '2px solid black', width: 'min-content' }}>Instagram</div>
        </div>
        <div className="border-b border-gray-300 flex flex-row mt-5 h-1/6 ">
          <div className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300">전화</div>
          <div className="w-1/2 text-lg flex justify-center items-center">메뉴</div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
