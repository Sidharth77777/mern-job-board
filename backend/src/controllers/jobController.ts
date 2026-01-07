import type { Request, Response } from "express";
import { JobModel } from "../models/jobModel";
import {z} from "zod";
import { jobFormSchema } from "../lib/types";

// Controller to create a job (POST)
export const createJob = async (req: Request, res: Response) => {
    try {
        // Validates form data by zod
        const parsed = jobFormSchema.parse(req.body)

        // Creates a job
        const job = await JobModel.create( parsed )

        res.status(201).json({ 
            success: true,
            message: "Job created successfully", 
            job 
        })

    } catch (err: any) {
        if (err instanceof z.ZodError) {
            // Formatts zod errors if there are any...
            const formatted = err.issues.map((e:z.ZodIssue) => ({
                field: e.path[0],
                message: e.message
            }))

            return res.status(400).json({
                success: false,
                errors: formatted
            })
        }
        return res.status(500).json({ 
            success: false, 
            error: "Internal Server Error"
        })
    }
}

// Controller to fetch jobs (GET)
export const getJobs = async (req: Request, res: Response) => {
    try {
        // Get query values if there are any...
        const { category, search } = req.query as { category:string, search:string }
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10

        const query: any = {}

        if (category) {
            query.category = category
        }
        if (search) {
            const regex = new RegExp(`^${search}`, "i") // starts searching from first letter

            query.$or = [
                { title: { $regex:regex } },
                { company: { $regex:regex } },
            ]
        }

        const skip = (page - 1) * limit

        // Get filtered jobs
        const jobs = await JobModel.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const total = await JobModel.countDocuments(query)

        return res.status(200).json({ 
            success: true, 
            message: "Fetched jobs successfully", 
            page,
            total,
            jobs 
        })

    } catch (err: any) {
        console.error("INTERNAL SERVER ERROR:", err)
        return res.status(500).json({ 
            success: false, 
            error: "Internal Server Error"
        })
    }
}