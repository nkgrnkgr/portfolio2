import { GetStaticProps } from "next";
import { IndexPage as Page, Props } from "../components/pages/IndexPage";
import { fetchGithubLanguages } from "@/functions/repository/fetchGithubLanguages";

export default Page;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const githubLanguages = await fetchGithubLanguages();
  return {
    props: {
      githubLanguages,
    },
  };
};
