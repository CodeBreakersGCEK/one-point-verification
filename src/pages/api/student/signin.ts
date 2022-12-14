import connectMongo from '@utils/connectMongo';

import StudentSchema from '../../../models/student';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;
  const { uid, password } = req.body;
  // console.log(uid);

  switch (method) {
    case 'POST':
      try {
        const student = await StudentSchema.findOne({ uid: uid });
        if (!student) {
          res
            .status(200)
            .json({ message: 'Invalid StudentId', status: 'error' });
          return;
        }
        const isMatch = bcrypt.compareSync(password, student.password);
        if (!isMatch) {
          res
            .status(200)
            .json({ message: 'Password does not matched', status: 'error' });
          return;
        }
        res.status(200).json({ data: student, status: 'success' });
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
