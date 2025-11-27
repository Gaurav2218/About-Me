'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability against particles if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card/80 border border-neon-cyan/30 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
          >
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]"></span>
            <span className="text-gray-200 font-mono text-sm tracking-widest uppercase">JUST BUILD IT </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl text-gray-300 mb-6 font-light leading-relaxed max-w-5xl mx-auto"
          >
            Architecting <span className="text-neon-cyan font-bold text-shadow-cyan">High-Frequency</span> Trading Engines, <span className="text-neon-magenta font-bold text-shadow-magenta">Backtesting</span> Grids & Automated Infrastructure.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 font-mono text-sm md:text-base tracking-wide max-w-3xl mx-auto"
          >
            Merging the depths of <span className="text-slate-200">Deep Tech</span> with the complexity of <span className="text-slate-200">Financial Markets</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
