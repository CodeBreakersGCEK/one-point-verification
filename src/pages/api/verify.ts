import type { NextApiRequest, NextApiResponse } from 'next';
import VerifyModel from 'src/models/verify';
import AadharSchema from 'src/models/aadhar';
import PanSchema from 'src/models/pan';
import BankSchema from 'src/models/bank';
import connectMongo from '@utils/connectMongo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { uid, pan, bankAccount } = req.body;
  const { method } = req;
  // console.log(req.body);

  switch (method) {
    case 'POST':
      try {
        const user = await VerifyModel.findOne({ uid: uid });
        if (user) {
          if (user.pan !== pan) {
            res
              .status(200)
              .json({ message: 'Invalid PanCard', status: 'error' });
            return;
          } else if (user.bankAccount !== bankAccount) {
            res
              .status(200)
              .json({ message: 'Invalid Bank Account', status: 'error' });
            return;
          }
          res
            .status(200)
            .json({ message: 'User is alreary verified', status: 'success' });
          return;
        }
        const uidData = await AadharSchema.findOne({ uid: uid });

        if (!uidData) {
          res.status(200).json({
            message: 'Invalid Aadhar',
            status: 'error',
          });
          return;
        }
        const panData = await PanSchema.findOne({ id: pan });
        if (!panData || panData.aadharNumber !== uid) {
          res.status(200).json({
            message: 'Invalid PAN card',
            status: 'error',
          });
        }

        const BankData = await BankSchema.findOne({
          accountNumber: bankAccount,
        });
        if (!BankData || BankData.aadharNumber !== uid) {
          res.status(200).json({
            message: ` Invalid Bank account`,
            status: 'error',
          });
          return;
        }

        //  Check Verificaion

        if (panData.aadharNumber === uid && BankData.aadharNumber == uid) {
          const newUser = new VerifyModel({ ...req.body, verified: true });
          await newUser.save();
          res
            .status(200)
            .json({ newUser, message: 'Verified', status: 'success' });
          return;
        }

        res.status(200).json({ message: 'User not verified', status: 'error' });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case 'PUT':
      try {
        const uidData = await AadharSchema.findOne({ uid: uid });

        if (!uidData) {
          res.status(200).json({
            message: 'Invalid Aadhar',
            status: 'error',
          });
          return;
        }
        const panData = await PanSchema.findOne({ id: pan });
        if (!panData || panData.aadharNumber !== uid) {
          res.status(200).json({
            message: 'Invalid PAN card',
            status: 'error',
          });
        }

        const BankData = await BankSchema.findOne({ accountNumber: uid });
        if (!BankData || BankData.aadharNumber !== uid) {
          res.status(200).json({
            message: `BankData?'':Invalid Bank account`,
            status: 'error',
          });
          return;
        }

        //  Check Verificaion

        if (panData.aadharNumber === uid && BankData.aadharNumber == uid) {
          const updatedData = await VerifyModel.findOneAndUpdate(
            uid,
            req.body,
            { new: true },
          );
          res
            .status(200)
            .json({ data: updatedData, message: 'Updated', status: 'success' });
          return;
        }

        res.status(200).json({ message: 'User not verified', status: 'error' });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
    default:
      break;
  }
}
