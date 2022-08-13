import connectMongo from "@utils/connectMongo";
import { NextApiRequest, NextApiResponse } from "next";
import { BankDetails } from "src/db/bank";
import VerifyModel from "src/models/verify";
import { Verify } from "src/types/data";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Verify | any>
) => {
  const { uid, pan, bankAccount } = req.query;

  await connectMongo();

  if (!uid) {
    res.status(400).json({
      message: "Please provide a valid UID",
    });
    return;
  }

  if (!pan) {
    res.status(400).json({
      message: "Please provide a valid PAN",
    });
    return;
  }

  if (!bankAccount) {
    res.status(400).json({
      message: "Please provide a valid BankAccount",
    });
    return;
  }

  const result = BankDetails.find(
    (b) =>
      b.aadharNumber === uid &&
      b.accountNumber === bankAccount &&
      b.panNumber === pan
  );

  const userData = new VerifyModel({
    id: uid,
    pan: pan,
    bankAccount: bankAccount,
    verified: result ? true : false,
  });

  const data = await userData.save();

  res.json({ data });
};

export default handler;
