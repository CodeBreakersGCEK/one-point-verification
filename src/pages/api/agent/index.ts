import connectMongo from '@utils/connectMongo';
import { NextApiRequest, NextApiResponse } from 'next';

import AgentSchema from 'src/models/agent';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectMongo();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const agents = await AgentSchema.find();
        res.status(200).json(agents);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
}
