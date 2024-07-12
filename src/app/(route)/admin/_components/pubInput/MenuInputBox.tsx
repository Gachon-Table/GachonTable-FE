import React, { useState, ChangeEvent, MouseEvent } from 'react';
import Image from 'next/image';
interface MenuItem {
  name: string;
  price: string;
}

interface MenuInputBoxProps {
  initialFields?: MenuItem[];
  maxFields?: number;
}

const MenuInputBox: React.FC<MenuInputBoxProps> = ({
  initialFields = [{ name: '', price: '' }],
  maxFields = 10,
}) => {
  const [fields, setFields] = useState<MenuItem[]>(initialFields);

  const handleAddField = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (fields.length < maxFields) {
      setFields([...fields, { name: '', price: '' }]);
    }
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...fields];
    values[index][event.target.name as keyof MenuItem] = event.target.value;
    setFields(values);
  };

  return (
    <form className="mx-auto my-3 flex h-[340px] max-w-md flex-col justify-between rounded-xl bg-white p-5">
      <div className="h-[280px] overflow-y-auto ">
        {fields.map((field, index) => (
          <div key={index} className="mb-4 flex flex-row">
            <div className="mb-1 flex w-full items-center justify-between space-x-2 overflow-hidden rounded-xl bg-[#EAEFFF] p-2 pr-4">
              <input
                type="text"
                name="name"
                placeholder="메뉴 이름"
                value={field.name}
                onChange={(e) => handleInputChange(index, e)}
                className="w-1/2 rounded-xl bg-[#EAEFFF] p-2 focus:outline-none"
              />
              <div className="flex w-1/3 items-center space-x-1">
                <input
                  type="text"
                  name="price"
                  placeholder="가격"
                  value={field.price}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full rounded-xl bg-[#EAEFFF] p-2 text-right focus:outline-none"
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
