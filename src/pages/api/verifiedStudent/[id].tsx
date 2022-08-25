import type { NextApiRequest, NextApiResponse } from 'next';
import StudentDetailSchema from 'src/models/student-details';
import connectMongo from '@utils/connectMongo';
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
        const data = await StudentDetailSchema.findById(id);
        if (!data) {
          res
            .status(404)
            .json({ message: 'Student does   NOT EXIST', status: 'error' });
        }
        res.status(200).json({ data, status: 'success' });
      } catch (error: any) {
        res.status(404).json({ data: error.message, status: 'error' });
      }
      break;
    case 'PUT':
      try {
        const student = await StudentDetailSchema.findById(id);
        if (!student) {
          res
            .status(404)
            .json({ message: 'Student not found', status: 'error' });
        }
        const updatedData = await StudentDetailSchema.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true },
        );

        res.status(200).json({ data: updatedData, status: 'success' });
      } catch (error: any) {
        res.status(404).json({ data: error.message, status: 'error' });
      }

      break;
    case 'DELETE':
      try {
        const aadhar = await StudentDetailSchema.findById(id);
        if (!aadhar) {
          res
            .status(404)
            .json({ message: 'Account not found', status: 'error' });
        }
        await StudentDetailSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Student deleted', status: 'success' });
      } catch (error: any) {
        res.status(404).json({ data: error.message, status: 'error' });
      }

      break;
    default:
      break;
  }
}
