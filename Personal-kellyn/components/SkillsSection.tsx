"use client"
import { skillCategories } from "../data/portfolioData"
import { TypewriterText } from "./TypewriterText"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export function SkillsSection() {
  return (
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-orbitron text-cyan-500 text-shadow-cyan mb-2">STACK_TECNOLÓGICO</h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <Card
              key={index}
              className="h-full relative animate-slideInUp border-gray-700/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
              />

              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div
                    className="mr-4"
                    style={{
                      color: category.color,
                      filter: `drop-shadow(0 0 8px ${category.color})`,
                    }}
                  >
                    <IconComponent />
                  </div>
                  <TypewriterText
                    text={category.title}
                    variant="h6"
                    component="h3"
                    speed={50}
                    delay={1000 + index * 200}
                    showCursor={false}
                    className="font-orbitron font-bold"
                    style={{
                      color: category.color,
                      textShadow: `0 0 10px ${category.color}`,
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="font-roboto-mono text-xs font-medium bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gray-700/50 animate-fadeIn"
                      style={{
                        animationDelay: `${2000 + index * 200 + skillIndex * 100}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
