import connectMongo from "@utils/connectMongo";
import type { NextApiRequest, NextApiResponse } from "next";
import PanSchema from "src/models/pan";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const pans = await PanSchema.find();
        res.status(200).json(pans);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const newPan = new PanSchema({ ...req.body });
        await newPan.save();
        res.status(200).json(newPan);
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
