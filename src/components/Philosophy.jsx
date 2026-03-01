const observations = [
  'Industrial AI is less about model accuracy and more about integration, reliability, and change management.',
  'The best quality systems are the ones that manufacturing engineers actually use every day.',
  'A 95% accurate algorithm that runs reliably in production is worth more than a 99% accurate one that does not.',
  'Getting from prototype to production takes more organizational work than technical work.',
  'Good product strategy in manufacturing AI starts with understanding operator workflows, not model architectures.',
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
                <div key={i} className="py-5 border-b border-border-subtle last:border-0">
                  <p className="text-base md:text-lg font-light text-accent leading-relaxed">
                    {obs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
