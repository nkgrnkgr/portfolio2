import { Box, Heading, Img } from "@chakra-ui/react";

export const GithubGrassGraph: React.FC = () => (
  <Box p={4}>
    <Heading as="h2" mb={2}>
      Contributions 📊
    </Heading>
    <Img
      src="https://grass-graph.appspot.com/images/nkgrnkgr.png?background=none"
      alt="Github Grass Graph"
    />
  </Box>
);
