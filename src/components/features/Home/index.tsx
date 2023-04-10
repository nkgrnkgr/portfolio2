import { Container } from "@chakra-ui/react";
import { GithubGrassGraph } from "../GithubGrassGraph";
import { Languages } from "../Languages";

export const Home: React.FC = () => {
  return (
    <Container>
      <Languages />
      <GithubGrassGraph />
    </Container>
  );
};
