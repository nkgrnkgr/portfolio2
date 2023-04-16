import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Box, Container, Img, SimpleGrid } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";
import { UserTimeline } from "../UserTimeline";
import { WelcomeMessage } from "../WelcomeMessage";

type Props = {
  githubLanguages: GithubLanguagesResponse;
  timelineContents: TimelineContent[];
};

export const Home: React.FC<Props> = ({
  githubLanguages,
  timelineContents,
}) => {
  return (
    <Container maxWidth="1200px" mt={6}>
      <SimpleGrid minChildWidth="300px">
        <Box minH="400px">
          <WelcomeMessage />
        </Box>
        <Box minH="400px">
          <Img src="/icons.svg" alt="Github Grass Graph" />
        </Box>
      </SimpleGrid>
      <Box mt={4}>
        <ContentWrapper background="transparent">
          <Languages githubLanguages={githubLanguages} />
        </ContentWrapper>
      </Box>
      <Box mt={4}>
        <ContentWrapper background="white">
          <GithubGrassGraph />
        </ContentWrapper>
      </Box>
      <Box mt={4}>
        <ContentWrapper>
          <UserTimeline timelineContents={timelineContents} />
        </ContentWrapper>
      </Box>
    </Container>
  );
};
