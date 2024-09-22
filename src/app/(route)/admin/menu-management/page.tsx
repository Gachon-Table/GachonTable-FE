/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../_components/NavBar';
import ImageUploader from '@/app/(route)/admin/_components/menu-management/ImageUploader';
import MenuInputBox from '@/app/(route)/admin/_components/menu-management/MenuInputBox';
import { isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';
import pubAxios from '@/app/api/axios/pubAxios';
import { MenuItemProps } from '@/app/(route)/admin/_components/menu-management/MenuInputBox';

export default function MenuManagement() {
  const [representativeImages, setRepresentativeImages] = useState<string[]>(
    [],
  );
  const [oneLiner, setOneLiner] = useState('');
  const [studentId, setStudentId] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
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
            setOneLiner(response.pub.onLiner || '');
            setStudentId(response.pub.studentCard || false);
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

    const updatedPubData = {
      thumbnails: cleanedImages,
      oneLiner: oneLiner,
      studentCard: studentId,
      menuRequests: menuItems,
    };

    console.log('최종 전송할 thumbnails 배열:', updatedPubData.thumbnails);

    try {
      const response = await pubAxios.patch('/manage', updatedPubData);
      if (response.status === 200) {
        console.log('정보 업데이트 성공');
        alert('저장되었습니다.');
        return response.data;
      }
    } catch (error) {
      console.log('정보 업데이트 실패: ', error);
      console.log(updatedPubData);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col justify-start bg-gy-0">
        <Navbar />
        <div className="mb-4 ml-4 space-y-3">
          <div className="text-gy-900 font-h4">대표 사진 설정</div>
          <ImageUploader
            imageTotalCount={3}
            images={representativeImages}
            setImages={setRepresentativeImages}
          />
        </div>
        <div className="border-b-4 bg-gy-100" />

        <div className="ml-4 mt-[18px] flex flex-row items-center space-x-[5px]">
          <div className="text-gy-900 font-h4">메뉴 편집</div>
          <span className="text-gy-600 font-b2-normal-medium">
            (사진은 대표메뉴 2가지만 등록가능 합니다.)
          </span>
        </div>

        <MenuInputBox menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
      <div className="fixed bottom-8 left-0 right-0 flex justify-center">
        <button
          className="flex w-[382px] items-center justify-center rounded-md bg-primary-400 px-6 py-[19px]"
          onClick={handleSave}
        >
          <span className="block w-[334px] text-center text-wt font-h4">
            저장하기
          </span>
        </button>
      </div>
    </>
  );
}
