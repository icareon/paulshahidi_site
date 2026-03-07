const testimonials = [
  {
    quote:
      'Paul provided mentorship to SPREAD AI as part of the German Accelerator program of the German Ministry of Economic Affairs to explore a potential market entry into the United States. Paul was an exceptional mentor throughout this process. His rare combination of deep technology, engineering, and manufacturing understanding together with sharp go-to-market expertise provided highly practical guidance at every stage. Beyond strategic advice, he enabled valuable conversations with other industry experts in the US, which significantly sharpened our perspective on the opportunities and risks of entering the market. His mentorship helped us develop a clearer view of the landscape and build an initial go-to-market strategy for the US.',
    name: 'Robert Göbel',
    title: 'Co-Founder & Managing Director',
    company: 'SPREAD AI',
  },
  {
    quote:
      'Paul combines deep technical understanding of industrial AI and manufacturing with strong product judgment. His guidance helped us sharpen our positioning for the U.S. market, particularly around how to present our backend process automation and RoHS compliance offering in a way that speaks to real customer needs. He challenged us to think in new ways about our ideal customer profile, decision-making process, and how enterprise buyers actually evaluate solutions.',
    name: 'Dr. Günther Hoffmann',
    title: 'Founder',
    company: 'LexaTexer',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Founder Feedback
            </span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              Selected feedback from teams I've worked with.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-surface border border-border-subtle p-8 md:p-10 flex flex-col"
            >
              <div className="font-mono text-signal/40 text-2xl leading-none mb-3">&ldquo;</div>
              <p className="text-sm text-accent leading-relaxed flex-1 max-w-prose">
                {t.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-border-subtle">
                <span className="text-sm font-medium text-primary block leading-tight">
                  {t.name}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-muted block mt-1">
                  {t.title}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
