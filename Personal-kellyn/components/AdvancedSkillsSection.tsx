"use client"
import { useState, useEffect } from "react"
import { skillCategories } from "../data/portfolioData"
import { Sparkles } from "lucide-react"

const colorMap: Record<string, string> = {
  "cyber-cyan": "#00ffff",
  "cyber-magenta": "#ff0080",
  "cyber-green": "#00ff41",
  "cyber-yellow": "#ffff00",
  "cyber-orange": "#ff6600",
}

export function AdvancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-cyber-dark via-purple-950/20 to-cyan-950/20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-magenta/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="text-cyber-cyan font-roboto-mono text-sm tracking-wider">SKILLS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron gradient-text mb-4">
            CORE COMPETENCIES
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const colorValue = colorMap[category.color]
            const isActive = activeCategory === index

            return (
              <div
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border-cyber-cyan/50 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                    : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                }`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${colorValue}, transparent)`,
                  }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-xl border"
                    style={{
                      background: `linear-gradient(45deg, ${colorValue}22, transparent)`,
                      borderColor: `${colorValue}44`,
                    }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: colorValue }} />
                  </div>
                  <h3 className="text-base font-bold font-orbitron text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg font-roboto-mono text-xs transition-all duration-300 ${
                        isActive
                          ? "bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                          : "bg-gray-800 border border-gray-700 text-gray-400"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyber-cyan/20 to-transparent rounded-bl-2xl" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
