import React from 'react';

interface DataItem {
  name: string;
  startDate: number;
  endDate: number;
  percentChange: number;
}

const data: DataItem[] = [
  { name: 'Danh mục A', startDate: 335, endDate: 40, percentChange: 30 },
  { name: 'Danh mục B', startDate: 120, endDate: 230.88, percentChange: 10 },
  { name: 'Danh mục C', startDate: 110.23, endDate: 120, percentChange: 2 },
];

function CreateTable() {
  return (
    <div className="overflow-x-auto rounded ">
      <table className="min-w-full border-collapse border border-gray-300 rounded ">
        <thead>
          <tr className="bg-[#6ECEB2] text-white rounded">
            <th className="border border-gray-300 px-4 py-2 ">Tên danh mục</th>
            <th className="border border-gray-300 px-4 py-2">Ngày bắt đầu</th>
            <th className="border border-gray-300 px-4 py-2">Ngày kết thúc</th>
            <th className="border border-gray-300 px-4 py-2">Tăng/Giảm (%)</th>
          </tr>
        </thead>
        <tbody className="text-center text-orange-500 rounded">
          {data.map((item) => (
            <tr key={item.name}>
              <td className="border border-gray-300 px-4 py-2 bg-[#0A3B32]">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2 bg-[#FFFFFF]">{item.startDate}</td>
              <td className="border border-gray-300 px-4 py-2 bg-[#FFFFFF]">{item.endDate}</td>
              <td className={`border border-gray-300 px-4 py-2 bg-[#FFFFFF] text-orange-500${item.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.percentChange}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateTable;