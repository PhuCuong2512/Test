"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, FileTextIcon }  from "@radix-ui/react-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "@/components/custom-input"; // Assumed you have this component
import { TrendingUpIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [category, setCategory] = useState("Tất cả danh mục");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const router = useRouter();


  const handleSubmit = () => {
    // Your submit logic here
  };
  const handleFileTextIconClick = () => {
    router.push("/table");
  };

  const handleTrendingUpIconClick = () => {
    router.push("/chart");
  };

  return (
    <div className=" top-0 w-full h-20 z-[49] bg-white px-6 lg:px-4 flex  items-center shadow-md text-sm rounded">
      {/* Category Select */}
      <div className="w-[20%] text-orange-500 rounded">
        <Select onValueChange={setCategory} defaultValue="Tất cả danh mục">
          <SelectTrigger className="w-full border border-gray-300 ">
            <SelectValue placeholder="Tất cả danh mục" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tất cả danh mục">Tất cả danh mục</SelectItem>
            <SelectItem value="Danh mục 1">Danh mục 1</SelectItem>
            <SelectItem value="Danh mục 2">Danh mục 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range Picker */}
      <div className="flex items-center justify-center w-[20%]">
  <DatePicker
    selected={startDate}
    onChange={(dates: [Date | null, Date | null] | null) => {
      if (dates) {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }
    }}
    startDate={startDate ?? undefined}
    endDate={endDate ?? undefined}
    selectsRange
    customInput={<CustomInput />}
  />
</div>

      {/* Search Button */}
      <div className="w-[10%] flex justify-center">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded w-full" onClick={handleSubmit}>
        TRA CỨU
      </Button>
      </div>

      {/* Icons on the right */}
      <div className="flex gap-4 w-[50%] justify-end mr-4">
      <TrendingUpIcon className=" w-6 h-6 cursor-pointer" onClick={handleTrendingUpIconClick} />
      <FileTextIcon className="w-6 h-6 cursor-pointer text-orange-500" onClick={handleFileTextIconClick} />
      </div>
    </div>
  );
};

export default Header;
