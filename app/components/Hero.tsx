'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import GlitchText from './GlitchText'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neon-cyan mb-4 text-lg"
          >
            Welcome to my digital realm
          </motion.p>
          <GlitchText
            text="Full Stack Developer"
            className="text-6xl md:text-8xl font-bold mb-6 block"
            neonColor="cyan"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            Crafting digital experiences with{' '}
            <span className="text-neon-magenta">cutting-edge</span> technology
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-all glow-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-neon-magenta text-dark-bg rounded-lg hover:bg-neon-pink transition-all glow-magenta font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-neon-cyan text-4xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

