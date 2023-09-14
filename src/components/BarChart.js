import React from "react";
import {
  ResponsiveContainer,
  BarChart as ReChartsBarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReChartsBarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar type="monotone" dataKey="count" stroke="#1e3a8a" fill="#3b82f6" />
      </ReChartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
