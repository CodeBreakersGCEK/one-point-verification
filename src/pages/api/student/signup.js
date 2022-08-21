import connectMongo from '@utils/connectMongo';

import StudentSchema from 'src/models/student';
import bcrypt from 'bcryptjs';
export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const newStudent = new StudentSchema({
          ...req.body,
          password: hashPassword,
        });
        await newStudent.save();
        res.status(200).json(newStudent);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
}
