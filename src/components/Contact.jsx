export default function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-20">
      <div className="section-divider mb-10 md:mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Contact
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-4">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="mailto:info@paulshahidi.com"
                className="inline-flex items-center gap-3 font-mono text-sm text-primary hover:text-signal transition-colors group"
              >
                <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-signal transition-all" />
                info@paulshahidi.com
              </a>
              <a
                href="https://www.linkedin.com/in/pshahidi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-sm text-primary hover:text-signal transition-colors group"
              >
                <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-signal transition-all" />
                LinkedIn
              </a>
            </div>
            <p className="font-mono text-xs tracking-wider text-muted">
              Irvine, California &middot; U.S. Citizen
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <div className="section-divider" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted/40">
            &copy; {new Date().getFullYear()} Paul Shahidi
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/pshahidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest text-muted/40 hover:text-muted transition-colors"
            >
              LinkedIn
            </a>
            <span className="font-mono text-[10px] tracking-widest text-muted/40">
              Irvine, California &middot; U.S. Citizen
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
