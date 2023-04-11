// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GithubLanguagesResponse } from "@/types/GithubLanguages";
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubLanguagesResponse>
) => {
  if (req.method === "GET") {
    const response = await fetch(
      "https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos"
    );
    const json = (await response.json()) as GithubLanguagesResponse;
    res.status(200).json({ ...json });
    return;
  }

  throw new Error("Unsupported method");
};

export default handler;
