const areas = [
  {
    title: 'AI-Powered Visual Inspection',
    id: '01',
    description:
      'Building and deploying computer vision systems for automated quality inspection in high-volume manufacturing. This includes defect detection, pass/fail classification, and integration with robotic inspection platforms. The practical challenge is less about model accuracy in isolation and more about maintaining performance across product variants, lighting conditions, and the realities of a production line running 24/7.',
  },
  {
    title: 'Predictive Maintenance & Prognostics',
    id: '02',
    description:
      'Developing ML algorithms that use sensor data -- vibration, current, temperature, acoustic signals -- to detect component degradation before failure occurs. I have worked on this in both rail transportation (MEMS-based on-board monitoring) and manufacturing settings. The practical constraint is always the same: models need to be sensitive enough to catch real issues without generating false alarms that erode operator trust.',
  },
  {
    title: 'Manufacturing Quality Analytics',
    id: '03',
    description:
      'Using data from production systems to identify quality patterns, root causes, and process drift. This means building analytics platforms and AI applications that quality engineers actually use day-to-day -- not dashboards that look good in a demo but get ignored in practice. Good quality analytics requires understanding both the data pipeline and the decisions the data needs to support.',
  },
  {
    title: 'ML Deployment in Production',
    id: '04',
    description:
      'Managing the full lifecycle of ML systems from development through production deployment. Data pipeline setup, algorithm validation, execution time optimization, reliability testing, and quality metric frameworks. The gap between a working prototype and a production system is where most industrial AI projects stall. Closing that gap requires as much project management and cross-functional coordination as it does engineering.',
  },
  {
    title: 'Product Strategy for Industrial AI',
    id: '05',
    description:
      'Translating technical capabilities into product roadmaps that balance user needs with business objectives. This includes user research with manufacturing quality engineers, PRD development, feature prioritization, and cross-functional execution. I have done this both internally at scale and externally through startup mentoring, helping founders validate product-market fit and develop go-to-market strategies.',
  },
]

export default function FocusAreas() {
  return (
    <section id="focus" className="relative py-20">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Focus Areas
            </span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              Areas where I have direct, hands-on experience building and
              deploying systems in production.
            </p>
          </div>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
          {areas.map((area) => (
            <div
              key={area.id}
              className="relative bg-surface p-8 md:p-10 group hover:bg-surface-elevated transition-colors"
            >
              <div className="font-mono text-[11px] tracking-widest text-muted/50 mb-4">
                {area.id}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-4 tracking-tight">
                {area.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
              <div className="corner-accent absolute" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
