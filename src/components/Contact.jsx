export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Contact
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <a
              href="mailto:info@paulshahidi.com"
              className="inline-flex items-center gap-3 font-mono text-sm text-primary hover:text-signal transition-colors group"
            >
              <span className="inline-block w-4 h-px bg-muted group-hover:w-8 group-hover:bg-signal transition-all" />
              info@paulshahidi.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <div className="section-divider" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-muted/40">
            &copy; {new Date().getFullYear()} Paul Shahidi
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted/40">
            California
          </span>
        </div>
      </div>
    </section>
  )
}
