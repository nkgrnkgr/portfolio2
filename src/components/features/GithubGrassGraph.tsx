import { Box, Heading, Img } from "@chakra-ui/react";

export const GithubGrassGraph: React.FC = () => (
  <Box>
    <Heading as="h2" mb={2}>
      Contribution Graph 📊
    </Heading>
    <Img
      src="https://grass-graph.appspot.com/images/nkgrnkgr.png?background=none"
      alt="Github Grass Graph"
    />
  </Box>
);
