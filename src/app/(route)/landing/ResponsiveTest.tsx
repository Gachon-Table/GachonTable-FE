// ResponsiveTest.tsx
import React from 'react';
import {
  ListItem,
  TextBox,
  Department,
  Introduction,
  StudentID,
  Menu
} from './LandingPageStyles';
import storeData from './data.json'; // JSON 파일을 import

const ResponsiveTest: React.FC = () => {
  return (
    <>
      {storeData.stores.map((store) => (
        <ListItem key={store.id}>
          <img src='/images/storeImage.png' alt='가게사진' style={{ width: '115px', height: '107px' }} />
          <TextBox>
            <div>
              <Department>
                {store.department}
                {/* 조건부로 이미지 표시 */}
                <div style={{ marginLeft: '0.2rem' }}>
                  {store.people === "많음" && <img src="/images/manypeople.png" alt="많은 사람" style={{ width: '13px', height: '13px' }} />}
                  {store.people === "보통" && <img src="/images/normalpeople.png" alt="보통 사람" style={{ width: '13px', height: '13px' }} />}
                  {store.people === "적음" && <img src="/images/nonepeople.png" alt="적은 사람" style={{ width: '13px', height: '13px' }} />}
                </div>
              </Department>
            </div>
            <Introduction>{store.introduction}</Introduction>
            <StudentID>{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</StudentID>
            <Menu>{store.menu[0].name}</Menu> {/* 첫 번째 메뉴 이름만 표시 */}
          </TextBox>
          {store.bookmark ? (
            <img src="/images/clickbookmark.png" alt="북마크됨" style={{ width: '30px', height: '30px' }} />
          ) : (
            <img src="/images/nonebookmark.png" alt="북마크안됨" style={{ width: '30px', height: '30px' }} />
          )}
        </ListItem>
      ))}
    </>
  );
};
export default ResponsiveTest;
