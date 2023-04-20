import { Center, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaSpeakerDeck, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { ExternalLink } from "../shared/ExternalLink";

export const Footer: React.FC = () => {
  return (
    <Center
      backgroundColor="rgba(255, 255, 255, 0.3)"
      backdropFilter="blur(3px)"
      borderTop="1px solid #E2E8F0"
      w="100%"
      h="200px"
    >
      <HStack gap={2}>
        <ExternalLink href={"https://github.com/nkgrnkgr"}>
          <Icon fontSize={36} color="gray.700" as={FaGithub} />
        </ExternalLink>
        <ExternalLink href={"https://twitter.com/nkgrnkgr"}>
          <Icon fontSize={36} color="gray.700" as={FaTwitter} />
        </ExternalLink>
        <ExternalLink href={"https://speakerdeck.com/undefined_name"}>
          <Icon fontSize={36} color="gray.700" as={FaSpeakerDeck} />
        </ExternalLink>
        <ExternalLink href={"https://zenn.dev/nokogiri"}>
          <Icon fontSize={36} color="gray.700" as={SiZenn} />
        </ExternalLink>
      </HStack>
    </Center>
  );
};
