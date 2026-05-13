"use client"
import { useState, useEffect } from "react"
import { Mail, Eye, Code, Rocket, Shield, Cloud, Sparkles } from "lucide-react"
import { HexagonGrid } from "./HexagonGrid"

const stats = [
  { icon: Code, value: "3+", label: "Certifications", color: "#00ffff" },
  { icon: Rocket, value: "6+", label: "Years Experience", color: "#ff0080" },
  { icon: Shield, value: "2026", label: "Latest Cert", color: "#00ff41" },
]

export function ModernHeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Strategic marketing leader specializing in digital transformation, brand growth and data-driven campaigns."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-cyber-gradient py-20 sm:py-0">
      <HexagonGrid />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-magenta/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-2 text-center lg:text-center">
            <div className="mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 font-orbitron leading-tight animate-fade-in-up">
                KELLYN OCAMPO
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <div className="px-5 py-2.5 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/40 rounded-full backdrop-blur-sm">
                  <span className="font-orbitron text-cyber-cyan tracking-wider text-sm whitespace-nowrap">
                    MARKETING STRATEGIST
                  </span>
                </div>
                <div className="px-5 py-2.5 bg-gradient-to-r from-cyber-magenta/20 to-cyber-green/20 border border-cyber-magenta/40 rounded-full backdrop-blur-sm">
                  <span className="font-orbitron text-cyber-magenta tracking-wide text-sm whitespace-nowrap">
                    BRAND LEADER
                  </span>
                </div>
              </div>

              <div className="mb-8 max-w-2xl mx-auto">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  <span className="typed-text">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </p>
                <p className="text-cyber-cyan text-base sm:text-lg mt-2">
                  Transforming brands through strategic innovation and market insights.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contacto"
                  className="group px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-xl font-orbitron font-bold text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  GET IN TOUCH
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 border-2 border-cyber-cyan text-cyber-cyan rounded-xl font-orbitron font-bold hover:bg-cyber-cyan/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Eye className="w-5 h-5 group-hover:animate-bounce" />
                  PORTFOLIO
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="group p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="p-3 rounded-xl border mb-3 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(45deg, ${stat.color}22, transparent)`,
                          borderColor: `${stat.color}44`,
                        }}
                      >
                        <IconComponent
                          className="w-5 h-5"
                          style={{
                            color: stat.color,
                            filter: `drop-shadow(0 0 8px ${stat.color})`,
                          }}
                        />
                      </div>
                      <div
                        className="text-2xl font-bold font-orbitron"
                        style={{
                          color: stat.color,
                          textShadow: `0 0 10px ${stat.color}`,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-gray-500 font-roboto-mono text-xs mt-1">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
