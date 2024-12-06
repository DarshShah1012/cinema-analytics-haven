import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", value: 2400 },
  { name: "Tue", value: 1398 },
  { name: "Wed", value: 9800 },
  { name: "Thu", value: 3908 },
  { name: "Fri", value: 4800 },
  { name: "Sat", value: 3800 },
  { name: "Sun", value: 4300 },
];

export const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#D1D5DB"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#D1D5DB"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1E293B',
            border: 'none',
            borderRadius: '8px',
            color: '#FFFFFF'
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FBBF24"
          strokeWidth={2}
          dot={{ fill: "#FBBF24" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};