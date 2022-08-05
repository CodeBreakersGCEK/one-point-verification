import type { NextApiRequest, NextApiResponse } from "next";

type Data = { msg: string; team: string };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res
    .status(200)
    .json({ msg: "Welcome to SIH HACKATHON!!", team: "BrainChuck" });
};

export default handler;
