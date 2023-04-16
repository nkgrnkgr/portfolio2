import { Box, VStack } from "@chakra-ui/react";
import { Overlay } from "./features/OverLay";

type Props = {
  header: React.ReactNode;
  main: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ header, main }) => {
  return (
    <>
      <Box zIndex={1}>
        <Overlay />
      </Box>
      <VStack spacing={0}>
        <Box w="100%" zIndex={3}>
          {header}
        </Box>
        <Box w="100%" zIndex={2}>
          {main}
        </Box>
        <Box h="100px"></Box>
      </VStack>
    </>
  );
};
