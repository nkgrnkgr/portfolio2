import { fetcher } from "@/functions/fetcher";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { Box, Skeleton } from "@chakra-ui/react";
import useSWR from "swr";
import {
  LanguagesChart,
  convertResponseToChartDataList,
} from "./LanguagesChart";

export const Languages: React.FC = () => {
  const { data, isLoading, error } = useSWR<GithubLanguagesResponse>(
    "/api/github-languages",
    fetcher.get
  );

  if (error) return <Box>Error</Box>;

  return (
    <Skeleton isLoaded={!isLoading}>
      <LanguagesChart chartDataList={convertResponseToChartDataList(data)} />
    </Skeleton>
  );
};
