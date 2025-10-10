import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-gray-500">No data available</p>;

  return (
    <div className=" w-full h-[320px] p-2">
      <h1 className="text-xl font-bold my-4">Ratings</h1>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" tick={{ fontSize: 12 }}></XAxis>

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              width={90}
            ></YAxis>

            <Tooltip></Tooltip>

            <Bar dataKey="count" fill="#F59E0B" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
