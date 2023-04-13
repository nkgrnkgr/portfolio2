import { GithubLanguagesResponse } from "@/types/GithubLanguages";

export const fetchGithubLanguages = async () => {
  const response = await fetch(
    "https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos"
  );
  const json = (await response.json()) as GithubLanguagesResponse;
  return json;
};
