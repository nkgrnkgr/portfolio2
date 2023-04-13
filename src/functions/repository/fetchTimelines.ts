import { Timeline } from "@/types/Timeline";

const TIMELINES: Timeline[] = [
  {
    date: "2023-01-01",
    title: "ほげ",
    content: "AAA",
  },
  {
    date: "2023-01-02",
    title: "Fuga",
    content: "BBB",
  },
  {
    date: "2022-01-01",
    title: "Piyo",
    content: "CCC",
  },
  {
    date: "2021-02-01",
    title: "Rai",
    content: "Lue",
  },
];

export const fetchTimelines = async () => {
  return TIMELINES;
};
