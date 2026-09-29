import { Fragment } from 'react'

const essays = [
  {
    id: '01',
    title: 'What It Actually Takes for German Deep Tech to Scale in the US',
    date: '2026.09',
    abstract:
      "When a delegation from Germany's Federal Ministry for Economic Affairs and Energy visited Silicon Valley, I shared a few thoughts on what actually gets German deep-tech companies into the US market. My argument: introductions and funding open doors, but they don't build a business. What does is operational — finding a customer with an urgent problem, adapting the product to how Americans buy and deploy, proving its value under real conditions, and building the capability to deliver at scale. Handled well, that process does more than win a US foothold; it sharpens the company at home. This is the point of view I bring from my 15 years of experience operationalizing AI/ML algorithms for manufacturing and heavy industry applications. If you're thinking about US expansion, industrial AI, manufacturing, or defense tech, I'd welcome the conversation.",
    link: '/jaensch-visit/index.html',
    linkLabel: 'German Accelerator Briefing — Full Notes',
  },
  {
    id: '02',
    title: <>Is the Industry Finally Able to Go from Specialized Models to Zero-Shot<br />Anomaly Detection with VLM Models?</>,
    date: '2026.06',
    abstract:
      'Why most industrial vision models fail their first production deployment comes down to four compounding failure modes that define real manufacturing environments: observability limits, label taxonomy mismatches, position-dependent cost structures, and the gap between detection and corrective action. The ten talks at the workshop showed a field actively closing these gaps. Safran and Boeing demonstrated AI maturing from anomaly flagging to full material understanding and self-validating AR. Samsung and AnomalyVFM pushed on hyperspectral sensing and zero-shot detection without target images. The common thread: foundation models are landing in factories, fabs, and hangars. But the hard work is in the data, the domain, and the deployment.',
    link: '/cvpr-2026/index.html',
    linkLabel: 'CVPR 2026 — Full Workshop Notes',
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
            <Fragment key={essay.id}>
              {i > 0 && <div className="section-divider" />}
              <article className="group py-10 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted/50">
                      {essay.date}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-lg font-semibold text-primary mb-4 tracking-tight">
                      {essay.title}
                    </h3>
                    <p className="text-sm text-muted leading-loose max-w-2xl">
                      {essay.abstract}
                    </p>
                    {essay.link && (
                      <a
                        href={essay.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase mt-5"
                      >
                        <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
                        {essay.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
