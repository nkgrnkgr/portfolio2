import { Flex, Text } from "@chakra-ui/react";
import { Nokogiri } from "../shared/Nokogiri";

export const WelcomeMessage: React.FC = () => (
  <Flex alignItems="center" justifyContent="center" flexDir="column">
    <Nokogiri />
    <Text>Web Developer 👨🏻‍💻</Text>
    <Text>TypeScript / React / Kotlin / Java</Text>
  </Flex>
);
