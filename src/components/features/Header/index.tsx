import { Nokogiri } from "@/components/shared/Nokogiri";
import {
  Box,
  Flex,
  Link,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <Flex
      width="100%"
      p="4"
      alignContent="center"
      justifyContent="space-between"
    >
      <LogoAndName />
      <PageLinks />
      <GithubLogo />
    </Flex>
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
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>
          <BoldText>Home</BoldText>
        </Tab>
        <Tab>
          <BoldText>Works</BoldText>
        </Tab>
        <Tab>
          <BoldText>Links</BoldText>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="4px" bg="black" />
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
