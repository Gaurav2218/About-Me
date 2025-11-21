'use client'

import { motion } from 'framer-motion'
import GlitchText from './GlitchText'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-400' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-dark-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Skills & Technologies"
            className="text-5xl md:text-6xl font-bold mb-4"
            neonColor="blue"
          />
          <div className="w-24 h-1 bg-neon-blue mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-lg p-6 border border-neon-blue/20 hover:border-neon-blue transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-gray-300 group-hover:text-neon-blue transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

