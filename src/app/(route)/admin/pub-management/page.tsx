'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../_components/NavBar';
import ImageUploader from '../_components/pubInput/ImageUploader';
import StudentIdInputBox from '../_components/pubInput/StudentIdInputBox';
import MenuInputBox from '../_components/pubInput/MenuInputBox';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { getPubInfo } from '@/app/api/service/getPubInfo';
import { savePubInfo } from '@/app/api/service/savePubInfo';

interface MenuItem {
  menuName: string;
  price: string;
  oneLiner: string;
}

export default function PubManagement() {
  const [contentImages, setContentImages] = useState<string[]>([]);
  const [oneLiner, setOneLiner] = useState('');
  const [studentId, setStudentId] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          try {
            const response = await getPubInfo();
            setContentImages(
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
    const updatedPubData = {
      thumbnails: contentImages,
      oneLiner: oneLiner,
      studentCard: studentId,
      menuRequests: menuItems,
    };

    try {
      await savePubInfo(updatedPubData);
      console.log(updatedPubData);
    } catch (error) {
      console.error('주점 정보 업데이트 실패:', error);
      alert('주점 정보 업데이트에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-bg-white pt-2">
      <Navbar />
      <div className="h-550 w-10/12 max-w-screen-xl">
        <ImageUploader images={contentImages} setImages={setContentImages} />
        <StudentIdInputBox studentId={studentId} setStudentId={setStudentId} />
        <MenuInputBox menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
      <button
        className="mb-3 mt-16 w-10/12 rounded-xl bg-main-blue py-6 text-xl font-semibold text-white"
        onClick={handleSave}
      >
        저장하기
      </button>
    </div>
  );
}
