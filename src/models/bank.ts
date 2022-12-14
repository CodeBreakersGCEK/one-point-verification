import { Schema, model, models } from "mongoose";
import { BankAccount } from "src/types/data";

const bankSchema = new Schema<BankAccount>({
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

const BankSchema = models.Bank || model<BankAccount>("Bank", bankSchema);

export default BankSchema;
