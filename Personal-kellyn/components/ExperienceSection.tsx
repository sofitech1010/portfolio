"use client"
import { useState } from "react"
import { experiences } from "../data/portfolioData"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { ChevronDown, ChevronUp, ExternalLink, Code } from "lucide-react"

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-orbitron text-cyan-500 text-shadow-cyan mb-2">PROYECTOS</h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto" />
      </div>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative animate-slideInRight"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <Card
              className={`border-gray-700/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90 cursor-pointer transition-all duration-300 ${
                expandedIndex === index ? "ring-2 ring-cyber-cyan/50" : ""
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyber-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-cyber-cyan" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-orbitron font-bold text-white text-sm truncate">{exp.title}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-700/50 rounded-full text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 3 && (
                          <span className="text-[10px] px-2 py-0.5 bg-gray-700/50 rounded-full text-gray-400">
                            +{exp.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`text-[10px] px-2 py-0.5 font-bold ${exp.status === "ACTIVE" ? "bg-green-400 text-black" : "bg-pink-500 text-white"}`}>
                      {exp.status}
                    </Badge>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-cyber-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-3 border-t border-gray-700/50">
                    <p className="text-gray-300 font-roboto-mono text-xs leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-cyber-cyan">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyber-cyan hover:text-cyber-magenta transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
