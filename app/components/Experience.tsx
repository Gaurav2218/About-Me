'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Algorithmic Trading Developer',
    company: 'Levitas Trade LLP',
    period: 'MAY 2025 - PRESENT',
    points: [
      'Developing a high-performance live trading platform for algorithmic execution.',
      'Architected a multi-leg options backtesting engine featuring advanced metrics (VaR, Kelly Criterion, Sharpe Ratio).',
      'Built comprehensive automation systems including overnight position reversal, straddle charting, and Slack alert integration.',
      'Implemented TDS automation for streamlined accounting and compliance.'
    ],
    tech: ['Python', 'Algorithmic Trading', 'Automation', 'Risk Management', 'Backtesting'],
  },
  {
    title: 'AI/ML Developer',
    company: 'Anti AI Pvt. Ltd.',
    period: 'NOV 2024 - MARCH 2025',
    points: [
      'Engineered the company\'s immersive 3D platform using Three.js and D3.js, achieving #1 Google Search ranking.',
      'Developed comprehensive CRM solutions for HR and Sales operations, integrating real-time data visualization.',
      'Managed core technical infrastructure and collaborated on strategic funding pitch decks.'
    ],
    tech: ['Three.js', 'D3.js', 'CRM Architecture', 'SEO Optimization', 'Tech Infrastructure'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Gradient Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-[3px] border-blue-500 z-10 mt-1 md:mt-0 -ml-[7px] md:-ml-[7px] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 pl-12 md:pl-0 text-left md:text-right' : 'md:pl-16 pl-12 text-left'}`}>
                  <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all hover:bg-slate-800/50 group">
                    <span className="text-sm font-bold text-blue-400 mb-2 block tracking-wider uppercase">{exp.period}</span>
                    <h3 className="text-xl text-slate-100 font-bold mb-1 group-hover:text-blue-300 transition-colors">{exp.title}</h3>
                    <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                    <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? 'items-end' : 'items-start'} flex flex-col`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-slate-200 font-medium text-sm leading-relaxed relative">
                          <span className="mr-2 text-blue-500">•</span>{point}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs font-medium rounded-md border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
