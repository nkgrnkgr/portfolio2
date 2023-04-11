import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { Nokogiri } from "../shared/Nokogiri";
import { ExternalLink } from "../shared/ExternalLink";
import { FaGithub, FaSpeakerDeck, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

export const WelcomeMessage: React.FC = () => (
  <Flex
    fontSize="2xl"
    alignItems="center"
    justifyContent="center"
    flexDir="column"
    gap={2}
  >
    <Nokogiri />
    <Text>Web Developer 👨🏻‍💻</Text>
    <Text align="center" paddingRight="5" paddingLeft="5">
      TypeScript / React / Kotlin / Java
    </Text>
    <HStack>
      <ExternalLink href={"https://github.com/nkgrnkgr"}>
        <Icon as={FaGithub} />
      </ExternalLink>
      <ExternalLink href={"https://twitter.com/nkgrnkgr"}>
        <Icon as={FaTwitter} />
      </ExternalLink>
      <ExternalLink href={"https://speakerdeck.com/undefined_name"}>
        <Icon as={FaSpeakerDeck} />
      </ExternalLink>
      <ExternalLink href={"https://zenn.dev/nokogiri"}>
        <Icon as={SiZenn} />
      </ExternalLink>
    </HStack>
  </Flex>
);
