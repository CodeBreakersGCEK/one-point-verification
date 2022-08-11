import type { NextApiRequest, NextApiResponse } from "next";
import { Aadhar } from "src/db/uid";
import { UID } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<UID | UID[]>) => {
  const { uid } = req.query;

  if (!uid) {
    res.status(400).json(Aadhar);
    return;
  }

  const uidData = Aadhar.find((u) => u.uid === uid);

  res.status(200).json(uidData as unknown as UID);
};

export default handler;
