import { Schema, model, models } from "mongoose";

const verifySchema = new Schema({
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

const VerifyModel = models.Verify || model("Verify", verifySchema);

export default VerifyModel;
