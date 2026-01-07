import { z } from "zod"

export const JOB_CATEGORIES = [
    "Design",
    "Development",
    "Marketing",
    "Finance",
    "Sales",
    "Product"
] as const

// Validation for job form
export const jobFormSchema = z.object({
    title: z.string().min(2, "Title too short").max(50, "Title too long"),
    company: z.string().min(1, "Company name too short").max(60, "Company name too long"),
    category: z.enum(JOB_CATEGORIES, {
        error: () => ({
            message: `Category must be one of ${JOB_CATEGORIES.map(c => `'${c}'`).join(", ")}`
        })
    }),
    location: z.string().min(2, "Location too short").max(120, "Location too long"),
    description: z.string().min(2, "Description too short")
}) 