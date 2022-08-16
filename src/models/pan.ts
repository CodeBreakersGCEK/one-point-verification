import { Schema, model, models } from "mongoose";
import { PAN } from "src/types/data";

const panSchema = new Schema<PAN>({
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

const PanSchema = models.Pan || model<PAN>("Pan", panSchema);

export default PanSchema;
