import type { NextApiRequest, NextApiResponse } from "next";
import VerifyModel from "src/models/verify";
import AadharSchema from "src/models/aadhar";
import PanSchema from "src/models/pan";
import BankSchema from "src/models/bank";
import connectMongo from "@utils/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  const { aadhar, pan, bankAcc } = req.body;
  const { method } = req;

  if (method === "POST") {
    try {
      const user = await VerifyModel.findOne({ uid: aadhar });
      if (user) {
        res
          .status(200)
          .json({ message: "This aadhar is already verified with BrainChuck" });
        return;
      }
      const uidData = await AadharSchema.findOne({ uid: aadhar });

      if (!uidData) {
        res.status(400).json({
          message: "Invalid Aadhar",
        });
        return;
      }
      const panData = await PanSchema.findOne({ id: pan });
      if (!panData) {
        res.status(400).json({
          message: "Invalid PAN card",
        });
      }

      const BankData = await BankSchema.findOne({ accountNumber: bankAcc });
      if (!BankData) {
        res.status(400).json({ message: "Invalid Bank account" });
        return;
      }

      //  Check Verificaion

      if (panData.aadharNumber === aadhar && BankData.aadharNumber == aadhar) {
        const newUser = new VerifyModel({
          uid: aadhar,
          bankAccount: bankAcc,
          pan,
          verified: true,
        });
        await newUser.save();
        res.status(200).json({ data: newUser });
        return;
      }

      res.status(404).json({ message: "User not verified" });
    } catch (error) {
      res.status(404).json(error);
    }
  }
}
