import { useState } from 'react'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              About
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-6 text-accent leading-relaxed text-base md:text-lg">
            <p>
              I build AI/ML quality systems for high-volume
              manufacturing, where performance is predicated on robustness
              against variability, throughput pressure, and continuous change.
              My work is focused on combining operational metrics, AI-guided
              vision systems, and predictive maintenance into production
              platforms that turn sensing and factory data into decisions
              engineers trust.
            </p>
            <p>
              At Anduril, I lead quality analytics, architecting systems that
              help manufacturing teams surface patterns early and translate
              them into applications that improve accuracy and execution on
              the factory floor.
            </p>

            {/* Collapsible remainder */}
            <div
              className={`space-y-6 overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p>
                At Apple, I scaled AI inspection from concept to production
                impact, achieving &lt;0.5% false negative rates in
                safety-critical detection and sustaining 95%+ production accuracy
                with measurement and governance that hold under real operational
                drift. The result was consumer-electronics manufacturing quality
                that approaches aerospace-grade expectations: high confidence,
                low escape risk, and stability at scale.
              </p>
              <p>
                Rethinking manufacturing around a resilient domestic industrial
                base is the imperative guiding my work. Point solutions and
                isolated models are no longer enough. The next generation
                will be built on AI-native factories where AI is the native
                operating intelligence: always-on perception and learning that
                drives high-efficiency execution and keeps quality and throughput
                stable as conditions change.
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="group flex items-center gap-2 font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase"
            >
              <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
              {expanded ? 'Less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
