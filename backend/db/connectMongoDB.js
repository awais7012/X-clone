import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connection to mongoDB: ${error.message}`);
        process.exit(1);
    }

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection established successfully.");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Error in MongoDB connection:", err.message);
    });
};

export default connectMongoDB;
