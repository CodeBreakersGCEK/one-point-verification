import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StudentSchema = models.Student || model('Student', studentSchema);

export default StudentSchema;
