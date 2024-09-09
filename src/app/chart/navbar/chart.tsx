"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";

interface DataPoint {
  date: string;
  'Danh mục A': number;
  'Danh mục B': number;
  'Danh mục C': number;
}

const generateData = (): DataPoint[] => {
  const startDate = new Date('2020-07-01');
  const endDate = new Date('2020-08-10');
  const data: DataPoint[] = [];

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    data.push({
      date: d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      'Danh mục A': Math.round(200 + Math.random() * 200),
      'Danh mục B': Math.round(150 + Math.random() * 100),
      'Danh mục C': Math.round(150 + Math.random() * 100),
    });
  }

  return data;
};

const data = generateData();

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-md">
        <p className="font-bold text-sm">Ngày: {label}</p>
        <p className="text-orange-500">Giá trị: {payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default function MyChart() {
  return (
    <Card className="w-full mt-[40px]">
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              ticks={['01/07/2020', '11/07/2020', '21/07/2020', '31/07/2020', '10/08/2020']}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend align="right" verticalAlign="top" height={30} fontFamily="bold"/>
            <Line type="monotone" dataKey="Danh mục A" stroke="#ff7300" legendType="square" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Danh mục B" stroke="#4ade80" legendType="square"/>
            <Line type="monotone" dataKey="Danh mục C" stroke="#facc15" legendType="square"/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}