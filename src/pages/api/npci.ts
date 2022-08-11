import type { NextApiRequest, NextApiResponse } from "next";
import { BankDetails } from "src/db/bank";
import { NPCI } from "src/types/data";

const handler = (req: NextApiRequest, res: NextApiResponse<NPCI | any>) => {
  const { uid, accountNumber } = req.query;

  if (!uid) {
    res.status(400).json({
      message: "Please provide a valid UID",
    });
    return;
  }

  const aadharSeededBank = BankDetails.find(
    (b) => b.aadharNumber === uid && b.accountNumber === accountNumber
  );

  if (!aadharSeededBank) {
    res.status(400).json({
      message: "No bank found for the given UID",
    });
    return;
  }

  const npciDetails = {
    aadharLinkageStatus: aadharSeededBank ? true : false,
    accountNumber: aadharSeededBank ? aadharSeededBank.accountNumber : "",
    accountType: aadharSeededBank ? aadharSeededBank.accountType : "",
  };

  res.status(200).json(npciDetails as unknown as NPCI);
};

export default handler;
