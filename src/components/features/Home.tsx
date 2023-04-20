import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Box, Center, Container, Img, SimpleGrid } from "@chakra-ui/react";
import { GithubGrassGraph } from "./GithubGrassGraph";
import { Languages } from "./Languages";
import { UserTimeline } from "./UserTimeline";
import { WelcomeMessage } from "./WelcomeMessage";

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
      <SimpleGrid minChildWidth="300px" gap={4} mb={4}>
        <Box minH="400px">
          <WelcomeMessage />
        </Box>
        <Box minH="400px">
          <Img src="/icons.svg" alt="Github Grass Graph" />
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="300px" gap={4} mb={4}>
        <Wrapper>
          <Box p={10}>
            <Languages githubLanguages={githubLanguages} />
          </Box>
        </Wrapper>
        <Wrapper>
          <GithubGrassGraph />
        </Wrapper>
      </SimpleGrid>
      <SimpleGrid minChildWidth="300px" gap={4}>
        <Wrapper>
          <UserTimeline timelineContents={timelineContents} />
        </Wrapper>
      </SimpleGrid>
    </Container>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Center
      p={2}
      background="rgba(255,255,255, 0.2)"
      boxShadow="0 2rem 5rem -1rem rgba(0,16,36,9%), inset 0 1px rgba(255,255,255,.6)"
      backdropFilter="blur(4px)"
      borderRadius={10}
    >
      {children}
    </Center>
  );
};
