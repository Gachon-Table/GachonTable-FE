/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { ImagePreview } from '@/app/(route)/admin/_components/menu-management/ImagePreview';
import { ImageUploadButton } from './ImageUploadButton';
import { uploadToS3 } from '@/app/api/s3/uploadToS3';

interface ImageUploaderProps {
  imageTotalCount: number;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  imageTotalCount,
  images,
  setImages,
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleDeleteImage = (imgUrl: string) => {
    setImages((prev) => prev.filter((image) => image !== imgUrl));
  };

  const handleUploadFiles = async (files: File[]) => {
    setIsUploading(true);
    try {
      const uploadPromises = files.map(async (file) => {
        const imageUrl = await uploadToS3(file);
        return imageUrl.split('?')[0];
      });

      const newImageUrls = await Promise.all(uploadPromises);
      setImages((prev) => [...prev, ...newImageUrls]);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <ImageUploadButton
        imageTotalCount={imageTotalCount}
        imageCount={images.length}
        onUploadFiles={handleUploadFiles}
      />
      {images.map((image, index) => (
        <ImagePreview
          key={index}
          imgUrl={image}
          onDelete={() => handleDeleteImage(image)}
        />
      ))}
    </div>
  );
};

export default ImageUploader;
