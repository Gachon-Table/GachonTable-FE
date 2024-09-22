import React from 'react';
import { DeleteButton } from 'public';

interface ImagePreviewProps {
  imgUrl: string;
  onDelete: (index: string) => void;
}

export const ImagePreview = ({ imgUrl, onDelete }: ImagePreviewProps) => {
  return (
    <div className="relative h-[72px] w-[72px] rounded-md">
      <img
        className="relative h-[72px] w-[72px] rounded-md border-[1px] border-gy-200"
        src={imgUrl}
        alt={imgUrl}
      />
      <button
        type="button"
        onClick={() => onDelete(imgUrl)}
        aria-label="DeleteIcon"
        className="absolute left-14 top-[-8px] items-center justify-center"
      >
        <DeleteButton />
      </button>
    </div>
  );
};
