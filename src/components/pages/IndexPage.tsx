import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import { TimelineContent } from "@/types/Timeline";
import { Layout } from "../Layout";
import { Header } from "../features/Header";
import { Home } from "../features/Home";
import { Meta } from "../features/Meta";

export type Props = {
  githubLanguages: GithubLanguagesResponse;
  timelineContents: TimelineContent[];
};

export const IndexPage: React.FC<Props> = ({
  githubLanguages,
  timelineContents,
}) => (
  <>
    <Meta title="nkgr.dev | Home" description="home" />
    <Layout
      header={<Header />}
      main={
        <Home
          githubLanguages={githubLanguages}
          timelineContents={timelineContents}
        />
      }
    />
  </>
);
