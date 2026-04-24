import mongoose from "mongoose"

import dotenv from "dotenv";
dotenv.config();

const mongodbUri = process.env.MONGODB

async function ConnectToDatabase() {
  await mongoose
    .connect(mongodbUri)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log(error))
}

export default ConnectToDatabase