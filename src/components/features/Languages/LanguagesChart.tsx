import { GithubLanguagesResponse } from "@/types/GithubLanguages";
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
      options: {
        color: "#fff",
      },
      data: createChartData(chartDataList),
    });
  }, [chartDataList]);

  return <canvas id={CANVAS_ID} />;
};

export type ChartDataType = {
  label: string;
  backgroundColor: string;
  data: number;
};

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

const KEY_COLOR_MAP: Record<string, string> = {
  TypeScript: "#2f74c0",
  JavaScript: "#F7DF1E",
  CSS: "#563d7c",
  Java: "#b07219",
  Kotlin: "#A97BFF",
};

export const convertResponseToChartDataList = (
  responseData?: GithubLanguagesResponse
): ChartDataType[] => {
  if (!responseData) return [];
  return Object.entries(responseData)
    .filter(([key]) => KEY_COLOR_MAP[key] !== undefined)
    .map(([key, value]) => {
      return {
        label: key,
        backgroundColor: KEY_COLOR_MAP[key],
        data: value,
      };
    });
};
