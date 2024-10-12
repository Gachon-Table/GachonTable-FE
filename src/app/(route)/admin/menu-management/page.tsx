/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../_components/NavBar';
import ImageUploader from '@/app/(route)/admin/_components/menu-management/ImageUploader';
import MenuInputBox from '@/app/(route)/admin/_components/menu-management/MenuInputBox';
import { isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';
import { patchManageMenu } from '@/app/api/service/admin/patchManageMenu';
import { MenuItemProps } from '@/app/(route)/admin/_components/menu-management/MenuInputBox';

export default function MenuManagement() {
  const [representativeImages, setRepresentativeImages] = useState<string[]>(
    [],
  );
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
  const [firstImage, setFirstImage] = useState<string[]>([]);
  const [secondImage, setSecondImage] = useState<string[]>([]);
  const [thirdImage, setThirdImage] = useState<string[]>([]);
  const [fourthImage, setFourthImage] = useState<string[]>([]);
  const [fifthImage, setFifthImage] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          try {
            const response = await getPubInfo();
            setRepresentativeImages(
              response.pub.thumbnails &&
                response.pub.thumbnails.length > 0 &&
                response.pub.thumbnails[0] !== 'string'
                ? response.pub.thumbnails
                : [],
            );
            setMenuItems(response.menu || []);
            console.log(menuItems);
          } catch (error) {
            console.error('주점 정보를 가져오는데 실패했습니다:', error);
            alert(
              '주점 정보를 가져오는데 실패했습니다. 페이지를 새로고침 해주세요.',
            );
          }
        } else {
          router.push('/admin');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuth();
  }, [router]);

  const handleSave = async () => {
    const cleanedImages = representativeImages.map((url) => url.split('?')[0]);

    if (menuItems.length > 0 && firstImage.length > 0) {
      menuItems[0].thumbnail = firstImage[0];
    }
    if (menuItems.length > 1 && secondImage.length > 0) {
      menuItems[1].thumbnail = secondImage[0];
    }
    if (menuItems.length > 2 && thirdImage.length > 0) {
      menuItems[2].thumbnail = thirdImage[0];
    }
    if (menuItems.length > 3 && fourthImage.length > 0) {
      menuItems[3].thumbnail = fourthImage[0];
    }
    if (menuItems.length > 4 && fifthImage.length > 0) {
      menuItems[4].thumbnail = fifthImage[0];
    }

    const updatedPubData = {
      thumbnails: cleanedImages,
      menuRequests: menuItems,
    };

    const response = await patchManageMenu(updatedPubData);
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-start bg-gy-0 ">
        <div className="fixed top-0 z-50 w-full max-w-[430px]">
          <Navbar />
        </div>
        <div className="w-full items-center justify-center overflow-y-auto  px-4">
          <div className="mb-4 mt-16 space-y-3">
            <div className="text-gy-900 font-h4">대표 사진 설정</div>
            <ImageUploader
              imageTotalCount={3}
              images={representativeImages}
              setImages={setRepresentativeImages}
            />
          </div>
          <div className="border-b-4 bg-gy-100" />

          <div className="mt-[18px] flex flex-row items-center space-x-[5px] ">
            <div className="text-gy-900 font-h4">메뉴 편집</div>
            <span className="text-gy-600 font-b2-normal-medium">
              (사진은 대표메뉴 5가지만 등록가능 합니다.)
            </span>
          </div>
          <div className="mb-6 mt-[15px]">
            <MenuInputBox
              menuItems={menuItems}
              setMenuItems={setMenuItems}
              firstImage={firstImage}
              setFirstImage={setFirstImage}
              secondImage={secondImage}
              setSecondImage={setSecondImage}
              thirdImage={thirdImage}
              setThirdImage={setThirdImage}
              fourthImage={fourthImage}
              setFourthImage={setFourthImage}
              fifthImage={fifthImage}
              setFifthImage={setFifthImage}
            />
          </div>
          <div className="mb-8 flex justify-end border-none">
            <button
              onClick={handleSave}
              className="mb-6 flex h-16 w-full cursor-pointer items-center justify-center rounded-md bg-primary-400 text-wt font-h4"
            >
              저장하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
