'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaTerminal,
} from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Gaurav2218', label: 'GH_REPO' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/gaurav2sharma', label: 'LINKED_NET' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/Gaurav2462218', label: 'X_FEED' },
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
    
    // Construct mailto link
    const subject = `Portfolio Transmission: ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    // Open email client
    window.location.href = `mailto:officialgaurav246@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
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
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Panel - Info */}
          <div className="p-12 border border-slate-800 bg-dark-card/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-cyan"></div>
            
            <div className="mb-12">
              <div className="flex items-center gap-3 text-neon-cyan mb-6">
                <FaTerminal />
                <span className="font-mono text-sm tracking-widest">SECURE_CHANNEL_V1.0</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Initiate Uplink</h2>
              <p className="text-gray-400 leading-relaxed font-light">
                Open frequency for technical collaboration, system architecture consultation, or algorithmic inquiries. 
                Encryption protocols active.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href="mailto:officialgaurav246@gmail.com" 
                className="flex items-center gap-4 p-4 border border-slate-800 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all group"
              >
                <div className="bg-slate-900 p-3 text-neon-cyan group-hover:text-white transition-colors border border-slate-800">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono mb-1 uppercase">Direct_Mail</div>
                  <div className="text-white font-mono text-sm">officialgaurav246@gmail.com</div>
                </div>
              </a>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:border-neon-magenta/50 hover:bg-neon-magenta/5 transition-all group"
                    >
                      <Icon className="text-2xl text-gray-400 group-hover:text-neon-magenta mb-3 transition-colors" />
                      <span className="text-[10px] font-mono text-gray-500 group-hover:text-white tracking-wider uppercase">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-12 border border-slate-800 bg-dark-card/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <label className="block text-xs font-mono text-neon-blue mb-2 uppercase tracking-wider group-focus-within:text-white transition-colors">
                  // Your_Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg border border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-neon-blue transition-all font-mono text-sm"
                  placeholder="Input designation..."
                />
              </div>

              <div className="relative group">
                <label className="block text-xs font-mono text-neon-blue mb-2 uppercase tracking-wider group-focus-within:text-white transition-colors">
                  // Email_Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg border border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-neon-blue transition-all font-mono text-sm"
                  placeholder="user@domain.sys"
                />
              </div>

              <div className="relative group">
                <label className="block text-xs font-mono text-neon-blue mb-2 uppercase tracking-wider group-focus-within:text-white transition-colors">
                  // Message_Data
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-bg border border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-neon-blue transition-all font-mono text-sm resize-none"
                  placeholder="Input transmission..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-neon-blue hover:bg-blue-600 text-white font-mono text-sm tracking-widest uppercase transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? 'Packet Sent' : 'Transmit Data'}
                  {!submitted && <span className="text-lg">→</span>}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
