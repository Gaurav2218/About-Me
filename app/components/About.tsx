'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-20"
        >
          <span className="text-neon-cyan font-mono text-xl mr-4">01.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">SYSTEM PROFILE</h2>
          <div className="flex-grow h-px bg-slate-800 ml-8 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f3ff]"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-dark-card/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-sm relative group hover:border-neon-cyan/50 transition-colors duration-500 shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-transparent"></div>
              
              <h3 className="text-3xl text-white font-bold mb-8 font-mono">
                <span className="text-neon-magenta mr-2">{'>'}</span>
                Override Protocol
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                <p>
                  I operate in the <strong className="text-white">deep end</strong> of technology. Where standard frameworks fail, I build custom engines. 
                  My domain is <span className="text-neon-cyan">extreme optimization</span> and absolute reliability.
                </p>
                <p>
                  As a Systems Architect, I don't just follow best practices; I define the architecture that others build upon. 
                  From <span className="text-neon-magenta">HFT algorithms</span> executing in microseconds to distributed networks spanning continents.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-dark-bg/80 backdrop-blur-md border border-slate-800 p-8 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <span className="font-mono text-neon-cyan text-sm animate-pulse">STATUS: ONLINE</span>
                <div className="flex gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-6 bg-slate-800 skew-x-[-12deg]"></div>)}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2 font-mono uppercase">
                    <span>Execution Speed</span>
                    <span className="text-neon-cyan">{'< 5μs'}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue w-[98%] shadow-[0_0_10px_#00f3ff]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2 font-mono uppercase">
                    <span>System Uptime</span>
                    <span className="text-neon-magenta">99.99%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-gradient-to-r from-neon-magenta to-purple-600 w-[99%] shadow-[0_0_10px_#ff00ff]"></div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-white font-mono mb-4 text-sm tracking-widest border-b border-slate-800 pb-2 w-max">DIRECTIVES</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['HFT_ARCH', 'QUANT_DEV', 'DIST_SYS', 'L2_DATA'].map((item) => (
                      <div key={item} className="bg-slate-900/50 border border-slate-800 px-3 py-2 text-xs font-mono text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors cursor-crosshair">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
