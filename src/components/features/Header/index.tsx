import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <Flex
      p="4"
      bg="brand.100"
      alignContent="center"
      justifyContent="space-between"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image alt="logo" width={40} height={40} src="./logo-b.svg" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image alt="logo" width={40} height={40} src="./github-mark.svg" />
      </Box>
    </Flex>
  );
};
