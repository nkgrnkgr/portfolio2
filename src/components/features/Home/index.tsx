import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { Box, Container, Flex } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";
import { WelcomeMessage } from "../WelcomeMessage";

export const Home: React.FC = () => {
  return (
    <Container mt={6}>
      <Flex gap={2} flexWrap="wrap" justifyContent="center">
        <Box flex={1}>
          <ContentWrapper>
            <WelcomeMessage />
          </ContentWrapper>
        </Box>
        <Box flex={1}>
          <ContentWrapper>
            <Languages />
          </ContentWrapper>
        </Box>
      </Flex>
      <Box mt={2}>
        <ContentWrapper>
          <GithubGrassGraph />
        </ContentWrapper>
      </Box>
    </Container>
  );
};
