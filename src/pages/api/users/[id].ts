import type { NextApiRequest, NextApiResponse } from "next";
import VerifyModel from "src/models/verify";
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
        const data = await VerifyModel.findById(id);
        if (!data) {
          res
            .status(404)
            .json({ message: "User not exist in verified database" });
        }
        res.status(200).json(data);
      } catch (error) {}
      break;
    case "PUT":
      try {
        const user = await VerifyModel.findById(id);
        if (!user) {
          res.status(404).json("User not found");
        }
        const updatedUser = VerifyModel.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );

        res.status(200).json({ data: updatedUser });
      } catch (error) {}

      break;
    case "DELETE":
      try {
        const user = await VerifyModel.findById(id);
        if (!user) {
          res.status(404).json("User not found");
          return;
        }
        await VerifyModel.findByIdAndDelete(id);
        res.status(200).json("User deleted");
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    default:
      break;
  }
}
