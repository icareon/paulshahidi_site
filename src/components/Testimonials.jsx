import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Paul brought a rare combination of technical depth and practical commercial judgment to our discussions. He helped us sharpen how we position a highly technical inspection platform with major semiconductor and industrial customers, while pushing us to think through the adoption and value questions that really matter. Having access to Paul\'s perspective was highly valuable as we worked to build stronger market traction around a complex deep-tech offering.',
    name: 'Kevin Berghoff',
    title: 'CEO',
    company: 'Quantum Diamonds',
  },
  {
    quote:
      'Paul provided mentorship to SPREAD AI as part of the German Accelerator program of the German Ministry of Economic Affairs to explore a potential market entry into the United States. Paul was an exceptional mentor throughout this process. His rare combination of deep technology, engineering, and manufacturing understanding together with sharp go-to-market expertise provided highly practical guidance at every stage. Beyond strategic advice, he enabled valuable conversations with other industry experts in the US, which significantly sharpened our perspective on the opportunities and risks of entering the market. His mentorship helped us develop a clearer view of the landscape and build an initial go-to-market strategy for the US.',
    name: 'Robert Göbel',
    title: 'Co-Founder & Managing Director',
    company: 'SPREAD AI',
  },
  {
    quote:
      'For the CeiliX team it was a delight and extremely helpful to work with Paul. After having one first client in the US, we were in the process of expanding our US sales and refining our sales approach. Paul hereby had invaluable advice on our product positioning, pricing, and the best ways to interact with large US corporations. With the support of Paul\'s advice, we managed to secure one large US key account already during the program and are in the process of achieving further sales.',
    name: 'Mathias Entenmann',
    title: 'CEO',
    company: 'CeiliX',
  },
  {
    quote:
      'Paul combines deep technical understanding of industrial AI and manufacturing with strong product judgment. His guidance helped us sharpen our positioning for the U.S. market, particularly around how to present our backend process automation and RoHS compliance offering in a way that speaks to real customer needs. He challenged us to think in new ways about our ideal customer profile, decision-making process, and how enterprise buyers actually evaluate solutions.',
    name: 'Dr. Günther Hoffmann',
    title: 'Founder',
    company: 'LexaTexer',
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="relative bg-surface border border-border-subtle p-8 md:p-10 flex flex-col">
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
  )
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false)

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

        {/* Testimonial cards — first 2 always visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.slice(0, 2).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Remaining cards — hidden on mobile until toggled */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5${
          showAll ? '' : ' hidden md:grid'
        }`}>
          {testimonials.slice(2).map((t, i) => (
            <TestimonialCard key={i + 2} t={t} />
          ))}
        </div>

        {/* Mobile toggle */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 md:hidden group flex items-center gap-2 font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase"
          >
            <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-primary transition-all duration-200" />
            Show all ({testimonials.length - 2} more)
          </button>
        )}
      </div>
    </section>
  )
}
