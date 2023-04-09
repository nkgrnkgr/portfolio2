import { Box, Flex } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Flex p="4" alignContent="center" justifyContent="space-between">
      <Box>Nokogiri</Box>
      <Box>Github</Box>
    </Flex>
  );
};
