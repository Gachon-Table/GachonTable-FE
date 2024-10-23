import React, { useState } from 'react';
import { BackButtonreverse } from 'public';
import Modal from '@/app/common/Modal';
import Image from 'next/image';

interface MenuItem {
  menuName: string;
  price: number;
  oneLiner: string;
  thumbnail: string;
}

interface DetailMenuListProps {
  menu: MenuItem[];
  menuUrl: string;
}

const DetailMenuList: React.FC<DetailMenuListProps> = ({ menu, menuUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenModal = (menuUrl: string) => {
    setSelectedImage(menuUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="m-4 mt-6">
      <div className="flex items-center justify-between">
        <div className="px-2 text-gy-400 font-h3">메뉴</div>
        <div
          className="mr-2 flex cursor-pointer flex-row items-center justify-center text-gy-600 font-b2-normal-medium"
          onClick={() => handleOpenModal(menuUrl)}
        >
          메뉴판 이미지로 보기
          <BackButtonreverse />
        </div>
      </div>

      {/* 메뉴판 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="메뉴판 이미지"
            width={500}
            height={500}
            className="h-auto max-w-full"
          />
        )}
      </Modal>

      <div className="mb-28 flex w-full flex-col items-start justify-center px-2">
        <div className="flex w-full flex-col gap-4 py-4">
          {menu.length === 0 ? (
            <p className="mt-[107px] text-center text-gy-300 font-b1-normal-medium">
              현재 등록되어있는 메뉴가 없습니다
            </p>
          ) : (
            menu.map((menuItem, index) => (
              <div
                key={menuItem.menuName}
                className={`pb-4 ${
                  index !== menu.length - 1 ? 'border-b border-gy-100' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-wrap items-center">
                      <p className="mr-2 text-gy-900 font-h4 ">
                        {menuItem.menuName}
                      </p>
                      {index < 5 && (
                        <p className="rounded-[32px] bg-yellow-200 px-2 py-1 text-yellow-400 font-c2-medium">
                          대표메뉴
                        </p>
                      )}
                    </div>
                    <p className="mb-1 text-gy-600 font-b1-normal-medium">
                      {menuItem.oneLiner}
                    </p>
                    <p className="text-gy-900 font-b1-normal-semibold">
                      {menuItem.price}
                    </p>
                  </div>

                  {index < 5 && (
                    <div
                      className="flex-shrink-0 cursor-pointer"
                      onClick={() => handleOpenModal(menuItem.thumbnail)}
                    >
                      <Image
                        src={menuItem.thumbnail || '/images/place.png'}
                        width={82}
                        height={82}
                        sizes="82"
                        priority
                        loading="eager"
                        className="h-[82px] w-[82px] rounded-md object-cover"
                        alt={`${menuItem.menuName}`}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailMenuList;
