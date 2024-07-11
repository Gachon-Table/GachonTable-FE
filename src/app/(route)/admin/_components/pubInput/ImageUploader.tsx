import React, { useState, useRef } from 'react';
import Image from 'next/image';

export const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[150px] w-full overflow-hidden rounded-xl bg-white">
      <div className="ml-4 py-4 text-xs font-bold">대표 사진 및 메뉴</div>
      <div className="scrollbar-track-gray-100 ml-4 flex h-[100px] space-x-4 overflow-x-auto pb-4">
        <button
          onClick={handleAddImage}
          className="flex h-[80px] w-[80px] flex-shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#EAEFFF]"
        >
          <Image
            src="/images/add-button.png"
            alt="Add Image"
            width={24}
            height={24}
          />
        </button>
        {images.map((image, index) => (
          <div
            key={index}
            className="h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-xl bg-[#EAEFFF]"
          >
            <img
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
