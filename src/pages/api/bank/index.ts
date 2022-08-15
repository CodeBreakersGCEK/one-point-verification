import connectMongo from "@utils/connectMongo";
import type { NextApiRequest, NextApiResponse } from "next";
import BankSchema from "src/models/bank";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const banks = await BankSchema.find();
        res.status(200).json(banks);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const newAccount = new BankSchema({ ...req.body });
        await newAccount.save();
        res.status(200).json(newAccount);
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
