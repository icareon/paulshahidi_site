export default function About() {
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
              manufacturing&mdash;where performance is predicated on robustness
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
            <p>
              At Apple, I scaled AI inspection from concept to production
              impact&mdash;achieving &lt;0.5% false negative rates in
              safety-critical detection and sustaining 95%+ production accuracy
              with measurement and governance that hold under real operational
              drift. The result was consumer-electronics manufacturing quality
              that approaches aerospace-grade expectations: high confidence,
              low escape risk, and stability at scale.
            </p>
            <p>
              Rethinking manufacturing around a resilient domestic industrial
              base is the imperative guiding my work. Point solutions and
              isolated models are no longer enough&mdash;the next generation
              will be built on AI-native factories where AI is the native
              operating intelligence: always-on perception and learning that
              drives high-efficiency execution and keeps quality and throughput
              stable as conditions change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
