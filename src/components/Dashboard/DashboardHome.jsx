import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useGetAllDonatesPostQuery } from "../../redux/api/baseApi";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF1955",
  "#7D3C98",
  "#F39C12",
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#9B59B6",
  "#E74C3C",
  "#34495E",
  "#95A5A6",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#F1C40F",
  "#D35400",
  "#C0392B",
  "#BDC3C7",
  "#7F8C8D",
];

const DashboardHome = () => {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useGetAllDonatesPostQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (!chartData) return <div>No data available</div>;

  const pieChartData = chartData?.map((data) => ({
    name: data?.category,
    value: parseFloat(data?.amount),
  }));
  console.log("Pie Chart Data:", pieChartData);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={800}>
      <PieChart>
        <Legend />
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={230}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardHome;
