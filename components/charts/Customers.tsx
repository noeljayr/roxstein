"use client";

import NumberFlow from "@number-flow/react";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  day: string;
  customers: number;
}

const data: DataPoint[] = [
  { day: "Mon", customers: 1700 },
  { day: "Tue", customers: 1500 },
  { day: "Wed", customers: 2000 },
  { day: "Thur", customers: 1700 },
  { day: "Fri", customers: 2500 },
  { day: "Sat", customers: 1900 },
  { day: "Sun", customers: 3300 },
];

const Customers: React.FC = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(15.12);
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="w-[18rem] h-[13rem]">
      {/* Header with title and percentage change */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 font-bold font-p-2">
          Customers gained
        </span>
        <span className="text-[#41BF6D] font-p-4 px-2 py-1 font-semibold ml-auto border-[1px] border-[rgba(65,191,109,0.15)] rounded-4xl bg-[rgba(65,191,109,0.15)]">
          +<NumberFlow style={{ color: "#41BF6D" }} value={value} />%
        </span>
      </div>

      {/* Responsive Recharts AreaChart */}
      <ResponsiveContainer
        width="110%"
        height="90%"
        style={{ position: "relative", left: "-1.5rem" }}
      >
        <AreaChart data={data}>
          {/* Define blue gradient for the area fill */}
          <defs>
            <linearGradient
              strokeLinecap="round"
              id="colorCustomers"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor="#4B7AD4" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#4B7AD4" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* X-axis: weekdays */}
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          {/* Y-axis: 1.0K to 3.5K */}
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[1000, 3500]}
            ticks={[1000, 1500, 2000, 2500, 3000, 3500]}
            tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
          />
          {/* Horizontal grid lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="" />
          {/* Area (smooth line with gradient fill) */}
          <Area
            strokeLinecap="round"
            type="monotone"
            dataKey="customers"
            stroke="#4B7AD4"
            strokeWidth={2}
            fill="url(#colorCustomers)"
            fillOpacity={1}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Customers;
