"use client"

import { useState } from "react"
import api from "@/lib/api";
import { Job } from "@/lib/types";

// Custom hook for creating a job
export const useCreateJob = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);

    const postJob = async(data:Omit<Job, "_id" | "createdAt" | "updatedAt">) => {
        setLoading(true)
        setError(null)

        try {
            // Send data to backend
            const res = await api.post("/jobs", data)
            
            return res.data.job
        } catch (err:any) {
            setError(err?.response?.data?.errors?.[0]?.message || "Something went wrong");
            return null;
        } finally {
            setLoading(false)
        }
    }

    return { postJob, loading, error }

}