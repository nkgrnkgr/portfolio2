import { Box, Container, Tab, TabList, Tabs } from "@chakra-ui/react";

export const PageTab: React.FC = () => {
  return (
    <Box>
      <Container>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
        </Tabs>
      </Container>
    </Box>
  );
};
