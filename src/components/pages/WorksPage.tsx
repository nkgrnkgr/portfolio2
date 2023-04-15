import { Center, Heading } from "@chakra-ui/react";
import { Layout } from "../Layout";
import { Header } from "../features/Header";

export const WorksPage: React.FC = () => {
  return (
    <Layout
      header={<Header />}
      main={
        <Center mt={4}>
          <Heading>🚧 under construction 🚧</Heading>
        </Center>
      }
    />
  );
};
