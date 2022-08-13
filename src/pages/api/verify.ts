import { NextApiRequest, NextApiResponse } from "next";
import { Verify } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<Verify | any>) => {
  const { uid, pan, BankAccount } = req.query;

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

  if (!BankAccount) {
    res.status(400).json({
      message: "Please provide a valid BankAccount",
    });
    return;
  }
};

export default handler;
