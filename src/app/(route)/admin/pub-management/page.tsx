'use client';

import React, { useEffect, useState } from 'react';
import Dropdown from '../_components/Dropdown';
import ImageInputBox from '../_components/pubInput/ImageInputBox';
import StudentIdInputBox from '../_components/pubInput/StudentIdInputBox';
import MenuInputBox from '../_components/pubInput/MenuInputBox';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { useRouter } from 'next/navigation';

export default function PubManagement() {
  const [contentImages, setContentImages] = useState<File[]>([]);
  const [studentId, setStudentId] = useState(false);
  const router = useRouter();

  const initialFields = [
    { name: '떡볶이', price: '1000' },
    { name: '순대', price: '2000' },
  ];
  const maxFields = 5;

  useEffect(() => {
    console.log(isAuthenticated());
    if (!isAuthenticated()) {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-deep-cove pt-8">
      <div className="w-11/12 max-w-screen-xl pb-5">
        <Dropdown />
      </div>
      <div className="h-[480px] w-11/12 max-w-screen-xl">
        <ImageInputBox
          contentImagesState={{
            contentImages,
            setContentImages,
          }}
        />
        <StudentIdInputBox studentIdeState={{ studentId, setStudentId }} />
        <MenuInputBox initialFields={initialFields} maxFields={maxFields} />
      </div>
      <button className="mb-8 mt-5 w-11/12 rounded-lg bg-sunglo py-6 text-xl font-semibold text-white">
        저장하기
      </button>
    </div>
  );
}
