import React, { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { OverviewContext } from 'presentation/context/store/getOverview';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sales and Orders over time',
    },
  },
};
const OverviewDashboard: React.FC = () => {
  const { overview, labels } = useContext(OverviewContext);
  const [data, setData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (overview.length > 0 && labels.length > 0) {
      setData({
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map((_, index) => overview[index].decrease),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Restock',
            data: labels.map((_, index) => overview[index].increase),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    }
  }, [overview, labels]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      {overview.length > 0 && labels.length > 0 && (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default OverviewDashboard;
