import { Nokogiri } from "@/components/shared/Nokogiri";
import {
  Box,
  Flex,
  Icon,
  Link,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <>
      <Flex
        position="fixed"
        w="100%"
        h="72px"
        p="4"
        alignContent="center"
        justifyContent="space-between"
        bgColor="white"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
      >
        <LogoAndName />
        <PageLinks />
        <GithubLogo />
      </Flex>
      <Box
        sx={{
          height: "72px",
        }}
      ></Box>
    </>
  );
};

const LogoAndName: React.FC = () => (
  <Flex justifyContent="flex-start" alignContent="center" flex="1">
    <Image alt="logo" width={40} height={40} src="./logo-b.svg" />
    <Box
      display={{
        base: "none",
        sm: "block",
      }}
      ml={2}
      fontSize="2xl"
    >
      <Nokogiri />
    </Box>
  </Flex>
);

const BoldText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text fontWeight="extrabold">{children}</Text>
);

const PageLinks: React.FC = () => (
  <Flex justifyContent="center" alignContent="center" flex="1">
    <Tabs variant="unstyled">
      <TabList>
        <Tab
          _selected={{
            color: "white",
            bg: "black",
            borderRadius: "10px",
          }}
        >
          <Icon mr={1} as={FaHome} />
          <BoldText>Home</BoldText>
        </Tab>
        <Tab
          _selected={{
            color: "white",
            bg: "black",
            borderRadius: "10px",
          }}
        >
          <Icon mr={1} as={FiPackage} />
          <BoldText>Works</BoldText>
        </Tab>
      </TabList>
    </Tabs>
  </Flex>
);

const GithubLogo: React.FC = () => (
  <Flex justifyContent="flex-end" alignContent="center" flex="1">
    <Link
      href="https://github.com/nkgrnkgr/portfolio2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image alt="logo" width={20} height={20} src="./github-mark.svg" />
    </Link>
  </Flex>
);
