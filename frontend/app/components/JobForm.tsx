"use client"

import { useState } from "react"
import { useCreateJob } from "@/hooks/useCreateJob"
import { JOB_CATEGORIES } from "@/lib/types"
import toast from "react-hot-toast"

export default function JobForm() {
    const { postJob, loading, error } = useCreateJob()

    const [form, setForm] = useState({
        title: "",
        company: "",
        category: "",
        location: "",
        description: "",
    })
    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Submit a job
    const handleFormSubmit = async(e:React.FormEvent) => {
        e.preventDefault()

        const job = await postJob(form)
        if (job) {
            toast.success("Job posted successfully")
            setForm({
                title: "",
                company: "",
                category: "",
                location: "",
                description: ""
            })

            // navigate back to jobs list
            setTimeout(() => {
                window.location.href = "/#jobs"
            }, 1000)
        } else {
            toast.error(error || "Failed to post job")
        }
    }

    return (
        <div className="w-full max-w-xl bg-card border border-border rounded-xl p-6">

            <h1 className="text-2xl font-semibold mb-1">Post a Job</h1>
            <p className="text-sm text-muted-foreground mb-6">
                Fill in the details below to publish a new job
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">

                {/* Job Title */}
                <div>
                    <label className="text-sm text-muted-foreground">Job Title</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleFormChange}
                        placeholder="e.g. Frontend Developer"
                        className="w-full mt-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="text-sm text-muted-foreground">Company</label>
                    <input
                        name="company"
                        value={form.company}
                        onChange={handleFormChange}
                        placeholder="e.g. Google"
                        className="w-full mt-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="text-sm text-muted-foreground">Category</label>
                    <select 
                        name="category"
                        value={form.category}
                        onChange={handleFormChange}    
                        className="w-full cursor-pointer mt-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                            <option value="" disabled>
                                Select a category
                            </option>
                            {JOB_CATEGORIES.map((j) => (
                                <option key={j}>{j}</option>
                            ))}
                        
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="text-sm text-muted-foreground">Location</label>
                    <input
                        name="location"
                        value={form.location}
                        onChange={handleFormChange}
                        placeholder="e.g. Remote, Bangalore"
                        className="w-full mt-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="text-sm text-muted-foreground">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleFormChange}
                        rows={4}
                        placeholder="Describe the role, responsibilities, and requirements..."
                        className="w-full mt-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    disabled={loading || !form.title.trim() || !form.company.trim() || !form.category.trim() || !form.location.trim() || !form.description.trim()}
                    type="submit"
                    className="w-full cursor-pointer bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/80 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                >
                    {loading ? "Posting..." : "Post Job"}
                </button>

            </form>
        </div>
    )
}
