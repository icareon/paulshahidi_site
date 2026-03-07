import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import Work from './components/Work'
import Thinking from './components/Thinking'
import Philosophy from './components/Philosophy'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <Nav />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Portfolio />
        <Testimonials />
        <Work />
        <Philosophy />
        <Thinking />
        <Contact />
      </main>
    </div>
  )
}
