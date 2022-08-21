import StudentSchema from '../../../models/student';
import connectMongo from '@utils/connectMongo';
import bcrypt from 'bcryptjs';
export default async function handler(req, res) {
  const { method } = req;
  await connectMongo();
  const {
    query: { id },
  } = req;
  console.log(id);
  switch (method) {
    case 'GET':
      try {
        const data = await StudentSchema.findById(id);
        if (!data) {
          res.status(404).json({ message: 'Student IS NOT EXIST' });
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
      break;
    case 'PUT':
      try {
        const student = await StudentSchema.findById(id);
        if (!student) {
          res.status(404).json({ message: 'Student is not found' });
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

        res.status(200).json(updatedStudent);
      } catch (error) {
        res.status(404).json(error);
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
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    default:
      break;
  }
}
