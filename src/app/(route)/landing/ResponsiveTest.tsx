import React from 'react';
import storeData from './data.json'; // JSON 파일을 import

const ResponsiveTest: React.FC = () => {
  return (
    <>
      {storeData.stores.map((store) => (
        <div key={store.id} className="w-full h-1/10 bg-white flex flex-row">
          <img src='/images/storeImage.png' alt='가게사진' className="w-28 h-28 mr-2" />
          <div className="w-4/5 bg-white flex flex-row justify-between" >
            <div>
              <div className="w-11/12 bg-white flex items-center text-center justify-start text-[20px]">
                <div className="font-bold text-lg">{store.department}</div>
                <div className="ml-2">
                  {store.people === "많음" && <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />}
                  {store.people === "보통" && <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />}
                  {store.people === "적음" && <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />}
                </div>
              </div>
              <div className="w-12/12 bg-white flex justify-start mb-[5%] text-base items-start text-left">{store.introduction}</div>
              <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</div>
              <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.menu[0].name}</div> {/* 첫 번째 메뉴 이름만 표시 */}
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
      ))}
    </>
  );
};
export default ResponsiveTest;
