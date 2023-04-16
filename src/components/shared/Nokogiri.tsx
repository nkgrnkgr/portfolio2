import { Heading } from "@chakra-ui/react";

type Props = {
  fontSize: string;
};

export const Nokogiri: React.FC<Props> = ({ fontSize }) => (
  <Heading as="h1" fontFamily="Helvetica" fontSize={fontSize}>
    Nokogiri
  </Heading>
);
