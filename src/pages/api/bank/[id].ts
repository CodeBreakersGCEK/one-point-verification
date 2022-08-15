import type { NextApiRequest, NextApiResponse } from "next";
import BankSchema from "src/models/bank";
import connectMongo from "@utils/connectMongo";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await connectMongo();
  const {
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const data = await BankSchema.findById(id);
        if (!data) {
          res.status(404).json({ message: "BankAccount IS NOT EXIST" });
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
      break;
    case "PUT":
      try {
        const bank = await BankSchema.findById(id);
        if (!bank) {
          res.status(404).json({ message: "Bank account not found" });
        }
        const updatedAccount = await BankSchema.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );

        res.status(200).json({ data: updatedAccount });
      } catch (error) {
        res.status(404).json(error);
      }

      break;
    case "DELETE":
      try {
        const aadhar = await BankSchema.findById(id);
        if (!aadhar) {
          res.status(404).json({ message: "Account not found" });
        }
        await BankSchema.findByIdAndDelete(id);
        res.status(200).json({ message: "Account deleted" });
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    default:
      break;
  }
}
