const takeaways = [
  {
    org: 'Safran',
    speaker: 'Jennifer Vandoni',
    text: 'Noisy-label robust learning on aerospace composites — +53% accuracy at 40% label noise. Certification-ready AI is closer than you\'d think.',
  },
  {
    org: 'Rapiscan',
    speaker: 'Dan Cristian Dinca',
    text: 'AI-powered X-ray screening that generalises to threats it\'s never seen. Synthetic data is finally unlocking security imaging.',
  },
  {
    org: 'Samsung Semiconductor',
    speaker: 'Minjun Song',
    text: 'Hyperspectral imaging as the missing layer in semiconductor fabs. RGB just isn\'t enough.',
  },
  {
    org: 'AnomalyVFM',
    speaker: 'Matic Fučka et al.',
    text: 'Zero-shot anomaly detection with no target images needed. LoRA inside attention is a clean fix that will be widely adopted.',
  },
  {
    org: 'Boeing',
    speaker: 'Amir Afrasiabi',
    text: 'Self-validating AR trained on CAD composites before touching the factory floor. US Patent 12,530,856. Applied AI at scale.',
  },
]

export default function CVPR2026() {
  return (
    <section id="cvpr2026" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              CVPR 2026
            </span>
          </div>
          <div className="lg:col-span-9 space-y-3">
            <p className="text-primary text-lg font-semibold tracking-tight">
              VISION'26 — Workshop on Vision-Based Industrial Inspection
            </p>
            <p className="text-accent text-base leading-relaxed max-w-2xl">
              Nine presentations at the frontier of AI, computer vision, and industrial quality control — from aerospace to semiconductors.
              Denver, Colorado · June 3–7, 2026.
            </p>
          </div>
        </div>

        {/* Conclusion card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10">
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] tracking-wider text-muted/50 uppercase">
              Takeaways
            </span>
          </div>
          <div className="lg:col-span-9">
            <div className="bg-surface-elevated border border-border-subtle p-6 md:p-8 space-y-5 relative">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-700" />

              <p className="text-sm text-muted leading-relaxed">
                Spent the day at VISION'26 — the Workshop on Vision-Based Industrial Inspection at CVPR 2026 in Denver. Nine talks, a lot of signal.
              </p>

              <ul className="space-y-3">
                {takeaways.map(({ org, speaker, text }) => (
                  <li key={org} className="flex items-start gap-3">
                    <span className="inline-block w-1 h-1 rounded-full bg-neutral-600 mt-[6px] shrink-0" />
                    <p className="text-sm text-muted leading-relaxed">
                      <span className="text-primary font-medium">{org}</span>
                      <span className="text-muted/60 font-mono text-[10px] ml-1.5">({speaker})</span>
                      {' — '}
                      {text}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-accent leading-relaxed pt-1 border-t border-border-subtle">
                The common thread: foundation models are landing in factories, fabs, and hangars — but the hard work is in the data, the domain, and the deployment.
              </p>
            </div>

            {/* Link to full notes */}
            <div className="mt-6">
              <a
                href="/cvpr-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase"
              >
                <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
                View Full Workshop Notes — 9 Presentations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
