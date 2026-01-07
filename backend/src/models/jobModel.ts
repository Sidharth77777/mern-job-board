import mongoose, {Schema, type HydratedDocument, type InferSchemaType} from "mongoose";
import { JOB_CATEGORIES } from "../lib/types";

// JOB Schema
const jobSchema = new Schema({
    title: { type:String, required:true, trim:true },                   // Job Title
    company: { type:String, required:true, trim:true },                 // Company Name
    category: { type:String, enum:JOB_CATEGORIES, required:true },      // Job Category
    location: { type:String, required:true, trim:true },                // Job Location
    description: { type:String, required:true, trim:true },             // Full Job Description

}, {timestamps:true})

// Types
export type Job = InferSchemaType<typeof jobSchema>
export type JobDoc = HydratedDocument<Job>

// Export mongoose model for operations
export const JobModel = mongoose.model<Job>("Job", jobSchema)