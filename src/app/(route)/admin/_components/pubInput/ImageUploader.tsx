import React, { useRef, useState } from 'react';
import Image from 'next/image';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const s3 = new AWS.S3();

interface ImageUploaderProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  images,
  setImages,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const uploadToS3 = async (file: File): Promise<string> => {
    const fileName = `menus/${Date.now()}-${file.name}`;
    const params = {
      Bucket: 'gachontable',
      Key: fileName,
      Body: file,
      ContentType: file.type,
    };

    try {
      const { Location } = await s3.upload(params).promise();
      return Location;
    } catch (error) {
      console.error('Error uploading to S3:', error);
      throw error;
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const imageUrl = await uploadToS3(file);
        setImages((prev) => [...prev, imageUrl]);
      } catch (error) {
        console.error('Failed to upload image:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-32 w-full overflow-hidden rounded-xl bg-white">
      <div className="ml-4 py-4 text-xs font-bold">대표 사진 및 메뉴</div>
      <div className="scrollbar-track-gray-100 ml-4 flex h-24 space-x-4 overflow-x-auto pb-4">
        <button
          onClick={handleAddImage}
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#EAEFFF]"
          disabled={isUploading}
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
            className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[#EAEFFF]"
          >
            <img
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              className="absolute right-1 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-main-blue text-white"
            >
              <span className="text-[7px] font-medium">X</span>
            </button>
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
