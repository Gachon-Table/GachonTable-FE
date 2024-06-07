import React, { useState, ChangeEvent, MouseEvent } from 'react';

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

  const handleAddField = (e: MouseEvent<HTMLButtonElement>) => {
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
    <form className="mx-auto my-5 h-[310px] max-w-md overflow-y-auto rounded-lg bg-white p-5 shadow-md">
      {fields.map((field, index) => (
        <div key={index} className="mb-4 flex flex-row">
          <div
            key={index}
            className="mb-1 flex items-center overflow-hidden rounded-lg border"
          >
            <input
              type="text"
              name="name"
              placeholder="메뉴 이름"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
              className={`${index === 0 ? 'w-2/5 p-4' : 'w-1/2 p-4'}`}
            />
            <input
              type="text"
              name="price"
              placeholder="가격"
              value={field.price}
              onChange={(e) => handleInputChange(index, e)}
              className={`${index === 0 ? 'w-3/5 p-4 pb-4 pl-5 pr-4 pt-4' : 'w-1/2 p-4'}`}
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              className="ml-2 flex h-[56px] w-1/5 items-center justify-center rounded-md bg-gray-500 text-sm text-white transition duration-300 hover:bg-gray-800"
              onClick={() => handleRemoveField(index)}
            >
              삭제
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="h-[56px] w-full rounded-md bg-gray-500 px-4 text-white transition duration-300 hover:bg-gray-800"
        onClick={handleAddField}
      >
        추가하기
      </button>
    </form>
  );
};

export default MenuInputBox;
