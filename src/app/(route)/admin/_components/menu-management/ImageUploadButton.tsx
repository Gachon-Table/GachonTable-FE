import React, { useRef } from 'react';
import { Camera } from 'public';

export interface ImageUploadButtonProps {
  imageTotalCount: number;
  imageCount: number;
  onUploadFiles: (files: File[]) => Promise<void>;
}

export const ImageUploadButton = ({
  imageTotalCount,
  imageCount,
  onUploadFiles,
}: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;

    if (files) {
      const newImageFiles = Array.from(files);
      const remainingCount = imageTotalCount - imageCount;
      const limitedNewFiles = newImageFiles.slice(0, remainingCount);

      await onUploadFiles(limitedNewFiles);
    }
  };

  const handleButtonClick = () => {
    if (imageCount >= imageTotalCount) return;
    fileInputRef.current?.click();
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="cursor-pointer rounded-md border-[1px] border-gy-200 bg-wt px-[21.5px] pb-[10px] pt-[18px]"
      disabled={imageCount >= imageTotalCount}
    >
      <div className="flex flex-col items-center space-y-[3px]">
        <Camera />
        <div className="font-c1-semibold">
          <span
            className={imageCount === 0 ? 'text-gy-400' : 'text-primary-400'}
          >
            {imageCount}
          </span>
          <span className="text-gy-400">/{imageTotalCount}</span>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />
    </button>
  );
};
