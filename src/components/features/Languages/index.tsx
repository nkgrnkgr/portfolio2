import { fetcher } from "@/functions/fetcher";
import { Box, Code, Skeleton } from "@chakra-ui/react";
import useSWR from "swr";

export const Languages: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    "/api/github-languages",
    fetcher.get
  );

  if (error) return <Box>Error</Box>;

  return (
    <Box w="400px" h="400px">
      <Skeleton isLoaded={!isLoading}>
        <Code>{JSON.stringify(data, null, 2)}</Code>
      </Skeleton>
    </Box>
  );
};
