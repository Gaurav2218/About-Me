import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className="pb-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-dark-card/80 border border-slate-800 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-slate-400 text-xs font-mono tracking-wide">
            © {new Date().getFullYear()} Gaurav Sharma. System Active.
          </p>
        </div>
      </div>
    </main>
  )
}
