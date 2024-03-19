/* eslint-disable react/prop-types */

import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  // Process data to extract category labels and amounts
  const labels = data.map((item) => item.category);
  const amounts = data.map((item) => item.amount);

  // Define chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: amounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          // Add more colors as needed
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
