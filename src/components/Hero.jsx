export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Grid overlay on top of background */}
      <div className="absolute inset-0 z-[1] grid-overlay pointer-events-none" />

      {/* Signal traces */}
      <div className="absolute top-[30%] left-0 right-0 h-px overflow-hidden pointer-events-none z-[2]">
        <div className="h-px bg-signal/30 signal-line w-56" />
      </div>
      <div className="absolute top-[55%] left-0 right-0 h-px overflow-hidden pointer-events-none z-[2]">
        <div className="h-px bg-signal/20 signal-line-delayed w-40" />
      </div>
      <div className="absolute top-[78%] left-0 right-0 h-px overflow-hidden pointer-events-none z-[2]">
        <div className="h-px bg-signal/12 signal-line w-32" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-[3] max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 md:pb-32">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-none">
            Paul Shahidi
          </h1>

          {/* Positioning */}
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-accent tracking-tight max-w-3xl leading-snug">
              I build applied production AI systems.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted tracking-tight mt-2 md:mt-3">
              The hard part is never the model.
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted max-w-2xl md:max-w-4xl leading-relaxed">
            Fifteen years turning machine learning into systems people
            actually use. At Apple I led AI inspection from first prototype
            to production across flagship product lines, cutting manual
            inspection labor by orders of magnitude while holding false
            negatives near zero. At Anduril I lead the AI and analytics
            function for manufacturing quality. Along the way I have advised
            ten deep tech startups on bringing industrial AI to market and
            spoken at CVPR on why most of it fails its first deployment.
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8">
            {[
              ['Focus', '#focus'],
              ['Portfolio', '#portfolio'],
              ['Experience', '#work'],
              ['Thinking', '#thinking'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="group flex items-center gap-2 font-mono text-sm text-muted hover:text-primary transition-colors"
              >
                <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
