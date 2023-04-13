import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Box, Container, Flex } from "@chakra-ui/react";
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
          <UserTimeline timelineContents={timelineContents} />
        </ContentWrapper>
      </Box>
    </Container>
  );
};
