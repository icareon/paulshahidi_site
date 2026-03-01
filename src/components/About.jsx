export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              About
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-6 text-accent leading-relaxed text-base md:text-lg">
            <p>
              I started in mechanical engineering at TU Darmstadt, earned a
              PhD at Virginia Tech, and spent the first part of my career
              building ML-based predictive maintenance systems for railroad
              safety components at Amsted Rail. That work -- MEMS sensor data,
              on-board signal processing, failure detection for wheels,
              bearings, and motors -- taught me what it means to deploy
              algorithms where the operating environment does not cooperate.
            </p>
            <p>
              From there I moved to PARC, working on data-driven machine
              learning for cyber-physical systems and safety-sensitive
              transportation. Then to Apple, where over seven years I
              progressed from ML engineer to product lead for AI/ML in
              manufacturing quality. I built the product vision and roadmap
              for AI-powered inspection robot platforms across iPhone, Watch,
              Mac, iPad, and Vision Pro -- taking systems from whiteboard
              concepts through deployment at production scale.
            </p>
            <p>
              Currently at Anduril, I lead quality analytics as a senior
              manager, architecting AI/ML systems that help manufacturing
              quality engineers uncover patterns in production data and turn
              those patterns into applications that improve accuracy and
              decision-making on the factory floor.
            </p>
            <p>
              Outside of full-time work, I mentor deep-tech startups through
              the German Accelerator / Start2 Group, advising founders on
              product-market fit, US market entry, and go-to-market strategy.
              I also completed the Stanford GSB LEAD executive program and
              have served as a PhD committee member and adjunct professor.
            </p>
            <p>
              Most of my career has been about the same thing: getting AI to
              work reliably in manufacturing environments where the gap
              between a demo and a deployed system is large, and where the
              cost of getting it wrong is measured in real production impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
