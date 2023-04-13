import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Home } from "../features/Home";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
  timelineContents: TimelineContent[];
};

export const IndexPage: React.FC<Props> = ({
  githubLanguages,
  timelineContents,
}) => (
  <Layout
    header={<Header />}
    main={
      <Home
        githubLanguages={githubLanguages}
        timelineContents={timelineContents}
      />
    }
  />
);
