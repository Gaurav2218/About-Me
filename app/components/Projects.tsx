'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  tech: string[]
  color: string
  text: string
  live?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'LEVITAS_ALGO_PLATFORM',
    description: 'High-performance live trading platform engineered for algorithmic execution in real-time markets. Optimized for low-latency order routing and custom execution strategies.',
    tech: ['Python', 'XTS API', 'Celery', 'Multiprocessing', 'WebSockets', 'Redis', 'PostgreSQL', 'Custom Option Strategies'],
    color: 'border-neon-purple',
    text: 'text-neon-purple',
  },
  {
    title: 'OPTION_BACKTEST_ENGINE',
    description: 'Advanced multi-leg options backtesting engine calculating VaR, Kelly Criterion, and Sharpe Ratio for robust strategy validation against historical data.',
    tech: ['Python', 'Quant Analytics', 'Risk Metrics','S3 Storage','Multi-leg & Spread Support'],
    color: 'border-neon-cyan',
    text: 'text-neon-cyan',
  },
  {
    title: 'TRADE_AUTOMATION_SUITE',
    description: 'Suite of automation tools for overnight position reversal, straddle charting, Slack alerts, and TDS accounting compliance.',
    tech: ['Automation', 'Slack API', 'Data Processing',  'Straddle Charting', 'Extraction'],
    color: 'border-neon-magenta',
    text: 'text-neon-magenta',
  },
  {
    title: 'ANTI_AI_OFFICIAL',
    description: 'The public face of Anti AI. A high-performance, SEO-ranked immersive 3D experience built with Three.js and D3.js to showcase AI capabilities and secure funding interest.',
    tech: ['Three.js', 'D3.js', 'SEO Architecture','Node.js','Next.js','Tailwind CSS'],
    live: 'https://antiai.ltd/',
    color: 'border-neon-cyan',
    text: 'text-neon-cyan',
  },
  {
    title: 'SALES_INTELLIGENCE_CRM',
    description: 'Dedicated CRM for sales operations. Features lead tracking, pipeline visualization, and performance metrics used by the internal sales team.',
    tech: ['React', 'Analytics', 'Cloud Infra','RBAC','API Integration','Flask'],
    live: 'https://sales.antiai.ltd/',
    color: 'border-neon-magenta',
    text: 'text-neon-magenta',
  },
  {
    title: 'ADMIN_CONTROL_NEXUS',
    description: 'Centralized administrative dashboard for HR management, resource allocation, and internal system controls with role-based security.',
    tech: ['Dashboard', 'RBAC', 'HR Modules','React','AWS RDS'],
    live: 'https://admin.antiai.ltd/#/login/login',
    color: 'border-neon-blue',
    text: 'text-neon-blue',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-20"
        >
          <span className="text-neon-blue font-mono text-xl mr-4">03.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">DEPLOYMENTS</h2>
          <div className="flex-grow h-px bg-slate-800 ml-8 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-dark-card/40 backdrop-blur-md rounded-none border-l-4 ${project.color} p-8 hover:bg-dark-card/60 transition-all group relative overflow-hidden`}
            >
              {/* Background Grid Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <h3 className={`text-2xl font-bold mb-4 font-mono tracking-tighter ${project.text} group-hover:text-white transition-colors relative z-10`}>
                {project.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light relative z-10">
                {project.description}
              </p>
              
              <div className="mb-8 relative z-10">
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 text-gray-300 text-xs font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 pt-6 border-t border-slate-800/50 relative z-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
                  >
                    <FaGithub className="text-lg" /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${project.text} hover:text-white transition-colors text-sm font-mono uppercase tracking-wider`}
                  >
                    <FaExternalLinkAlt /> VISIT
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
