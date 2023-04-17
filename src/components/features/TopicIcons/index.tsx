import { Box, Img } from "@chakra-ui/react";

export const TopicIcons = () => {
  return (
    <Box position="relative" w="400px" h="400px">
      <Img
        position="absolute"
        left="100px"
        top="100px"
        w="150px"
        src="/nokogiri.svg"
      />
      <Box position="relative">
        <Img w="100px" src="/kotlin.svg" left="0" />
        <Img w="100px" src="/java.svg" />
        <Img w="100px" src="/js.svg" />
        <Img w="100px" src="/next.svg" />
        <Img w="100px" src="/ts.svg" />
        <Img w="100px" src="/react.svg" />
      </Box>
    </Box>
  );
};
