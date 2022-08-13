import { NextApiRequest, NextApiResponse } from "next";
import { BankDetails } from "src/db/bank";
import { Verify } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<Verify | any>) => {
  const { uid, pan, bankAccount } = req.query;

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

  const userData = {
    id: uid,
    pan: pan,
    bankAccount: bankAccount,
    verified: result ? true : false,
  };

  res.status(200).json(userData as unknown as Verify);
};

export default handler;
