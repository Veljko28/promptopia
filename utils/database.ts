import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false; // track 

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected){
        console.log("MongoDb is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions)

        isConnected = true;

        console.log("MongoDb is connected!");
    }
    catch (error){
        console.error(error);
    }
}