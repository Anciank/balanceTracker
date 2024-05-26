"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Record, formatDate } from "@/services/definitions";

interface Props {
  data: Record[];
}

const ChartComponent: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx && data.length > 0) {
      // Destroy the previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart instance
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.reverse().map((item) => formatDate(item.time)
          ),
          datasets: [
            {
              label: "Amount",
              data: data.map((item) => item.amountInCents),
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
            },
          ],
        },
      });
    }

    // Cleanup function to destroy the chart instance when the component unmounts or before re-creating
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  return (
    <div className="relative chartContainer">
      <canvas ref={canvasRef} id="chart" />
    </div>
  );
};

export default ChartComponent;
