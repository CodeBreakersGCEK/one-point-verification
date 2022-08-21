import connectMongo from '@utils/connectMongo';

import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import AgentSchema from '../../../models/agent';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const agent = await AgentSchema.findOne({ id: req.body.id });
        if (agent) {
          res.status(200).json({
            message: 'Invaid Agent or Agent not exist',
            status: 'error',
          });
          return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const newAgent = new AgentSchema({
          ...req.body,
          password: hashPassword,
        });
        await newAgent.save();
        res.status(200).json({ data: newAgent, status: 'success' });
      } catch (error: any) {
        res.status(200).json({ message: error.message, status: 'error' });
      }
      break;

    default:
      break;
  }
}
