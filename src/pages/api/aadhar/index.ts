import connectMongo from "@utils/connectMongo";
import type { NextApiRequest, NextApiResponse } from "next";
import AadharSchema from "src/models/aadhar";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const aadhars = await AadharSchema.find();
        res.status(200).json(aadhars);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const newAadhar = new AadharSchema({ ...req.body });
        await newAadhar.save();

        res.status(200).json({ data: newAadhar });
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
