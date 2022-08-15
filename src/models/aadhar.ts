import { Schema, model, models } from "mongoose";

const aadharSchema = new Schema({
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

const AadharSchema = models.Aadhar || model("Aadhar", aadharSchema);

export default AadharSchema;
