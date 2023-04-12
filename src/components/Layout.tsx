import { Box, VStack } from "@chakra-ui/react";

type Props = {
  header: React.ReactNode;
  main: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ header, main }) => {
  return (
    <VStack spacing={0}>
      <Box w="100%">{header}</Box>
      <Box w="100%">{main}</Box>
    </VStack>
  );
};
