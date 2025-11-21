'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  neonColor?: 'cyan' | 'magenta' | 'blue'
}

export default function GlitchText({ text, className = '', neonColor = 'cyan' }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const colorClasses = {
    cyan: 'text-neon-cyan',
    magenta: 'text-neon-magenta',
    blue: 'text-neon-blue',
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className={`${colorClasses[neonColor]} ${glitch ? 'animate-glitch' : ''} transition-all duration-200`}
        style={{
          textShadow: glitch
            ? '2px 0 #ff00ff, -2px 0 #00ffff'
            : undefined,
        }}
      >
        {text}
      </span>
      {glitch && (
        <>
          <span
            className={`absolute top-0 left-0 ${colorClasses[neonColor]} opacity-75`}
            style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(2px, -2px)' }}
          >
            {text}
          </span>
          <span
            className={`absolute top-0 left-0 ${colorClasses[neonColor]} opacity-75`}
            style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(-2px, 2px)' }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}

