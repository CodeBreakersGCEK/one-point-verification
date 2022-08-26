import connectMongo from '@utils/connectMongo';
import type { NextApiRequest, NextApiResponse } from 'next';
import StudentDetailSchema from 'src/models/student-details';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const students = await StudentDetailSchema.find();
        res.status(200).json({ data: students, status: 'success' });
      } catch (error: any) {
        res.status(404).json({ data: error.message, status: 'error' });
      }
      break;
    case 'POST':
      try {
        const newStudent = new StudentDetailSchema({ ...req.body });
        await newStudent.save();
        res.status(200).json({ data: newStudent, status: 'success' });
      } catch (error: any) {
        res.status(200).json({ data: error.message, status: 'error' });
      }
      break;

    default:
      break;
  }
}
