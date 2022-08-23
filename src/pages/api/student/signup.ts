import connectMongo from '@utils/connectMongo';

import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import StudentSchema from '../../../models/student';
import AadharSchema from 'src/models/aadhar';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;
  const { uid } = req.body;
  switch (method) {
    case 'POST':
      try {
        const isValid = await AadharSchema.findOne({ uid: uid });
        if (!isValid) {
          res.status(200).json({
            message: 'Invalid Aadhar',
            status: 'error',
          });
          return;
        }
        const student = await StudentSchema.findOne({ uid: req.body.uid });
        if (student) {
          res.status(200).json({ message: 'Student  Exist', status: 'error' });
          return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const newStudent = new StudentSchema({
          ...req.body,
          password: hashPassword,
        });
        await newStudent.save();
        res.status(200).json({ data: newStudent, status: 'success' });
      } catch (error: any) {
        res.status(200).json({ message: error.message, status: 'error' });
      }
      break;

    default:
      break;
  }
}
