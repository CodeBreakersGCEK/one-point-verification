import mongoose from 'mongoose';
const cloudinary = require('cloudinary').v2;

const connectMongo = async () => {
  mongoose.connect(process.env.NEXT_PUBLIC_DBURL as string);
  console.log('Database connected');
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default connectMongo;
