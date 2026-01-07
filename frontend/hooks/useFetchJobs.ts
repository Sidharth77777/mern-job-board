"use client"

import { useState, useEffect } from "react"
import api from "@/lib/api";
import { Job, useFetchJobsPromiseProps, UseFetchJobsProps } from "@/lib/types"

// Custom hook for fetching jobs
export const useFetchJobs = ({ category, search, page = 1, limit = 10 }: UseFetchJobsProps): useFetchJobsPromiseProps => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalJobs, setTotalJobs] = useState<number>(0);

    const fetchJobs = async() => {
        setLoading(true)
        setError(null)

        try {
            // Fetch data from backend with params
            const res = await api.get("/jobs", {
                params: { category, search, page, limit }
            })

            setJobs(res.data.jobs)
            setTotalJobs(res.data.total || 0)

        } catch (err:any) {
            console.error(err)
            setError(err?.response?.data?.error || "Something went wrong")

        } finally {
            setLoading(false)
        }

    }

    // Fetch jobs only if there is category, search, page and limit
    useEffect(() => {
        fetchJobs()
    },[category, search, page, limit])

    return { jobs, loading, error, totalJobs }
}