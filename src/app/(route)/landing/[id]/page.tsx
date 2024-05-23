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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-9/12 max-w-2xl h-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{store.department}</h1>
        <img src='/images/storeImage.png' alt='가게사진' className="w-28 h-28 mr-2" />
        <p>{store.introduction}</p>
        <p>{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</p>
        <p>{store.menu[0].name}</p>
        <div>
          {store.people === "많음" && <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />}
          {store.people === "보통" && <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />}
          {store.people === "적음" && <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />}
        </div>
        <div>
          {store.bookmark ? (
            <img src="/images/clickbookmark.png" alt="북마크됨" className="w-7 h-7" />
          ) : (
            <img src="/images/nonebookmark.png" alt="북마크안됨" className="w-7 h-7" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
