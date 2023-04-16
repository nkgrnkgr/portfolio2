import { Nokogiri } from "@/components/shared/Nokogiri";
import {
  Box,
  Center,
  Flex,
  Icon,
  Link,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(3px)"
        borderBottom="1px solid #fff"
        position="fixed"
        w="100%"
        minH="72px"
      >
        <Flex
          w="100%"
          maxW="1200px"
          p={4}
          alignContent="center"
          justifyContent="space-between"
        >
          <LogoAndName />
          <PageLinks />
          <GithubLogo />
        </Flex>
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
  <Flex justifyContent="flex-start" alignItems="center" flex="1">
    <Image alt="logo" width={40} height={40} src="./logo-b.svg" />
    <Box
      display={{
        base: "none",
        sm: "block",
      }}
      ml={2}
      fontSize="xl"
    >
      <Nokogiri fontSize="xl" />
    </Box>
  </Flex>
);

const BoldText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text fontWeight="extrabold">{children}</Text>
);

const TABS: {
  label: string;
  icon: IconType;
  path: string;
}[] = [
  {
    label: "Home",
    icon: FaHome,
    path: "/",
  },
  {
    label: "Works",
    icon: FiPackage,
    path: "/works",
  },
];

const PageLinks: React.FC = () => {
  const pathname = useRouter().pathname;

  const getDefaultIndex = useCallback(() => {
    return TABS.findIndex((tab) => tab.path === pathname);
  }, [pathname]);

  return (
    <Flex justifyContent="center" alignContent="center" flex="1">
      <Tabs variant="unstyled" defaultIndex={getDefaultIndex()}>
        <TabList>
          {TABS.map((tab) => (
            <Tab
              key={tab.path}
              _selected={{
                color: "white",
                bg: "black",
                borderRadius: "10px",
              }}
            >
              <NextLink href={tab.path}>
                <Center>
                  <Icon mr={1} as={tab.icon} />
                  <BoldText>{tab.label}</BoldText>
                </Center>
              </NextLink>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

const GithubLogo: React.FC = () => (
  <Center flex="1" justifyContent="flex-end">
    <Link
      href="https://github.com/nkgrnkgr/portfolio2"
      target="_blank"
      rel="noopener noreferrer"
      textAlign="center"
    >
      <Image alt="logo" width={20} height={20} src="./github-mark.svg" />
    </Link>
  </Center>
);
