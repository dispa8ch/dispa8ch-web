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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Weekly Steps",
    },
  },
};

const lineChartData = {
  labels: [
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "July 2024",
    "Aug 2024",
    "Sepr 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
  ],

  datasets: [
    // {
    //   label: "Steps By Emma",
    //   data: [3000, 5000, 4500, 6000, 7000, 9000, 2000],
    //   borderColor: "blue",
    //   backgroundColor: "rgba(0, 0, 255, 0.2)",
    //   tension: 0.4, // Adjust this for curved lines
    // },
    {
      label: "Steps By Joan",
      data: [
        6000, 5300, 8000, 5000, 6700, 8000, 10000, 4000, 6000, 5030, 8000,
        10000,
      ],
      borderColor: " rgb(0,127,220) ",
      backgroundColor: " rgb(0,127,220) ",
      tension: 0.4, // Adjust this for curved lines
      borderWidth: 6,
    },
  ],
};

const DashboardChart = () => {
  return <Line data={lineChartData} options={options} />;
};

export default DashboardChart;
