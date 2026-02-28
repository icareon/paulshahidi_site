export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-overlay">
      {/* Subtle signal traces */}
      {/* Signal traces */}
      <div className="absolute top-[30%] left-0 right-0 h-px overflow-hidden pointer-events-none">
        <div className="h-px bg-signal/30 signal-line w-56" />
      </div>
      <div className="absolute top-[55%] left-0 right-0 h-px overflow-hidden pointer-events-none">
        <div className="h-px bg-signal/20 signal-line-delayed w-40" />
      </div>
      <div className="absolute top-[78%] left-0 right-0 h-px overflow-hidden pointer-events-none">
        <div className="h-px bg-signal/12 signal-line w-32" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-32">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-none">
            Paul Shahidi
          </h1>

          {/* Positioning */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-accent tracking-tight max-w-3xl leading-snug">
            AI/ML product leader for manufacturing quality.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            14+ years building AI-powered inspection, predictive maintenance,
            and quality analytics systems in production environments. From
            sensor-level algorithms to product strategy at scale.
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8">
            {[
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
