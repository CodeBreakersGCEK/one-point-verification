import mongoose from 'mongoose';

const connectMongo = async () => {
  mongoose.connect(process.env.NEXT_PUBLIC_DBURL as string);
  console.log('Database connected');
};

export default connectMongo;
