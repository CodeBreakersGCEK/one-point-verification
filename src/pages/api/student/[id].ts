import StudentSchema from '../../../models/student';
import connectMongo from '@utils/connectMongo';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  await connectMongo();
  const {
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const data = await StudentSchema.findById(id);
        if (!data) {
          res
            .status(200)
            .json({ message: 'Student IS NOT EXIST', status: 'error' });
        }
        res.status(200).json({ data, status: 'success' });
      } catch (error: any) {
        res.status(200).json({ message: error.message, status: 'error' });
      }
      break;
    case 'PUT':
      try {
        const student = await StudentSchema.findById(id);
        if (!student) {
          res
            .status(200)
            .json({ message: 'Student is not found', status: 'error' });
        }
        if (req.body.password) {
          const salt = bcrypt.genSaltSync(10);
          const hashPassword = bcrypt.hashSync(req.body.password, salt);
          req.body.password = hashPassword;
        }

        const updatedStudent = await StudentSchema.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true },
        );

        res.status(200).json({ data: updatedStudent, status: 'success' });
      } catch (error: any) {
        res.status(200).json({ message: error.message, status: 'error' });
      }

      break;
    case 'DELETE':
      try {
        const student = await StudentSchema.findById(id);
        if (!student) {
          res.status(404).json({ message: 'Student is not found' });
        }
        await StudentSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Student deleted' });
      } catch (error: any) {
        res.status(200).json({ message: error.message, status: 'error' });
      }

      break;
    default:
      break;
  }
}
