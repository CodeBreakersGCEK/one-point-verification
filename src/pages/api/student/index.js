import connectMongo from '@utils/connectMongo';

import StudentSchema from 'src/models/student';

export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const students = await StudentSchema.find();
        res.status(200).json(students);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
}
