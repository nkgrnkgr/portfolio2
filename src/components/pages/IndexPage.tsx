import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Home } from "../features/Home";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
};

export const IndexPage: React.FC<Props> = ({ githubLanguages }) => (
  <Layout
    header={<Header />}
    main={<Home githubLanguages={githubLanguages} />}
  />
);
