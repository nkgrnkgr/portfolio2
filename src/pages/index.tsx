import { GetStaticProps } from "next";
import { IndexPage as Page, Props } from "../components/pages/IndexPage";
import { fetchGithubLanguages } from "@/functions/repository/fetchGithubLanguages";
import { fetchTimelines } from "@/functions/repository/fetchTimelines";

export default Page;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const githubLanguages = await fetchGithubLanguages();
  const timelines = await fetchTimelines();
  return {
    props: {
      githubLanguages,
      timelines,
    },
  };
};
