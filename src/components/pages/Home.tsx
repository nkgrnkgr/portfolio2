import { Layout } from "../Layout";
import { ContentsSwitcher } from "../features/ContentsSwitcher";
import { Header } from "../features/Header";

export const Home: React.FC = () => {
  return <Layout header={<Header />} main={<ContentsSwitcher />} />;
};
