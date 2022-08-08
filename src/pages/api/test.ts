import type { NextApiRequest, NextApiResponse } from "next";
import { Aadhar } from "src/db/uid";
import { UID } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<UID>) => {
  res.status(200).json(Aadhar);
};

export default handler;
