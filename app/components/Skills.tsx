'use client'

import { motion } from 'framer-motion'
import {
  SiPython,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiLinux,
  SiCplusplus,
  SiSocketdotio,
  SiReact,
} from 'react-icons/si'
import { 
  FaJava, 
  FaServer, 
  FaRobot, 
  FaExchangeAlt, 
  FaChartLine, 
  FaLayerGroup,
  FaShieldAlt 
} from 'react-icons/fa'

const skills = [
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
  { name: 'System Arch', icon: FaServer, color: 'text-gray-300' },
  { name: 'Quant Analysis', icon: FaChartLine, color: 'text-green-400' },
  { name: 'WebSockets', icon: SiSocketdotio, color: 'text-white' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-300' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-500' },
  { name: 'Automation', icon: FaRobot, color: 'text-emerald-400' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-20"
        >
          <span className="text-neon-magenta font-mono text-xl mr-4">02.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">ARSENAL</h2>
          <div className="flex-grow h-px bg-slate-800 ml-8 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-magenta rounded-full shadow-[0_0_10px_#ff00ff]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-dark-card/50 backdrop-blur-sm p-6 border border-slate-800 hover:border-neon-cyan/50 transition-all group hover:bg-dark-card hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600 group-hover:border-neon-cyan transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600 group-hover:border-neon-cyan transition-colors"></div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <Icon className={`text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg ${skill.color}`} />
                  <span className="text-gray-300 font-mono text-sm tracking-wider group-hover:text-white transition-colors uppercase">
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
