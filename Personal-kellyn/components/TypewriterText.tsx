"use client"
import { useTypewriter } from "../hooks/useTypewriter"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  showCursor?: boolean
  as?: keyof JSX.IntrinsicElements
}

export function TypewriterText({
  text,
  className = "",
  speed = 50,
  delay = 0,
  showCursor = true,
  as: Component = "span",
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay)

  return (
    <Component className={`font-roboto-mono ${className}`}>
      {displayText}
      {showCursor && !isComplete && <span className="inline-block w-0.5 h-[1em] bg-cyber-cyan ml-1 animate-pulse" />}
    </Component>
  )
}
