import connectMongo from '@utils/connectMongo';

import StudentSchema from '../../../models/student';
import bcrypt from 'bcryptjs';
export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;
  const { uid, password } = req.body;
  //   console.log({ uid, password });
  switch (method) {
    case 'POST':
      try {
        const student = await StudentSchema.findOne({ uid: uid });
        if (!student) {
          res.status(200).json({ message: 'Student not Exist' });
          return;
        }
        const isMatch = bcrypt.compareSync(password, student.password);
        if (!isMatch) {
          res.status(200).json({ message: 'Password does not matched' });
          return;
        }
        res.status(200).json(student);
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
