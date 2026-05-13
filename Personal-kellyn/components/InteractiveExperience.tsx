"use client"
import { useState } from "react"
import { CheckCircle, Zap } from "lucide-react"
import { experiences } from "../data/portfolioData"

export function InteractiveExperience() {
  const [selectedExp, setSelectedExp] = useState(0)

  const exp = experiences[selectedExp]
  const statusColor = exp.status === "ACTIVE" ? "bg-cyber-green text-black" : "bg-cyber-magenta text-black"

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-cyber-dark via-purple-950/30 to-cyan-950/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyber-magenta/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-4">
            KEY ACHIEVEMENTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-11 gap-8 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
                {experiences.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExp(index)}
                    className={`group relative p-4 rounded-2xl transition-all duration-500 ${
                      selectedExp === index
                        ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/50"
                        : "bg-gray-900/30 border border-gray-800 hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedExp === index 
                          ? "bg-cyber-cyan shadow-[0_0_10px_#00ffff]" 
                          : "bg-gray-700 group-hover:bg-gray-600"
                      }`}>
                        {selectedExp === index && (
                          <div className="w-full h-full rounded-full bg-cyber-cyan animate-ping opacity-75" />
                        )}
                      </div>
                      <span className={`font-orbitron text-sm transition-all duration-300 ${
                        selectedExp === index ? "text-white" : "text-gray-500 group-hover:text-gray-400"
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    {selectedExp === index && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyber-cyan to-cyber-magenta rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 via-cyber-magenta/20 to-cyber-green/20 rounded-3xl blur-xl opacity-50" />
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green" />
                  
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/30 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-cyber-cyan" />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor}`}>
                          {exp.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {experiences.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedExp(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              selectedExp === index 
                                ? "w-8 bg-gradient-to-r from-cyber-cyan to-cyber-magenta shadow-[0_0_8px_#00ffff]" 
                                : "w-1.5 bg-gray-700 hover:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold font-orbitron text-white mb-2 leading-tight">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 font-roboto-mono leading-relaxed mb-4 text-sm">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gray-800/50 border border-gray-700 rounded-xl font-roboto-mono text-xs text-gray-300 hover:bg-cyber-cyan/10 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
