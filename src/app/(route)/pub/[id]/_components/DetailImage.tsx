import React, { useEffect, useState } from 'react';
import { PageHeader } from '@/app/common/PageHeader';
import { BackButtonWT } from 'public';
import Modal from '@/app/common/Modal';
import Image from 'next/image';

interface DetailImageProps {
  thumbnails: string[];
  instagramUrl: string;
}

const DetailImage: React.FC<DetailImageProps> = ({
  thumbnails,
  instagramUrl,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (thumbnails.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === thumbnails.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [thumbnails]);

  const handleHeaderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative h-48 w-full">
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {thumbnails.length > 0 ? (
            thumbnails.map((thumbnail, index) => (
              <div key={index} className="relative w-full flex-shrink-0">
                <Image
                  src={thumbnail}
                  alt={`Slide ${index}`}
                  fill
                  objectFit="cover"
                  onClick={() => openImageModal(thumbnail, index)}
                />
              </div>
            ))
          ) : (
            <div className="relative w-full flex-shrink-0">
              <Image
                src="/images/place.png"
                alt="Place"
                fill
                objectFit="cover"
              />
            </div>
          )}
        </div>

        <div onClick={handleHeaderClick} className="relative z-10">
          <PageHeader icon={<BackButtonWT />} isDetailPage={true} />
        </div>
      </div>

      <div className="absolute bottom-6 right-5 z-10">
        <div className="shadow-custom flex items-center justify-center rounded-[32px] border border-gy-200 bg-wt px-[10px] py-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-center text-blue-400 font-c1-semibold"
          >
            인스타 바로가기
          </a>
        </div>
      </div>

      {thumbnails.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {thumbnails.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentImageIndex ? 'bg-wt' : 'bg-wt opacity-70'
              }`}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentIndex={modalImageIndex}
        totalItems={thumbnails.length}
      >
        {selectedImage && (
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Full view"
              layout="responsive"
              width={800}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DetailImage;
