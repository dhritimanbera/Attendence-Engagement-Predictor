import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface EngagementChartProps {
  studentName?: string;
}

const EngagementChart = ({ studentName = 'Alex Johnson' }: EngagementChartProps) => {
  const data = {
    labels: ['Participation', 'Assignments', 'Class Interaction', 'Peer Collaboration', 'Digital Engagement'],
    datasets: [
      {
        label: 'Student Score',
        data: [45, 60, 35, 50, 40],
        backgroundColor: [
          'hsl(0, 84%, 50%, 0.8)',
          'hsl(38, 92%, 50%, 0.8)', 
          'hsl(0, 84%, 50%, 0.8)',
          'hsl(38, 92%, 50%, 0.8)',
          'hsl(0, 84%, 50%, 0.8)',
        ],
        borderColor: [
          'hsl(0, 84%, 50%)',
          'hsl(38, 92%, 50%)', 
          'hsl(0, 84%, 50%)',
          'hsl(38, 92%, 50%)',
          'hsl(0, 84%, 50%)',
        ],
        borderWidth: 2,
      },
      {
        label: 'Class Average',
        data: [78, 82, 75, 80, 77],
        backgroundColor: 'hsl(214, 20%, 45%, 0.3)',
        borderColor: 'hsl(214, 20%, 45%)',
        borderWidth: 2,
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
        text: `${studentName} - Engagement Metrics`,
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
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default EngagementChart;