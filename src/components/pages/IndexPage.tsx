import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { Timeline } from "@/types/Timeline";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Home } from "../features/Home";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
  timelines: Timeline[];
};

export const IndexPage: React.FC<Props> = ({ githubLanguages, timelines }) => (
  <Layout
    header={<Header />}
    main={<Home githubLanguages={githubLanguages} timelines={timelines} />}
  />
);
