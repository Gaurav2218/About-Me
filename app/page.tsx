import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-dark-border">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Portfolio. Built with Next.js & Three.js</p>
        </div>
      </footer>
    </main>
  )
}

