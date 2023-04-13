import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { Box, Heading } from "@chakra-ui/react";
import {
  LanguagesChart,
  convertResponseToChartDataList,
} from "./LanguagesChart";

type Props = {
  githubLanguages: GithubLanguagesResponse;
};

export const Languages: React.FC<Props> = ({ githubLanguages }) => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={2} textAlign="center">
        Languages 🛠️
      </Heading>
      <LanguagesChart
        chartDataList={convertResponseToChartDataList(githubLanguages)}
      />
    </Box>
  );
};
