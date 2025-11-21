'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import GlitchText from './GlitchText'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com', color: 'text-gray-300 hover:text-white' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com', color: 'text-gray-300 hover:text-blue-400' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com', color: 'text-gray-300 hover:text-cyan-400' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com', color: 'text-gray-300 hover:text-pink-400' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Get In Touch"
            className="text-5xl md:text-6xl font-bold mb-4"
            neonColor="blue"
          />
          <div className="w-24 h-1 bg-neon-blue mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-lg p-8 border border-neon-blue/20"
          >
            <h3 className="text-2xl text-neon-blue mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-4 mb-8">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-300 hover:text-neon-cyan transition-colors"
              >
                <FaEnvelope className="text-neon-cyan text-xl" />
                <span>your.email@example.com</span>
              </a>
            </div>

            <div>
              <h4 className="text-xl text-neon-magenta mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-2xl transition-colors`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-lg p-8 border border-neon-magenta/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neon-cyan mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neon-cyan mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-neon-cyan mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-card border border-neon-cyan/30 rounded-lg focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 text-white resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-neon-magenta text-dark-bg rounded-lg hover:bg-neon-pink transition-all glow-magenta font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

