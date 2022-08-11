import type { NextApiRequest, NextApiResponse } from "next";
import { PanDetails } from "src/db/pan";
import { PAN } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<PAN | PAN[]>) => {
  const { id } = req.query;

  if (!id) {
    res.status(400).json(PanDetails);
    return;
  }

  const panData = PanDetails.find((p) => p.id === id);

  res.status(200).json(panData as unknown as PAN);
};

export default handler;
