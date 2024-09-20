/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Image from 'next/image';
import { TrashIcon } from 'public';
import ImageUploader from '@/app/(route)/admin/_components/menu-management/ImageUploader';

export interface MenuItemProps {
  thumbnail: string;
  menuName: string;
  oneLiner: string;
  price: string;
}

interface MenuInputBoxProps {
  menuItems: MenuItemProps[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItemProps[]>>;
  maxFields?: number;
}

const MenuInputBox: React.FC<MenuInputBoxProps> = ({
  menuItems,
  setMenuItems,
  maxFields = 10,
}) => {
  const [firstImage, setFirstImage] = useState<string[]>([]);
  const [secondImage, setSecondImage] = useState<string[]>([]);

  const handleAddField = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (menuItems.length < maxFields) {
      setMenuItems([
        ...menuItems,
        { thumbnail: '', menuName: '', price: '', oneLiner: '' },
      ]);
    }
  };

  const handleRemoveField = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setMenuItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [name]: value } : item,
      ),
    );
  };

  return (
    <form className="ml-4 mt-4 flex flex-col">
      <div className="h-screen space-y-2 overflow-y-auto">
        {menuItems.map((menu, index) => (
          <div key={index} className="space-y-2">
            {index === 0 && (
              <div className="space-y-2">
                <div className="text-gy-800 font-b2-normal-semibold">
                  (대표) 메뉴1
                </div>
                <ImageUploader
                  imageTotalCount={1}
                  images={firstImage}
                  setImages={setFirstImage}
                />
                <div className="flex w-[382px] flex-col rounded-md border-[1px] border-gy-200 bg-wt px-4 py-[6px]">
                  <input
                    type="text"
                    placeholder="메뉴 이름"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="한 줄 설명"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="가격 (단위도 함께 작성해주세요)"
                    className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                </div>
              </div>
            )}
            {index === 1 && (
              <div className="space-y-2">
                <div className="text-gy-800 font-b2-normal-semibold">
                  (대표) 메뉴2
                </div>
                <ImageUploader
                  imageTotalCount={1}
                  images={secondImage}
                  setImages={setSecondImage}
                />
                <div className="flex w-[382px] flex-col rounded-md border-[1px] border-gy-200 bg-wt px-4 py-[6px]">
                  <input
                    type="text"
                    placeholder="메뉴 이름"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="한 줄 설명"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="가격 (단위도 함께 작성해주세요)"
                    className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                </div>
              </div>
            )}
            {index > 1 && (
              <div className="w-[382px] space-y-2">
                <div className="flew-row flex justify-between">
                  <div className="text-gy-800 font-b2-normal-semibold">
                    메뉴{index + 1}
                  </div>
                  <button onClick={() => handleRemoveField(index)}>
                    <TrashIcon />
                  </button>
                </div>
                <div className="flex flex-col rounded-md border-[1px] border-gy-200 bg-wt px-4 py-[6px]">
                  <input
                    type="text"
                    placeholder="메뉴 이름"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="한 줄 설명"
                    className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="가격 (단위도 함께 작성해주세요)"
                    className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <button
          onClick={() => handleAddField}
          className="rounded-md bg-gy-200 px-[159px] py-[14px] font-b2-normal-semibold"
        >
          + 메뉴 추가
        </button>
      </div>
    </form>
  );
};

export default MenuInputBox;
