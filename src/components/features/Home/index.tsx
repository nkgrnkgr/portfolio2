import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { Box, Container, Flex } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";
import { UserTimeline } from "../Timeline";
import { WelcomeMessage } from "../WelcomeMessage";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";

type Props = {
  githubLanguages: GithubLanguagesResponse;
};

export const Home: React.FC<Props> = ({ githubLanguages }) => {
  return (
    <Container maxWidth="900px" mt={6}>
      <Flex flexWrap="wrap" gap={4}>
        <Box height="425px" width="425px">
          <ContentWrapper background="black">
            <WelcomeMessage />
          </ContentWrapper>
        </Box>
        <Box height="425px" width="425px">
          <ContentWrapper>
            <Languages githubLanguages={githubLanguages} />
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
