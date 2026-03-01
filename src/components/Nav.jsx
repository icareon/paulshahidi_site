import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wider text-muted hover:text-primary transition-colors"
        >
          PS
        </a>
        <div className="flex items-center gap-5 md:gap-8">
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
