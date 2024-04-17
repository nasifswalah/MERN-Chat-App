import mongoose from "mongoose";

const connectToMonogoDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMonogoDB;