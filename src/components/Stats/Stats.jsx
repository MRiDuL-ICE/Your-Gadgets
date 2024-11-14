import React from "react";
import { Helmet } from "react-helmet";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Scatter,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const data = [
    { name: "Product A", price: 4000, rating: 4.2 },
    { name: "Product B", price: 3000, rating: 3.8 },
    { name: "Product C", price: 2000, rating: 4.5 },
    { name: "Product D", price: 2780, rating: 4.0 },
    { name: "Product E", price: 1890, rating: 4.7 },
  ];

  return (
    <div className="my-20">
        <Helmet>
            <title>{'Your Gadget | Statistics'}</title>
        </Helmet>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            fill="#F3445A"
            stroke="#F3445A"
            activeDot={{ r: 8 }}
          />
          <Bar dataKey="price" barSize={20} fill="#F3445A" />
          <Scatter dataKey="rating" fill="blue" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
