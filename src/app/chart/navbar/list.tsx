import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const List: React.FC = () => {
  const categoryData = [
    { name: 'Danh mục A', value: 52, color: 'bg-orange-500' },
    { name: 'Danh mục B', value: -17, color: 'bg-emerald-500' },
    { name: 'Danh mục C', value: 17, color: 'bg-yellow-500' },
  ];

  const timeChanges = [
    { name: 'Danh mục A', change: '+5.87%' },
    { name: 'Danh mục B', change: '+10.3%' },
    { name: 'Danh mục C', change: '-2.3%' },
  ];

  return (
    <Card className="w-full bg-white shadow-lg">
      <CardHeader className="bg-emerald-400 text-white py-2 rounded">
        <CardTitle className="text-lg font-medium text-center">
          Thay đổi của giá trị danh mục
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 p-4 rounded">
        <div>
          <h3 className="text-sm font-medium mb-2">Từ lúc bắt đầu danh mục</h3>
          <div className="space-y-2 relative pb-4 w-full mx-auto">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center relative">
                <div className="w-[20%]">
                  <span className="text-sm">{category.name}</span>
                </div>
                <div className="w-[80%] h-4 bg-transparent relative">
                  <div
                    className={`h-full  ${category.color} absolute`}
                    style={{
                      width: `${Math.abs(category.value)}%`,
                      left: category.value < 0 ? `calc(46% - ${Math.abs(category.value)}%)` : 163,
                      transform: category.value < 0 ? 'translateX(-100%)' : 'translateX(0)',
                    }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="relative flex justify-between text-xs text-gray-500 w-full mt-2 pl-[100px] ">
              <span>-50</span>
              <span>-25</span>
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Thời gian</h3>
            <Select defaultValue="6thang">
              <SelectTrigger className="w-[140px] h-8 bg-white border-gray-300 text-orange-500">
                <SelectValue placeholder="Chọn thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6thang">6 Tháng qua</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            {timeChanges.map((change, index) => (
              <div key={index} className="flex justify-between items-center ">
                <span className="text-sm ">{change.name}</span>
                <span className={`text-sm font-medium text-black ${
                  change.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {change.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default List;