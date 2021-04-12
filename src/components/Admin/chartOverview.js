import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export default function ChartOverview() {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext('2d');

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: 'Đơn hàng',
            data: [8, 5, 10, 20, 12, 8, 5, 10, 11, 3, 2, 3],
            borderColor: "rgba(59, 130, 246, 1)",
            tension: 0.4,
            yAxisID: 'y',
          },
          {
            label: 'Doanh thu',
            data: [1200000, 1900000, 300000, 500000, 200000, 300000, 1900000, 300000, 500000, 1200000, 1900000, 300000],
            borderColor: "rgba(236, 72, 153, 1)",
            tension: 0.4,
            yAxisID: 'y1',
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    });
  });
  return (
    <div className="chart w-full h-full">
      <h3 className="text-2xl pb-4">Số đơn & Doanh thu</h3>
      <canvas id="myChart" />
    </div>
  );
}

