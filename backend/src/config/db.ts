import mongoose from "mongoose";
import { ENV } from "./ENV";

export const connectDB = async() => {
    try{
        if (!ENV.MONGODB_URI) {
            throw new Error("MONGODB_URI not setup in env")
        }

        // Connect mongodb database
        await mongoose.connect(ENV.MONGODB_URI)

        console.log("DATABASE CONNECTED")

    } catch (err:any) {
        throw new Error(err.message || "Error connecting mongodb")
    }
}