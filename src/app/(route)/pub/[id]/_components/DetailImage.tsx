import { PageHeader } from '@/app/common/PageHeader';
import { BackButtonWT } from 'public';
import React, { useEffect, useState } from 'react';

interface DetailImageProps {
  thumbnails: string[];
}

const DetailImage: React.FC<DetailImageProps> = ({ thumbnails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
              <img
                key={index}
                src={thumbnail}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0 object-cover"
              />
            ))
          ) : (
            <img
              src="/images/place.png"
              alt="Place"
              className="w-full flex-shrink-0 object-cover"
            />
          )}
        </div>
        <div onClick={handleHeaderClick} className="relative z-10">
          <PageHeader icon={<BackButtonWT />} isDetailPage={true} />
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
      {thumbnails.length > 0 && (
        <a
          href={thumbnails[currentImageIndex]}
          target="_blank"
          className="absolute inset-0 z-0"
        ></a>
      )}
    </div>
  );
};

export default DetailImage;
