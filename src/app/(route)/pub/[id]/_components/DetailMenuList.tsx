import React from 'react';

interface MenuItem {
  menuName: string;
  price: number;
  oneLiner: string;
  thumbnail: string;
}

interface DetailMenuListProps {
  menu: MenuItem[];
}

const DetailMenuList: React.FC<DetailMenuListProps> = ({ menu }) => {
  return (
    <div className="m-4 mt-6">
      <div className="px-2 text-gy-400 font-h3">메뉴</div>
      <div className="mb-28 flex w-full flex-col items-start justify-center px-2">
        <div className="flex w-full flex-col gap-2 py-4">
          {menu.length === 0 ? (
            <p className="text-center text-gray-600">
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
                    <div className="mb-1 flex items-center">
                      <p className="text-gy-900 font-h4">{menuItem.menuName}</p>
                      {(index === 0 || index === 1) && (
                        <p className="ml-2 rounded-[32px] bg-yellow-200 px-2 py-1 text-yellow-400 font-c2-medium">
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

                  {(index === 0 || index === 1) && (
                    <div className="flex-shrink-0">
                      <a
                        href={menuItem.thumbnail}
                        target="_blank"
                        className="block"
                      >
                        <img
                          src={menuItem.thumbnail || '/images/place.png'}
                          className="h-[82px] w-[82px] rounded-md object-cover"
                          alt={`${menuItem.menuName}`}
                        />
                      </a>
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
