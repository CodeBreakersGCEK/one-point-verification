import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.DBURL as string);

export default connectMongo;
