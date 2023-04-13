import { fetchGithubLanguages } from "@/functions/repository/fetchGithubLanguages";
import { fetchTimelineContents } from "@/functions/repository/fetchTimelines";
import { GetStaticProps } from "next";
import { IndexPage as Page, Props } from "../components/pages/IndexPage";

export default Page;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const githubLanguages = await fetchGithubLanguages();
  const contents = await fetchTimelineContents();

  return {
    props: {
      githubLanguages,
      timelineContents: contents,
    },
  };
};
