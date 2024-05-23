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
        <div style={{ width: '100%', border: '1px solid red', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
        <div>
          <div>
            {store.people === "많음" &&
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />
                <p style={{ color: '#EF2323', fontWeight: 'bold' }}>많음</p>
              </div>
            }
            {store.people === "보통" &&
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />
                <p style={{ color: '#F4DE18', fontWeight: 'bold' }}>보통</p>
              </div>
            }
            {store.people === "적음" &&
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />
                <p style={{ color: '#06C33B', fontWeight: 'bold' }}>적음</p>
              </div>
            }
          </div>
          <h1 className="text-2xl font-bold mb-4">{store.department}</h1>
          <p>{store.introduction}</p>
          <p className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</p>
          <p className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.menu[0].name}</p>
          <div style={{fontSize: '16px', fontWeight: 'bold',width:'min-content' , borderBottom: '2px solid black'}}>Instagram</div>
        </div>

      </div>
    </div>
  );
};

export default StoreDetailPage;
