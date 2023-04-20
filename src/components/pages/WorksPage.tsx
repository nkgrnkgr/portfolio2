import { Center, Heading } from "@chakra-ui/react";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Meta } from "../features/Meta";

export const WorksPage: React.FC = () => {
  return (
    <>
      <Meta title="nkgr.dev | Home" description="Works" />
      <Layout
        header={<Header />}
        main={
          <Center mt={4}>
            <Heading>🚧 under construction 🚧</Heading>
          </Center>
        }
      />
    </>
  );
};
