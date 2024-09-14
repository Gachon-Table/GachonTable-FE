import { PageHeader } from '@/app/common/PageHeader';
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
        <PageHeader isDetailPage={true} />
      </div>
    </div>
  );
};

export default DetailImage;
