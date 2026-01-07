import { JOB_CATEGORIES, JobFilterProps } from "@/lib/types"
import { Search } from "lucide-react"

export default function CategoryFilter({
  category,
  search,
  onCategoryChange,
  onSearchChange,
}: JobFilterProps) {
  return (
    <section className="md:static sticky top-16 z-30 bg-background pb-5">
      <div className="max-w-7xl mx-auto py-4 flex flex-col gap-4">

        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search job title or company..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onCategoryChange("")}
            className={`px-4 py-1.5 rounded-full text-sm ${
              category === ""
                ? "bg-primary cursor-pointer text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            All
          </button>

          {JOB_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => onCategoryChange(c)}
              className={`px-4 py-1.5 rounded-full cursor-pointer text-sm transition ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
