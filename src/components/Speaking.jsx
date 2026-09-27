const entries = [
  {
    year: '2026',
    item: "Invited speaker, VISION'26 Workshop on Vision-Based Industrial Inspection, CVPR 2026, Denver",
    link: '/cvpr-2026/index.html',
  },
  {
    year: '2025',
    item: 'AI Expert for Germany and the United States, Transatlantic AI Exchange',
  },
  {
    year: '2023–',
    item: 'Expert judge, industrial AI, German Accelerator / Start2 Group',
  },
  {
    year: '2016',
    item: 'First place, ASME Grand Challenge Competition',
  },
  {
    year: '2015',
    item: 'Best Paper, Applied, Prognostics and Health Management Society',
  },
]

export default function Speaking() {
  return (
    <section id="speaking" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Speaking &amp; Recognition
            </span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              Talks, advisory roles, and awards.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="space-y-0">
          {entries.map((entry, i) => {
            const content = (
              <>
                <span className="font-mono text-xs text-muted/50 shrink-0">
                  {entry.year}
                </span>
                <span className="text-sm md:text-base text-accent leading-relaxed">
                  {entry.item}
                </span>
              </>
            )
            return (
              <div
                key={i}
                className="grid grid-cols-[4rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 py-5 border-b border-border-subtle last:border-0"
              >
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contents group"
                  >
                    <span className="font-mono text-xs text-muted/50 shrink-0">
                      {entry.year}
                    </span>
                    <span className="text-sm md:text-base text-accent leading-relaxed group-hover:text-primary transition-colors">
                      {entry.item}
                    </span>
                  </a>
                ) : (
                  content
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
