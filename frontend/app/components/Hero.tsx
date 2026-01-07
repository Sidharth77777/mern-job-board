export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center w-full">

        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Find Your Dream Job
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          Explore thousands of opportunities from companies around the world.
          Start your next career move today.
        </p>

        {/* Extras */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-sm text-muted-foreground">
          <div>
            <p className="text-2xl font-semibold text-foreground">10K+</p>
            <p>Open Positions</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">2.5K+</p>
            <p>Hiring Companies</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">Remote</p>
            <p>Work Friendly</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">Verified</p>
            <p>Job Listings</p>
          </div>
        </div>

      </div>
    </section>
  )
}
