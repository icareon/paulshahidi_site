import { useState } from 'react'

const experiences = [
  {
    id: '01',
    name: 'Sr. Manager, Quality Analytics',
    context: 'Anduril',
    period: '2026 \u2013 Present',
    icon: '/logos/anduril.png',
    role:
      'Leading the quality analytics function, architecting AI/ML systems that accelerate the work of manufacturing quality engineers.',
    work:
      'Building analytics and ML applications that uncover patterns in production quality data and turn those patterns into algorithms and tools that enable production quality engineers to work with greater accuracy and speed. Focus on practical systems that integrate into existing manufacturing workflows.',
    outcome:
      'Establishing the quality analytics capability from the ground up. Bridging the gap between data science and manufacturing quality operations.',
  },
  {
    id: '02',
    name: 'AI/ML Product Lead, Manufacturing Quality',
    context: 'Apple',
    period: '2018 \u2013 2025',
    icon: '/logos/apple.png',
    role:
      'Progressed from ML engineer to product lead over seven years. Owned the product vision, roadmap, and cross-functional execution for AI-powered inspection robot platforms across all major product lines.',
    work:
      'Built the end-to-end strategy for automating visual quality inspection. Conducted user research with manufacturing quality engineers, contract manufacturers, and suppliers to prioritize features. Architected AI inspection agents that analyze quality data, make pass/fail decisions, and trigger corrective actions. Defined hardware and software integration requirements and managed the full lifecycle from concept through production deployment.',
    outcome:
      'Inspection strategy achieved 150x automation of manual labor headcount. Delivered industry-leading false negative rates below 0.5% using FMEA-guided AI training methodology. Established quality metrics framework with 95%+ algorithm accuracy in production.',
  },
  {
    id: '03',
    name: 'AI/ML Research Scientist',
    context: 'PARC',
    period: '2016 \u2013 2017',
    icon: '/logos/parc.png',
    role:
      'Research scientist focused on data-driven machine learning for cyber-physical systems and safety-sensitive transportation applications.',
    work:
      'Analytics and predictive modeling for complex physical systems. Published 4 papers, presented at 3 professional conferences, led panel discussions, and delivered 10+ client presentations. Coordinated across engineering, applied science, and marketing teams.',
    outcome:
      'Research contributed to innovative AI-driven solutions for industry and government applications. Won 1st place at the ASME Grand Challenge Competition.',
  },
  {
    id: '04',
    name: 'ML Engineer, Predictive Maintenance',
    context: 'Amsted Rail',
    period: '2011 \u2013 2016',
    icon: '/logos/amstedrail.png',
    role:
      'Developed machine learning algorithms for predictive maintenance of safety-critical railroad components using MEMS sensor data.',
    work:
      'Built on-board signal processing and ML algorithms to detect failure in wheels, bearings, and motors from sensor data collected in real operating conditions. Coded industry-first solutions for component failure detection using machine learning. Established KPIs for measuring algorithm effectiveness and lifecycle management.',
    outcome:
      'Published research awarded Best Paper Applied by the Prognostics and Health Management Society. Algorithms deployed for monitoring safety-sensitive train components in the field.',
  },
  {
    id: '05',
    name: 'Startup Mentor',
    context: 'German Accelerator / Start2 Group',
    period: '2023 \u2013 Present',
    icon: '/logos/germanaccelerator.png',
    role:
      'Lead mentor for German deep-tech and AI startups entering the US market.',
    work:
      'Coaching 10+ founders on product vision, product strategy, roadmap development, competitive positioning, and fundraising. Leading product-market fit validation and go-to-market planning. Advising across quantum sensing, robotics, computer vision, engineering AI, and cleantech.',
    outcome:
      'Helped startups refine positioning and enter the US market. Recognized as expert judge for industrial AI and selected for the Transatlantic AI Exchange as AI Expert for Germany and USA.',
  },
]

const education = [
  {
    degree: 'LEAD Executive Education',
    school: 'Stanford University, GSB',
    year: '2022',
    icon: '/logos/stanford.png',
  },
  {
    degree: 'PhD, Mechanical Engineering',
    school: 'Virginia Tech',
    year: '2011',
    icon: '/logos/virginiatech.png',
  },
  {
    degree: 'BSc, Mechanical & Process Engineering',
    school: 'TU Darmstadt',
    year: '2007',
    icon: '/logos/tudarmstadt-icon.svg',
    lightBg: true,
  },
]

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border-subtle hover:border-neutral-700 transition-colors bg-surface">
      {/* Always-visible header */}
      <div
        className="p-7 md:p-9 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={exp.icon}
              alt={exp.context}
              className="w-8 h-8 rounded object-contain bg-surface-elevated p-0.5"
            />
            <div>
              <span className="text-base font-semibold text-primary block leading-tight">
                {exp.context}
              </span>
              <span className="font-mono text-[10px] text-muted/60">
                {exp.period}
              </span>
            </div>
          </div>
          <span className={`text-muted/60 text-xs transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
            ▾
          </span>
        </div>
        <h3 className="text-base font-semibold text-primary/90 tracking-tight mt-4">
          {exp.name}
        </h3>
        <p className="text-sm text-accent leading-relaxed mt-3">
          {exp.role}
        </p>
      </div>

      {/* Collapsible detail */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 md:px-9 pb-7 md:pb-9 space-y-5 border-t border-border-subtle pt-5">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase block mb-2">
              Work
            </span>
            <p className="text-sm text-accent leading-relaxed">
              {exp.work}
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase block mb-2">
              Outcome
            </span>
            <p className="text-sm text-accent leading-relaxed">
              {exp.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Experience &amp; Background
            </span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl">
              Key roles across manufacturing AI, product leadership,
              research, and startup mentoring.
            </p>
          </div>
        </div>

        {/* Professional Experience subsection label */}
        <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase block mb-5">
          Professional Experience
        </span>

        {/* Experience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>

        {/* Education — compact block within Experience */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border-subtle">
          <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase block mb-5">
            Education
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div key={edu.year} className="flex items-start gap-3">
                <img
                  src={edu.icon}
                  alt={edu.school}
                  className={`w-6 h-6 rounded object-contain p-0.5 mt-0.5 ${edu.lightBg ? 'bg-white/90' : 'bg-surface-elevated'}`}
                />
                <div>
                  <span className="text-sm font-medium text-primary block leading-tight">
                    {edu.degree}
                  </span>
                  <span className="text-xs text-muted block mt-0.5">
                    {edu.school}
                  </span>
                  <span className="font-mono text-[10px] text-muted/50 block mt-0.5">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
