import { Schema, model, models } from "mongoose";
import { UID } from "src/types/data";

const aadharSchema = new Schema<UID>({
  uid: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  dob: String,
  dobt: String,
  gender: String,
  phone: String,
  email: String,
  street: String,
  vtc: String,
  subdist: String,
  district: String,
  state: String,
  pincode: String,
});

const AadharSchema = models.Aadhar || model<UID>("Aadhar", aadharSchema);

export default AadharSchema;
