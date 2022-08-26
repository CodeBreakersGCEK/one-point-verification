import { NextApiRequest, NextApiResponse } from 'next';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'du64hfpln',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { image } = req.body;
  const { method } = req;

  switch (method) {
    case 'POST':
      const results = await cloudinary.uploader.upload(image, {
        folder: 'samples',
      });

      res.status(200).json({
        results,
      });
  }
}
