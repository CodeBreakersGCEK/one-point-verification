import { Schema, model, models } from "mongoose";

const panSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  dob: String,
  fathersName: String,
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const PanSchema = models.Pan || model("Pan", panSchema);

export default PanSchema;
