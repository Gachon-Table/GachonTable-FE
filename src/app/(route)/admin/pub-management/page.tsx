'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../_components/NavBar';
import ImageUploader from '../_components/pubInput/ImageUploader';
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
    <div className="flex min-h-screen flex-col items-center justify-start bg-bg-white pt-2">
      <Navbar />
      <div className="h-[550px] w-10/12 max-w-screen-xl">
        <ImageUploader />
        <StudentIdInputBox studentIdeState={{ studentId, setStudentId }} />
        <MenuInputBox initialFields={initialFields} maxFields={maxFields} />
      </div>
      <button className="mb-3 mt-5 w-10/12 rounded-xl bg-main-blue py-6 text-xl font-semibold text-white">
        저장하기
      </button>
    </div>
  );
}
