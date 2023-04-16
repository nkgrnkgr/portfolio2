import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Box, Container } from "@chakra-ui/react";
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
      <Box height="500px" mt={4}>
        <ContentWrapper background="white">
          <WelcomeMessage />
        </ContentWrapper>
      </Box>
      <Box mt={4}>
        <ContentWrapper>
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
