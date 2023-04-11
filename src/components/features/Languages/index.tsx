import { fetcher } from "@/functions/fetcher";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import useSWR from "swr";
import { ChartDataType, LanguagesChart } from "./LanguagesChart";
import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";

export const Languages: React.FC = () => {
  const { data, isLoading, error } = useSWR<GithubLanguagesResponse>(
    "/api/github-languages",
    fetcher.get
  );

  if (error) return <Box>Error</Box>;

  return (
    <Box>
      <Skeleton isLoaded={!isLoading}>
        <Flex>
          <ContentWrapper>
            <LanguagesChart chartDataList={convert(data)} />
          </ContentWrapper>
        </Flex>
      </Skeleton>
    </Box>
  );
};

const KEY_COLOR_MAP: Record<string, string> = {
  TypeScript: "#2f74c0",
  JavaScript: "#F7DF1E",
  CSS: "#0091D5",
  Java: "#E61F24",
  Kotlin: "#7B71E4",
};

const convert = (responseData?: GithubLanguagesResponse): ChartDataType[] => {
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
