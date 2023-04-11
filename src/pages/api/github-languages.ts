// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

type Data = {
  data: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const response = await fetch(
      "https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos"
    );
    const json = await response.json();
    res.status(200).json({ data: JSON.stringify(json, null, 2) });
    return;
  }

  throw new Error("Unsupported method");
};

export default handler;
