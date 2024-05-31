'use client';

import { useState } from 'react';
import Dropdown from '../_components/Dropdown';
import ImageInputBox from '../_components/pubInput/ImageInputBox';
import StudentIdInputBox from '../_components/pubInput/StudentIdInputBox';

export default function PubManagement() {
  const [contentImages, setContentImages] = useState<File[]>([]);
  const [studentIdInput, setStudentIdInput] = useState(false);
  const [studentId, setStudentId] = useState(false);

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
      </div>
      <button className="mb-8 mt-5 w-11/12 rounded-lg bg-sunglo py-6 text-xl font-semibold text-white">
        저장하기
      </button>
    </div>
  );
}
