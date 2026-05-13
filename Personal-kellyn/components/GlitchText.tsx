"use client"
import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function GlitchText({ text, className = "", as: Component = "h1" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________"
    let interval: NodeJS.Timeout

    const startGlitch = () => {
      let iterations = 0
      interval = setInterval(() => {
        setGlitchText(
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index]
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join(""),
        )

        if (iterations >= text.length) {
          clearInterval(interval)
          setGlitchText(text)
        }

        iterations += 1 / 3
      }, 30)
    }

    const timeout = setTimeout(startGlitch, 1000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text])

  return (
    <Component
      className={`font-orbitron relative ${className}`}
      style={{
        textShadow: "0 0 10px #00ffff",
      }}
    >
      <span
        className="absolute top-0 left-0 w-full h-full text-cyber-magenta animate-glitch-1 -z-10"
        style={{ content: `"${text}"` }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 w-full h-full text-cyber-cyan animate-glitch-2 -z-20"
        style={{ content: `"${text}"` }}
        aria-hidden="true"
      >
        {text}
      </span>
      {glitchText}
    </Component>
  )
}
