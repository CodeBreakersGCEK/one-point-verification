import { Schema, model, models } from 'mongoose';

const studentDetailsSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  pan: {
    type: String,
    required: true,
    unique: true,
  },
  bankAccount: {
    type: String,
    required: true,
    unique: true,
  },
  collegeCode: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  isVerified: {
    type: String,
    enum: {
      values: ['accepted', 'pending', 'rejected'],
      message: '{VALUE} is not supported',
    },
    required: true,
    default: 'pending',
  },
});

const StudentDetailsSchema =
  models.StudentDetails || model('StudentDetails', studentDetailsSchema);

export default StudentDetailsSchema;
