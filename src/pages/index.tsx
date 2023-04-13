import { GetStaticProps } from "next";
import { Home as Page, Props } from "../components/pages/Home";
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
