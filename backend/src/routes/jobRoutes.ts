import { Router } from "express";
import { createJob, getJobs } from "../controllers/jobController";

const jobRouter = Router()

// Fetch jobs (GET)
jobRouter.get("/", getJobs)

// Create a job (POST)
jobRouter.post("/", createJob)

export default jobRouter