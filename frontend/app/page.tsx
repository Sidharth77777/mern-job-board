import Hero from "./components/Hero";
import CategoryFilter from "./components/JobFilter";
import JobList from "./components/JobList";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      <Hero />
      <JobList />
    </main>
  )
}
