import { useState } from 'react'

const observations = [
  'Industrial AI is less about model accuracy and more about integration, reliability, and change management.',
  'The best quality systems are the ones that manufacturing engineers actually use every day.',
  'A 95% accurate algorithm that runs reliably in production is worth more than a 99% accurate one that does not.',
  'Getting from prototype to production takes more organizational work than technical work.',
  'Good product strategy in manufacturing AI starts with understanding operator workflows, not model architectures.',
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
