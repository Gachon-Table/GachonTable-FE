import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import AlertModal from '@/app/common/AlertModal';
import { TrashIcon } from 'public';
import ImageUploader from '@/app/(route)/admin/_components/menu-management/ImageUploader';

export interface MenuItemProps {
  menuId?: number;
  thumbnail: string;
  menuName: string;
  oneLiner: string;
  price: string;
}

interface MenuInputBoxProps {
  menuItems: MenuItemProps[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItemProps[]>>;
  firstImage: string[];
  setFirstImage: React.Dispatch<React.SetStateAction<string[]>>;
  secondImage: string[];
  setSecondImage: React.Dispatch<React.SetStateAction<string[]>>;
  maxFields?: number;
}

const MenuInputBox: React.FC<MenuInputBoxProps> = ({
  menuItems,
  setMenuItems,
  firstImage,
  setFirstImage,
  secondImage,
  setSecondImage,
  maxFields = 10,
}) => {
  // const [firstImage, setFirstImage] = useState<string[]>([]);
  // const [secondImage, setSecondImage] = useState<string[]>([]);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [itemToDeleteIndex, setItemToDeleteIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (menuItems.length > 0 && menuItems[0].thumbnail) {
      setFirstImage([menuItems[0].thumbnail]);
    }
    if (menuItems.length > 1 && menuItems[1].thumbnail) {
      setSecondImage([menuItems[1].thumbnail]);
    }
  }, [menuItems]);

  const handleAddField = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (menuItems.length < maxFields) {
      setMenuItems([
        ...menuItems,
        {
          menuId: menuItems.length,
          thumbnail: '',
          menuName: '',
          price: '',
          oneLiner: '',
        },
      ]);
    }
  };

  const handleRemoveField = () => {
    if (itemToDeleteIndex !== null) {
      setMenuItems(menuItems.filter((_, i) => i !== itemToDeleteIndex));
    }
    setIsRemoveModalOpen(false);
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

  const openRemoveModal = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    setItemToDeleteIndex(index);
    setIsRemoveModalOpen(true);
  };

  return (
    <>
      <form className="ml-4 mt-4 flex flex-col">
        <div className="mb-28 space-y-2 overflow-y-auto ">
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
                      name="menuName"
                      placeholder="메뉴 이름"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.menuName}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="oneLiner"
                      placeholder="한 줄 설명"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.oneLiner}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="price"
                      placeholder="가격 (단위도 함께 작성해주세요)"
                      className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.price}
                      onChange={(e) => handleInputChange(index, e)}
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
                      name="menuName"
                      placeholder="메뉴 이름"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.menuName}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="oneLiner"
                      placeholder="한 줄 설명"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.oneLiner}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="price"
                      placeholder="가격 (단위도 함께 작성해주세요)"
                      className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.price}
                      onChange={(e) => handleInputChange(index, e)}
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
                    <button onClick={(e) => openRemoveModal(e, index)}>
                      <TrashIcon />
                    </button>
                  </div>
                  <div className="flex flex-col rounded-md border-[1px] border-gy-200 bg-wt px-4 py-[6px]">
                    <input
                      type="text"
                      name="menuName"
                      placeholder="메뉴 이름"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.menuName}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="oneLiner"
                      placeholder="한 줄 설명"
                      className="border-b-[1px] border-gy-200 px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.oneLiner}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                      type="text"
                      name="price"
                      placeholder="가격 (단위도 함께 작성해주세요)"
                      className="px-2 py-[10px] font-b1-normal-medium placeholder:text-gy-200 focus:outline-none"
                      value={menu.price}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={handleAddField}
            className="rounded-md bg-gy-200 px-[159px] py-[14px] font-b2-normal-semibold"
          >
            + 메뉴 추가
          </button>
        </div>
      </form>
      {isRemoveModalOpen && itemToDeleteIndex !== null && (
        <AlertModal
          hasSubmessage={false}
          message={`메뉴 ${itemToDeleteIndex + 1}번을 삭제하시겠습니까?`}
          onCancel={() => setIsRemoveModalOpen(false)}
          onConfirm={handleRemoveField}
        />
      )}
    </>
  );
};

export default MenuInputBox;
