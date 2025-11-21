'use client'

import { motion } from 'framer-motion'
import GlitchText from './GlitchText'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with cross-functional teams.',
    tech: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2019 - 2020',
    description: 'Created engaging user interfaces for various clients. Worked closely with designers to implement pixel-perfect designs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Work Experience"
            className="text-5xl md:text-6xl font-bold mb-4"
            neonColor="cyan"
          />
          <div className="w-24 h-1 bg-neon-cyan mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-blue"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="glass rounded-lg p-6 border border-neon-cyan/20 hover:border-neon-cyan transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl text-neon-cyan font-semibold">{exp.title}</h3>
                      <span className="text-sm text-neon-magenta">{exp.period}</span>
                    </div>
                    <p className="text-neon-blue mb-3 font-medium">{exp.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm border border-neon-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full border-2 border-dark-bg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

