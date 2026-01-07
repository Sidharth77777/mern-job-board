export const JOB_CATEGORIES = [
    "Design",
    "Development",
    "Marketing",
    "Finance",
    "Sales",
    "Product"
] as const

export interface Job {
  _id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface UseFetchJobsProps {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface useFetchJobsPromiseProps {
    jobs: Job[];
    loading: boolean;
    error: string | null;
    totalJobs: number
}

export interface JobFilterProps {
  category: string
  search: string
  onCategoryChange: (c: string) => void
  onSearchChange: (s: string) => void
}