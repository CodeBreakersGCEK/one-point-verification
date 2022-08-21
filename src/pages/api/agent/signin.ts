import connectMongo from '@utils/connectMongo';

import AgentSchema from '../../../models/agent';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;
  const { id, password } = req.body;
  // console.log(uid);

  switch (method) {
    case 'POST':
      try {
        const agent = await AgentSchema.findOne({ id: id });

        if (!agent) {
          res
            .status(200)
            .json({ message: 'Invalid Agent Id', status: 'error' });
          return;
        }
        const isMatch = bcrypt.compareSync(password, agent.password);
        if (!isMatch) {
          res
            .status(200)
            .json({ message: 'Password does not matched', status: 'error' });
          return;
        }
        res.status(200).json({ data: agent, status: 'success' });
      } catch (error) {
        res.status(400).json(error);
      }
      break;

    default:
      break;
  }
}
