import type { NextApiRequest, NextApiResponse } from "next";
import VerifyModel from "src/models/verify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const allData = await VerifyModel.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(404).json(error);
  }
}
