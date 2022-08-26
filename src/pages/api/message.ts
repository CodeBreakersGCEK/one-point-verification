import { NextApiRequest, NextApiResponse } from 'next';
const otpGenerator = require('otp-generator');

const client = require('twilio')(
  'ACc8825ac5125d49591879d7113fd5672d',
  '9d1f06c3bb9cf917309c5b5c623802a8',
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  const { number } = req.body;

  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });

  console.log(OTP, number);

  switch (method) {
    case 'POST':
      try {
        console.log('first');
        client.messages
          .create({
            from: '+12676828717',
            to: number,
            body: OTP,
          })
          .then(() => {
            res.send(JSON.stringify({ success: true, otp: OTP }));
          })
          .catch((err: any) => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
          });
      } catch (error: any) {
        res.status(404).json({ data: error.message, status: 'error' });
      }
      break;

    default:
      break;
  }
}
