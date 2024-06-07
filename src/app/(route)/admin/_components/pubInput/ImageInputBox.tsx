'use client';
import { useState } from 'react';

interface Props {
  contentImagesState: {
    contentImages: File[];
    setContentImages: (files: File[]) => void;
  };
}

function ImageInputBox({ contentImagesState }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const { contentImages, setContentImages } = contentImagesState;

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    setContentImages([...contentImages, ...files]);
    setIsDragging(false);
  };

  const onContentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setContentImages([...contentImages, ...files]);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        id="input-file"
        className="hidden"
        aria-hidden
        onChange={onContentImageChange}
        multiple
      />
      <div
        className={`w-full max-w-md cursor-pointer rounded-md border-2 border-gray-400 p-5 hover:bg-gray-200 ${
          isDragging ? 'bg-gray-200' : 'bg-white'
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <label
          htmlFor="input-file"
          role="button"
          className="flex flex-row items-center justify-center"
        >
          <img src="/images/img-icon.png" alt="이미지 아이콘" className="h-5" />
          <span className="ml-2 text-sm text-gray-500">
            {contentImages.length > 0
              ? `${contentImages.length}개의 이미지가 선택되었습니다.`
              : '대표 사진 및 메뉴 사진 업로드'}
          </span>
        </label>
      </div>
    </div>
  );
}

export default ImageInputBox;
