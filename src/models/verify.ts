import { Schema, model, models } from "mongoose";
import { Verify } from "src/types/data";

const verifySchema = new Schema<Verify>({
  uid: {
    type: String,
    requied: true,
    unique: true,
  },
  pan: {
    type: String,
    requied: true,
    unique: true,
  },
  bankAccount: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const VerifyModel = models.Verify || model<Verify>("Verify", verifySchema);

export default VerifyModel;
