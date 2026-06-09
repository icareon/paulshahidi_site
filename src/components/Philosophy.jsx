import { useState } from 'react'

const observations = [
  'The imaging hardware determines the ceiling. A model cannot detect what the optics cannot resolve. Getting from 95% surface coverage to 99.5% costs more than the first 95% combined.',
  'Manufacturing defect taxonomies are organized by root cause. Vision models learn from appearance. That mismatch is responsible for more failed deployments than any architecture choice.',
  'Where in the line you inspect changes what the model must do. Upstream stations optimize for recall. Downstream stations, after hours of assembly, cannot afford the same operating point.',
  'Detection without loop closure is a quality gate, not a quality system. The value comes when inspection is connected to root-cause attribution and corrective action.',
  'A model that works at one factory and fails at another is not a model problem. It is a generalization problem the field has not solved. That is the reason industrial AI stays in pilots.',
]

export default function Philosophy() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="philosophy" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Perspective
            </span>
          </div>

          {/* Observations */}
          <div className="lg:col-span-9">
            <div className="space-y-0">
              {observations.map((obs, i) => (
                <div
                  key={i}
                  className={`py-6 md:py-7 border-b border-border-subtle last:border-0 ${
                    !showAll && i >= 3 ? 'hidden md:block' : ''
                  }`}
                >
                  <p className="text-base md:text-lg font-light text-accent leading-loose max-w-2xl">
                    {obs}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile toggle for additional observations */}
            {!showAll && observations.length > 3 && (
              <button
                onClick={() => setShowAll(true)}
                className="md:hidden group flex items-center gap-2 font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase mt-4"
              >
                <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
                Show all
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
