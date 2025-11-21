'use client'

import { motion } from 'framer-motion'
import GlitchText from './GlitchText'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlitchText
            text="About Me"
            className="text-5xl md:text-6xl font-bold mb-4"
            neonColor="magenta"
          />
          <div className="w-24 h-1 bg-neon-magenta mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-lg p-8 border border-neon-cyan/20"
          >
            <h3 className="text-2xl text-neon-cyan mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for creating innovative
              digital solutions. My journey in tech has been driven by curiosity and a
              desire to push the boundaries of what's possible.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications with cutting-edge
              technologies, focusing on performance, user experience, and clean code.
              When I'm not coding, I'm exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-lg p-8 border border-neon-magenta/20"
          >
            <h3 className="text-2xl text-neon-magenta mb-4">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-neon-cyan mr-3">▹</span>
                <span>Design and develop scalable web applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-3">▹</span>
                <span>Create responsive and intuitive user interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-3">▹</span>
                <span>Optimize applications for performance and SEO</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-3">▹</span>
                <span>Collaborate with teams to deliver exceptional products</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-3">▹</span>
                <span>Stay updated with the latest industry trends</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

