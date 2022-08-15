import { Schema, model, models } from "mongoose";

const bankSchema = new Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  accountType: String,
  bankName: String,
  branchName: String,
  ifscCode: String,
  holderName: String,
  panNumber: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
});

const BankSchema = models.Bank || model("Bank", bankSchema);

export default BankSchema;
