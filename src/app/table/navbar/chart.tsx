// components/DataTable.tsx
"use client"
import { useState } from 'react';

interface DataItem {
  date: string;
  categoryA: number;
  categoryB: number;
  categoryC: number;
}

const data: DataItem[] = [
  { date: '10/08/2020', categoryA: 335.00, categoryB: 40.00, categoryC: 335.00 },
  { date: '31/07/2020', categoryA: 120.00, categoryB: 230.88, categoryC: 125.95 },
  { date: '21/07/2020', categoryA: 110.23, categoryB: 120.00, categoryC: 25.00 },
  { date: '11/07/2020', categoryA: 10.23, categoryB: 56.00, categoryC: 10.34 },
  { date: '01/07/2020', categoryA: 110.23, categoryB: 456.00, categoryC: 111.45 },
  // Add more data if needed
];

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <table className="w-full text-left border border-gray-200 ">
        <thead>
          <tr className="bg-teal-400 text-white">
            <th className="p-2 border border-gray-200">Ngày</th>
            <th className="p-2 border border-gray-200 text-center">Danh mục A</th>
            <th className="p-2 border border-gray-200 text-center">Danh mục B</th>
            <th className="p-2 border border-gray-200 text-center">Danh mục C</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <tr key={index} className="even:bg-white odd:bg-gray-50">
              <td className="p-2 border border-gray-200">{item.date}</td>
              <td className="p-2 border border-gray-200 text-center">{item.categoryA.toFixed(2)}</td>
              <td className="p-2 border border-gray-200 text-center">{item.categoryB.toFixed(2)}</td>
              <td className="p-2 border border-gray-200 text-center">{item.categoryC.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 border border-gray-200 rounded-l ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-white'
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-4 py-2  ${
              page === currentPage ? 'bg-orange-400 text-white' : 'bg-white'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`px-4 py-2 border border-gray-200 rounded-r ${
            currentPage === 5 ? 'bg-gray-300' : 'bg-white'
          }`}
          disabled={currentPage === 5}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DataTable;
