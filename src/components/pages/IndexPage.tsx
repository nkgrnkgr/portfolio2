import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineRawData } from "@/types/Timeline";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Home } from "../features/Home";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
  timelines: TimelineRawData[];
};

export const IndexPage: React.FC<Props> = ({ githubLanguages, timelines }) => (
  <Layout
    header={<Header />}
    main={<Home githubLanguages={githubLanguages} timelines={timelines} />}
  />
);
