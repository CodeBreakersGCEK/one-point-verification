import type { NextApiRequest, NextApiResponse } from "next";
import PanSchema from "src/models/pan";
import connectMongo from "@utils/connectMongo";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await connectMongo();
  const {
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const data = await PanSchema.findById(id);
        if (!data) {
          res.status(404).json({ message: "Pan IS NOT EXIST" });
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
      break;
    case "PUT":
      try {
        const pan = await PanSchema.findById(id);
        if (!pan) {
          res.status(404).json({ message: "Pan not found" });
        }
        const updatedPan = PanSchema.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );

        res.status(200).json(updatedPan);
      } catch (error) {
        res.status(404).json(error);
      }

      break;
    case "DELETE":
      try {
        const aadhar = await PanSchema.findById(id);
        if (!aadhar) {
          res.status(404).json({ message: "Pan not found" });
        }
        await PanSchema.findByIdAndDelete(id);
        res.status(200).json({ message: "Pan deleted" });
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    default:
      break;
  }
}
