import React, { ChangeEvent, MouseEvent } from 'react';
import Image from 'next/image';

interface MenuItem {
  menuName: string;
  oneLiner: string;
  price: string;
}

interface MenuInputBoxProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  maxFields?: number;
}

const MenuInputBox: React.FC<MenuInputBoxProps> = ({
  menuItems,
  setMenuItems,
  maxFields = 10,
}) => {
  const handleAddField = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (menuItems.length < maxFields) {
      setMenuItems([...menuItems, { menuName: '', price: '', oneLiner: '' }]);
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
    <form className="mx-auto my-3 flex h-96 max-w-md flex-col justify-between rounded-xl bg-white p-5">
      <div className="h-72 overflow-y-auto ">
        {menuItems.map((menu, index) => (
          <div key={index} className="mb-4 flex flex-row">
            <div className="mb-1 flex w-full items-center justify-between space-x-2 overflow-hidden rounded-xl bg-[#EAEFFF] p-2 pr-4">
              <div className="flex flex-col p-2">
                <input
                  type="text"
                  name="menuName"
                  placeholder="메뉴 이름"
                  value={menu.menuName}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-1/2 bg-[#EAEFFF] font-bold focus:outline-none"
                />
                <input
                  type="text"
                  name="oneLiner"
                  placeholder="한줄 소개"
                  value={menu.oneLiner}
                  onChange={(e) => handleInputChange(index, e)}
                  className=" bg-[#EAEFFF] text-xs focus:outline-none"
                />
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="text"
                  name="price"
                  placeholder="가격"
                  value={menu.price}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full bg-[#EAEFFF] p-2 text-right focus:outline-none"
                />
                <span className="whitespace-nowrap text-gray-600">원</span>
              </div>
              <div className="flex items-center pl-2">
                <Image
                  src="/images/delete-button.png"
                  className="h-3.5 w-3.5 cursor-pointer"
                  alt="Delete"
                  width={20}
                  height={20}
                  onClick={() => handleRemoveField(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-5 flex h-12 w-20 cursor-pointer items-center justify-center self-center rounded-xl bg-main-blue"
        onClick={handleAddField}
      >
        <div className="relative h-3.5 w-3.5">
          <Image
            src="/images/add-button-white.png"
            alt="Add Image"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

export default MenuInputBox;
