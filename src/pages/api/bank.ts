import type { NextApiRequest, NextApiResponse } from "next";
import { BankDetails } from "src/db/bank";
import { BankAccount } from "src/types/data";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<BankAccount | string>
) => {
  const { accountNumber } = req.query;

  if (!accountNumber) {
    res.status(400).json("Enter a valid account number");
    return;
  }

  const bankData = BankDetails.find((b) => b.accountNumber === accountNumber);

  res.status(200).json(bankData as unknown as BankAccount);
};

export default handler;
