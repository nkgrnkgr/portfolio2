import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGithub, FaSpeakerDeck, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { ExternalLink } from "../shared/ExternalLink";
import { Nokogiri } from "../shared/Nokogiri";

export const WelcomeMessage: React.FC = () => (
  <Center height="100%" fontSize="2xl" flexDir="column" gap={2} color="black">
    <Nokogiri fontSize="4xl" />
    <Text>Web Developer</Text>
    <HStack>
      <ExternalLink href={"https://github.com/nkgrnkgr"}>
        <Icon as={FaGithub} />
      </ExternalLink>
      <ExternalLink href={"https://twitter.com/nkgrnkgr"}>
        <Icon color="#1D9BF0" as={FaTwitter} />
      </ExternalLink>
      <ExternalLink href={"https://speakerdeck.com/undefined_name"}>
        <Icon color="#009287" as={FaSpeakerDeck} />
      </ExternalLink>
      <ExternalLink href={"https://zenn.dev/nokogiri"}>
        <Icon color="#3EA8FF" as={SiZenn} />
      </ExternalLink>
    </HStack>
  </Center>
);
