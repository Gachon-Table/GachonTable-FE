'use client';

import { useState } from 'react';
import Dropdown from '../_components/Dropdown';
import ImageInputBox from '../_components/ImageInputBox';

export default function PubManagement() {
  const [contentImages, setContentImages] = useState<File[]>([]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-deep-cove pt-8">
      <div className="w-11/12 max-w-screen-xl pb-5">
        <Dropdown />
      </div>
      <div className="h-[480px] w-11/12 max-w-screen-xl overflow-y-auto rounded-lg bg-white p-5 shadow-md">
        <ImageInputBox
          contentImagesState={{
            contentImages,
            setContentImages,
          }}
        />
      </div>
    </div>
  );
}
