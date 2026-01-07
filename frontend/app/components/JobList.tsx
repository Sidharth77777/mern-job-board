"use client"

import { useState, useEffect } from "react"
import JobCard from "./JobCard"
import { useFetchJobs } from "@/hooks/useFetchJobs"
import CategoryFilter from "./JobFilter"
import { Loader2 } from "lucide-react"

export default function JobList() {
    const [category, setCategory] = useState("")
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const limit = 9

    // Fetch jobs
    const { jobs, loading, error, totalJobs } = useFetchJobs({
        category,
        search,
        page,
        limit
    })

    useEffect(() => {
        setPage(1)
    }, [category, search])

    const totalPages = Math.ceil(totalJobs / limit)

    return (
        <section id="jobs" className="min-h-screen pt-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-semibold mb-2">Latest Jobs</h2>
                <p className="text-muted-foreground mb-8">
                    Browse open positions from companies hiring right now.
                </p>

                {/* Filters jobs */}
                <CategoryFilter
                    category={category}
                    search={search}
                    onCategoryChange={setCategory}
                    onSearchChange={setSearch}
                />

                {/* Loader */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                )}

                {/* Failed to fetch */}
                {!loading && error && (
                    <p className="text-destructive text-center mt-10">
                        Failed to load jobs
                    </p>
                )}

                {/* Job List */}
                {!loading && jobs && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                )}

                {/* No jobs */}
                {!loading && jobs?.length === 0 && (
                    <p className="text-muted-foreground mt-20 text-center">
                        No jobs found. Try changing filters.
                    </p>
                )}

                {/* Pagination */}
                {!loading && totalJobs > limit && (
                    <div className="flex justify-center items-center gap-4 mt-12">

                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="px-4 py-2 cursor-pointer rounded-md border border-border text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted"
                        >
                            Previous
                        </button>

                        <span className="text-sm text-muted-foreground">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            disabled={page >= totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="px-4 py-2 cursor-pointer rounded-md border border-border text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted"
                        >
                            Next
                        </button>

                    </div>
                )}

            </div>
        </section>
    )
}
