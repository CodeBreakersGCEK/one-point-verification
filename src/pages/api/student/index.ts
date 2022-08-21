import connectMongo from '@utils/connectMongo';
import { NextApiRequest, NextApiResponse } from 'next';

import StudentSchema from 'src/models/student';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const students = await StudentSchema.find();
        res.status(200).json(students);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
}
