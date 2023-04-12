import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { Box, Container, Flex } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";
import { UserTimeline } from "../Timeline";
import { WelcomeMessage } from "../WelcomeMessage";

export const Home: React.FC = () => {
  return (
    <Container mt={6}>
      <Flex gap={4} flexWrap="wrap" justifyContent="center">
        <Box flex={1}>
          <ContentWrapper background="black">
            <WelcomeMessage />
          </ContentWrapper>
        </Box>
        <Box flex={1}>
          <ContentWrapper>
            <Languages />
          </ContentWrapper>
        </Box>
      </Flex>
      <Box mt={4}>
        <ContentWrapper background="white">
          <GithubGrassGraph />
        </ContentWrapper>
      </Box>
      <Box mt={4}>
        <ContentWrapper>
          <UserTimeline timelineItems={data} />
        </ContentWrapper>
      </Box>
    </Container>
  );
};

const data = [
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
