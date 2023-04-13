import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { Layout } from "../Layout";
import { ContentsSwitcher } from "../features/ContentsSwitcher";
import { Header } from "../features/Header";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
};

export const Home: React.FC<Props> = ({ githubLanguages }) => (
  <Layout header={<Header />} main={<ContentsSwitcher />} />
);
