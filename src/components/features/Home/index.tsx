import { ContentWrapper } from "@/components/shared/ContentWrapper";
import { Container, Flex, VStack } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";
import { WelcomeMessage } from "../WelcomeMessage";

export const Home: React.FC = () => {
  return (
    <Container>
      <VStack>
        <Flex gap={1}>
          <ContentWrapper>
            <WelcomeMessage />
          </ContentWrapper>
          <ContentWrapper>
            <Languages />
          </ContentWrapper>
        </Flex>
        <ContentWrapper>
          <GithubGrassGraph />
        </ContentWrapper>
      </VStack>
    </Container>
  );
};
