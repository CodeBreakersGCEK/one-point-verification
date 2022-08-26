import { NextApiRequest, NextApiResponse } from 'next';

const client = require('twilio')(
  'ACc8825ac5125d49591879d7113fd5672d',
  '9d1f06c3bb9cf917309c5b5c623802a8',
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { number, message } = req.body;
  client.messages
    .create({
      from: '+12676828717',
      to: number,
      body: message,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err: any) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
}
