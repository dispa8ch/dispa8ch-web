import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Monthly Orders",
      data: [
        // 6000, 5300, 8000, 5000, 6700, 8000, 1000, 7500, 8200, 9100, 6100, 4000,
      ],
      borderColor: "#007FDC",
      backgroundColor: "#007FDC",
      borderWidth: 6,
      tension: 0.5, // Makes the line curved
    },
  ],
};

const DashboardChart = () => {
  return <Line data={lineChartData} />;
};

export default DashboardChart;
