import { Box, Flex, Text } from "@chakra-ui/react";
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
        <Text fontSize="medium" sx={{ fontWeight: "bold", marginLeft: 2 }}>
          Nokogiri
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text fontSize="medium">Github</Text>
      </Box>
    </Flex>
  );
};
