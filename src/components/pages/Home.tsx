import { Layout } from "../Layout";
import { ContentsSwitcher } from "../features/ContentsSwitcher";
import { Header } from "../features/Header";
import { PageTab } from "../features/PageTab";

export const Home: React.FC = () => {
  return (
    <Layout header={<Header />} tab={<PageTab />} main={<ContentsSwitcher />} />
  );
};
