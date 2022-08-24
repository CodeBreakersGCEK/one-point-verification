import type { NextApiRequest, NextApiResponse } from 'next';
import AadharSchema from 'src/models/aadhar';
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
        const data = await AadharSchema.findById(id);
        if (!data) {
          res.status(404).json({ message: 'AADHAR IS NOT EXIST' });
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
      break;
    case 'PUT':
      try {
        const aadhar = await AadharSchema.findById(id);
        if (!aadhar) {
          res.status(404).json({ message: 'Aadhar not found' });
        }

        const updatedAadhar = await AadharSchema.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true },
        );

        res.status(200).json(updatedAadhar);
      } catch (error) {
        res.status(404).json(error);
      }

      break;
    case 'DELETE':
      try {
        const aadhar = await AadharSchema.findById(id);
        if (!aadhar) {
          res.status(404).json({ message: 'Aadhar not found' });
        }
        await AadharSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Aadhar deleted' });
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    default:
      break;
  }
}
