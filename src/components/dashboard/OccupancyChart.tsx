import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Screen 1", value: 85 },
  { name: "Screen 2", value: 45 },
  { name: "Screen 3", value: 65 },
  { name: "Screen 4", value: 90 },
  { name: "Screen 5", value: 72 },
  { name: "Screen 6", value: 58 },
];

export const OccupancyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#4CAF50"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};