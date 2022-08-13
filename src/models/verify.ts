import { Schema, model, models } from "mongoose";

const verifySchema = new Schema({
  id: {
    type: String,
  },
  pan: {
    type: String,
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
