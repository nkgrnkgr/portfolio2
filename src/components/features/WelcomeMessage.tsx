import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { Nokogiri } from "../shared/Nokogiri";
import { ExternalLink } from "../shared/ExternalLink";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const WelcomeMessage: React.FC = () => (
  <Flex alignItems="center" justifyContent="center" flexDir="column">
    <Nokogiri />
    <Text>Web Developer 👨🏻‍💻</Text>
    <Text>TypeScript / React / Kotlin / Java</Text>
    <HStack>
      <ExternalLink href={"https://github.com/nkgrnkgr"}>
        <Icon as={FaGithub} />
      </ExternalLink>
      <ExternalLink href={"https://twitter.com/nkgrnkgr"}>
        <Icon as={FaTwitter} />
      </ExternalLink>
    </HStack>
  </Flex>
);
