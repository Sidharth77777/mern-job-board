import { MapPin } from "lucide-react"
import { Job } from "@/lib/types"
import { timeAgo } from "@/lib/time"

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="group bg-card border border-border rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary cursor-pointer">

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition">
            {job.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {job.company}
          </p>
        </div>

        <span className="shrink-0 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          {job.category}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground mt-6">

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{job.location}</span>
        </div>

        <span className="text-xs opacity-70">
          {timeAgo(job.createdAt)}
        </span>

      </div>
    </div>
  )
}
