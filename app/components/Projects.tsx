'use client'

import { motion } from 'framer-motion'
import GlitchText from './GlitchText'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'AI Content Generator',
    description: 'Web application that uses AI to generate content, images, and code snippets with a modern, intuitive interface.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance metrics.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/api/placeholder/600/400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-dark-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Featured Projects"
            className="text-5xl md:text-6xl font-bold mb-4"
            neonColor="magenta"
          />
          <div className="w-24 h-1 bg-neon-magenta mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-lg overflow-hidden border border-neon-magenta/20 hover:border-neon-magenta transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center">
                <div className="text-6xl text-neon-cyan opacity-50">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-neon-magenta mb-3 font-semibold group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neon-magenta/10 text-neon-magenta rounded-full text-sm border border-neon-magenta/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-magenta hover:text-neon-pink transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

