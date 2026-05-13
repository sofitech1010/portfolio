"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{
    left: string
    top: string
    animation: string
    animationDelay: string
    color: string
  }>>([])

  useEffect(() => {
    const generated = [...Array(20)].map((_, i) => {
      const color = i % 3 === 0 ? "bg-cyber-cyan" : i % 3 === 1 ? "bg-cyber-magenta" : "bg-cyber-green"
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
        color,
      }
    })
    setParticles(generated)
  }, [])

  return (
    <>
      {/* Grid Background */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 -z-20 animate-gridMove overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${p.color}`}
            style={{
              left: p.left,
              top: p.top,
              animation: p.animation,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>
    </>
  )
}
