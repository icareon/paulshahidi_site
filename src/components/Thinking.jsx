const essays = [
  {
    id: '01',
    title: 'The Gap Between ML Prototype and Production System',
    date: '2025.03',
    abstract:
      'Most industrial AI projects stall not because the model does not work, but because the effort required to integrate it into existing production workflows, data pipelines, and operator processes is consistently underestimated. The engineering is often the smaller challenge.',
  },
  {
    id: '02',
    title: 'What Product Thinking Brings to Manufacturing AI',
    date: '2025.01',
    abstract:
      'The manufacturing AI space has plenty of technical capability and not enough product discipline. User research, iterative prioritization, and understanding what quality engineers actually need day-to-day matters more than model sophistication.',
  },
  {
    id: '03',
    title: 'Lessons from Mentoring Deep-Tech Startups',
    date: '2024.09',
    abstract:
      'Working with German deep-tech founders entering the US market has reinforced a consistent pattern: the technology is rarely the bottleneck. Positioning, go-to-market timing, and understanding buyer workflows are where most startups need the most help.',
  },
]

export default function Thinking() {
  return (
    <section id="thinking" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Thinking
            </span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              Notes on manufacturing AI, product strategy, and the
              operational realities of deploying ML in production.
            </p>
          </div>
        </div>

        {/* Essays */}
        <div className="space-y-0">
          {essays.map((essay, i) => (
            <div key={essay.id}>
              {i > 0 && <div className="section-divider" />}
              <article className="group py-8 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted/50">
                      {essay.date}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-lg font-semibold text-primary mb-3 tracking-tight">
                      {essay.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-2xl">
                      {essay.abstract}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
