import mongoose from "mongoose";

let isConnected = false; // track the connection state

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected and good to go');
    return;
}

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'share_prompt',
    
  })

  isConnected = true;

  console.log('MongoDB connected');

} catch (error) {
  console.log(error)

}
}
