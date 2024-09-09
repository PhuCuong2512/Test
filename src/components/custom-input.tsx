import { CalendarIcon } from '@radix-ui/react-icons';
import React from 'react';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onClick }) => (
  <button className="flex items-center justify-between w-full border border-gray-300 p-2 bg-white rounded cursor-pointer hover:bg-gray-100" onClick={onClick}>
    <span className="ml-2 text-orange-500">{value || 'Chọn ngày'}</span>
    <CalendarIcon className="ml-2 " />
  </button>
);

export default CustomInput;
