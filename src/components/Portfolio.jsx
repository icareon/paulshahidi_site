import { useState } from 'react'

const startups = [
  {
    name: 'Quantum Diamonds',
    icon: null,
    logo: '/logos/quantumdiamonds_wordmark.png',
    logoStyle: 'favicon',
    website: 'https://www.quantumdiamonds.de',
    status: 'Completed',
    industry: 'Quantum Sensing / Semiconductor',
    location: 'Munich, Germany',
    brief: 'Diamond-based quantum microscopy for semiconductor chip failure analysis.',
    description:
      'Develops QDM systems using nitrogen-vacancy centers in diamond to non-destructively map electrical currents inside chip packages with micrometer precision. Completed proof-of-concept projects with 9 of the 10 largest chip manufacturers. Announced a \u20AC152M investment plan for a Munich production facility under the European Chips Act.',
    highlights: [
      'First commercial quantum device for semiconductor failure analysis',
      'Deployments in US, Europe & Taiwan',
    ],
  },
  {
    name: 'SPREAD AI',
    icon: null,
    logo: '/logos/spread.png',
    logoStyle: 'invert',
    website: 'https://www.spread.ai',
    status: 'Completed',
    industry: 'Engineering Intelligence / AI',
    location: 'Berlin, Germany',
    brief: 'AI-powered Product Twins transforming scattered engineering data into actionable intelligence.',
    description:
      'Engineering Intelligence platform connects structured and unstructured product data, enabling engineers and AI agents to share system-level understanding of complex products. Trusted by Mercedes-Benz, Volkswagen, Porsche, and Rheinmetall.',
    highlights: [
      'Raised \u20AC14.6M Series A led by HV Capital',
      'All German automakers as customers',
    ],
  },
  {
    name: 'MotionMiners',
    icon: null,
    logo: '/logos/motionminers.svg',
    logoStyle: 'default',
    website: 'https://www.motionminers.com',
    status: 'Completed',
    industry: 'Process Analytics / Wearable IoT',
    location: 'Dortmund, Germany',
    brief: 'Automated process analysis of manual work using wearable sensors and ML.',
    description:
      'Motion-Mining\u00AE technology anonymously captures movement and activity data via wearable sensors and radio transmitters, enabling efficiency and ergonomics optimization in production and logistics. Fraunhofer IML spin-off.',
    highlights: [
      'Partnerships with DHL, DB Schenker, Rhenus',
      'Automated alternative to traditional MTM/REFA methods',
    ],
  },
  {
    name: 'CeiliX',
    icon: null,
    logo: '/logos/ceilix.png',
    logoStyle: 'default',
    website: 'https://ceilix.com',
    status: 'Completed',
    industry: 'Robotics / Industrial Automation',
    location: 'Euskirchen, Germany',
    brief: 'Overhead mobility systems moving automation from floor to ceiling.',
    description:
      'Patented InfinityCrane enables omnidirectional, unrestricted movement along ceiling-mounted track systems. In collaboration with Kassow Robots by Bosch Rexroth, their Mobile Ceiling-Cobot creates up to 50% additional floor space in production and logistics facilities.',
    highlights: [
      'North American debut at Automate 2025',
      'Partnership with Bosch Rexroth / Kassow Robots',
    ],
  },
  {
    name: 'LexaTexer',
    icon: null,
    logo: '/logos/lexatexer.png',
    logoStyle: 'favicon',
    website: 'https://www.lexatexer.com',
    status: 'Active',
    industry: 'Enterprise AI / Compliance',
    location: 'Berlin, Germany',
    brief: 'AI-driven audit and compliance automation across industries.',
    description:
      'Platform automates evidence collection and reporting for RoHS, WEEE, ISO 27001, NIST, and COBIT standards. Originally focused on predictive analytics for automotive OEMs and tier-1 suppliers, expanded to compliance automation across aerospace, maritime, and defense.',
    highlights: [
      'Increased OEE by 3-17% for automotive clients',
      'Operations in Germany, Singapore & Southeast Asia',
    ],
  },
  {
    name: 'Red Cable Robots',
    icon: null,
    logo: '/logos/redcablerobots.png',
    logoStyle: 'favicon',
    website: 'https://www.redcablerobots.com',
    status: 'Active',
    industry: 'Robotics / Intralogistics',
    location: 'Duisburg, Germany',
    brief: 'Industrial cable robots for large-area automation.',
    description:
      'Cable robot system moves objects with millimeter precision across workspaces the size of a tennis court. Enables automation in spaces where conventional robots cannot operate cost-effectively -- palletizing, machine tending, and material handling across multiple stations with a single system.',
    highlights: [
      'Top 50 Slush startup by General Catalyst & Cherry Ventures',
      'University of Duisburg-Essen spin-off',
    ],
  },
  {
    name: 'Wahtari',
    icon: null,
    logo: '/logos/wahtari.png',
    logoStyle: 'default',
    website: 'https://wahtari.io',
    status: 'Completed',
    industry: 'Computer Vision / Edge AI',
    location: 'Munich, Germany',
    brief: 'Modular hardware and software for AI-based computer vision at the edge.',
    description:
      'Platform includes the nCam AI-powered smart camera, nGin SDK, and Linux-based nOS for building custom vision applications. Specializes in optical quality inspection, license plate recognition, and industrial quality control -- all running AI at the edge with end-to-end encryption.',
    highlights: [
      'Hardware + software platform for edge AI vision',
      'Docker-based app ecosystem',
    ],
  },
  {
    name: 'ANNEA',
    icon: null,
    logo: '/logos/annea.png',
    logoStyle: 'favicon',
    website: 'https://annea.ai',
    status: 'Completed',
    industry: 'Cleantech / Predictive Maintenance',
    location: 'Hamburg, Germany',
    brief: 'AI-based predictive maintenance for renewable energy assets.',
    description:
      'Platform creates digital twins using existing sensor data to predict malfunctions up to 12 months ahead with 99.9% accuracy on remaining useful lifetime predictions. Combines machine learning with physics-based modeling for wind turbines, solar farms, and hydroelectric plants.',
    highlights: [
      'Predicted malfunctions 12 months ahead',
      'German Accelerator Southeast Asia AI Track',
    ],
  },
  {
    name: 'Myos',
    icon: null,
    logo: '/logos/myos.png',
    logoStyle: 'favicon',
    website: 'https://myos.com',
    status: 'Completed',
    industry: 'Fintech / E-commerce Lending',
    location: 'Berlin, Germany',
    brief: 'AI-based working capital for online merchants, secured by products not people.',
    description:
      'AI lending platform evaluates the products merchants sell rather than traditional borrower-centric data to issue fast, flexible loans of up to \u20AC1M without personal guarantees. Monitors product pricing, sales performance, and marketplace competition to assess risk.',
    highlights: [
      'Raised \u20AC25M Series A led by Fasanara Capital',
      'Tripled loan portfolio to \u20AC30M+',
    ],
  },
]

function LogoDisplay({ startup }) {
  if (startup.logo) {
    const isFavicon = startup.logoStyle === 'favicon'
    const isWordmark = !isFavicon && startup.logoStyle !== 'invert'
    return (
      <div className={`flex items-center justify-center ${
        isFavicon ? 'h-8 w-8' : 'h-8 max-w-[140px]'
      }`}>
        <img
          src={startup.logo}
          alt={`${startup.name} logo`}
          className={`object-contain ${
            isFavicon
              ? 'h-8 w-8 rounded bg-surface-elevated p-0.5'
              : 'h-full w-full'
          } ${startup.logoStyle === 'invert' ? 'invert brightness-200' : ''}`}
        />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center h-8 w-8 rounded bg-surface-elevated text-lg">
      {startup.icon}
    </div>
  )
}

function StartupCard({ startup }) {
  const [expanded, setExpanded] = useState(false)

  const handleCardClick = (e) => {
    // Don't toggle if clicking a link (name/logo)
    if (e.target.closest('a')) return
    setExpanded(!expanded)
  }

  // Only use hover expand/collapse for true mouse devices
  const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

  return (
    <div
      className="group relative bg-surface border border-border-subtle hover:border-neutral-700 transition-all cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={canHover ? () => setExpanded(true) : undefined}
      onMouseLeave={canHover ? () => setExpanded(false) : undefined}
    >
      <div className="p-6 md:p-8 space-y-4">
        {/* Header: logo + status */}
        <div className="flex items-start justify-between gap-4">
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <LogoDisplay startup={startup} />
          </a>
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase shrink-0 ${
              startup.status === 'Active' ? 'text-emerald-500' : 'text-sky-500'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                startup.status === 'Active'
                  ? 'bg-emerald-500 pulse-subtle'
                  : 'bg-sky-500'
              }`}
            />
            {startup.status}
          </span>
        </div>

        {/* Name — clickable link */}
        <a
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-semibold text-primary tracking-tight hover:text-signal transition-colors">
            {startup.name}
          </h3>
        </a>

        {/* Industry + Location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
            {startup.industry}
          </span>
          <span className="text-neutral-700">|</span>
          <span className="font-mono text-[10px] tracking-wider text-neutral-600">
            {startup.location}
          </span>
        </div>

        {/* Brief */}
        <p className="text-sm text-accent leading-relaxed">
          {startup.brief}
        </p>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="font-mono text-[10px] tracking-wider text-muted/60 uppercase">
            {expanded ? 'Less' : 'Details'}
          </span>
          <span className={`text-muted/60 text-xs transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
            ▾
          </span>
        </div>

        {/* Expanded detail */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 border-t border-border-subtle space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              {startup.description}
            </p>
            {startup.highlights.length > 0 && (
              <ul className="space-y-1">
                {startup.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                    <span className="inline-block w-1 h-1 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-800 group-hover:border-neutral-600 transition-colors" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all'
      ? startups
      : startups.filter((s) => s.status.toLowerCase() === filter)

  const activeCount = startups.filter((s) => s.status === 'Active').length
  const completedCount = startups.filter((s) => s.status === 'Completed').length

  return (
    <section id="portfolio" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Portfolio
            </span>
          </div>
          <div className="lg:col-span-9 space-y-4">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              As lead mentor at German Accelerator / Start2 Group, I advise
              German deep-tech and AI startups on product-market fit, US
              market entry, go-to-market strategy, and commercial scaling.
              These are the companies I work with.
            </p>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-4 mb-10">
          {[
            ['all', `All (${startups.length})`],
            ['active', `Active (${activeCount})`],
            ['completed', `Completed (${completedCount})`],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`font-mono text-xs tracking-wider uppercase px-3 py-1.5 border transition-colors ${
                filter === value
                  ? 'border-neutral-500 text-primary'
                  : 'border-border-subtle text-muted hover:text-primary hover:border-neutral-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Startup grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle">
          {filtered.map((startup) => (
            <StartupCard key={startup.name} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  )
}
