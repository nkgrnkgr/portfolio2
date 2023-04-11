import Chart from "chart.js/auto";
import { useEffect } from "react";

const CANVAS_ID = "CANVAS_ID";

export const LanguagesChart: React.FC<{
  chartDataList: ChartDataType[];
}> = ({ chartDataList }) => {
  useEffect(() => {
    const c = Chart.getChart(CANVAS_ID);
    if (c) {
      c.destroy();
    }

    new Chart(CANVAS_ID, {
      type: "doughnut",
      data: createChartData(chartDataList),
    });
  }, []);

  return <canvas id={CANVAS_ID} />;
};

export type ChartDataType = {
  label: string;
  backgroundColor: string;
  data: number;
};

// const CHART_DATA_LIST: ChartDataType[] = [
//   {
//     label: "TypeScript",
//     backgroundColor: "#2f74c0",
//     data: 3,
//   },
//   {
//     label: "JavaScript",
//     backgroundColor: "#F7DF1E",
//     data: 2,
//   },
//   {
//     label: "Kotlin",
//     backgroundColor: "#7B71E4",
//     data: 1,
//   },
// ];

const createChartData = (list: ChartDataType[]) => {
  const labels = list.map((item) => item.label);
  const data = list.map((item) => item.data);
  const backgroundColor = list.map((item) => item.backgroundColor);

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  };
};
