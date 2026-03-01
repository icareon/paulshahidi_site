import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Focus', '#focus'],
    ['Portfolio', '#portfolio'],
    ['Experience', '#work'],
    ['Thinking', '#thinking'],
    ['Contact', '#contact'],
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-surface/90 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wider text-muted hover:text-primary transition-colors shrink-0"
        >
          PS
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-muted transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-5 h-px bg-muted transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-muted transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 pb-6 flex flex-col gap-4">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-wider text-muted hover:text-primary transition-colors uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
