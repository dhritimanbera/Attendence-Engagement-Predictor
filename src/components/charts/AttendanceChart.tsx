import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AttendanceChartProps {
  studentName?: string;
}

const AttendanceChart = ({ studentName = 'Alex Johnson' }: AttendanceChartProps) => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'Attendance Rate',
        data: [95, 88, 92, 85, 78, 70, 65, 58],
        borderColor: 'hsl(0, 84%, 50%)',
        backgroundColor: 'hsl(0, 84%, 50%, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'hsl(0, 84%, 50%)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: 'Class Average',
        data: [92, 91, 89, 90, 88, 87, 89, 86],
        borderColor: 'hsl(214, 20%, 45%)',
        backgroundColor: 'hsl(214, 20%, 45%, 0.1)',
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${studentName} - Attendance Trend`,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        titleColor: 'hsl(214, 27%, 20%)',
        bodyColor: 'hsl(214, 20%, 45%)',
        borderColor: 'hsl(214, 20%, 88%)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          },
        },
        grid: {
          color: 'hsl(214, 20%, 88%)',
        },
      },
      x: {
        grid: {
          color: 'hsl(214, 20%, 88%)',
        },
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default AttendanceChart;