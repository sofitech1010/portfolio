"use client"

import { useEffect, useState } from "react"

export function HexagonGrid() {
  const [hexagons, setHexagons] = useState<Array<{ left: string; top: string }>>([])

  useEffect(() => {
    const generated = [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setHexagons(generated)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
      {hexagons.map((pos, i) => (
        <div
          key={i}
          className="absolute w-16 sm:w-24 h-16 sm:h-24"
          style={{
            left: pos.left,
            top: pos.top,
          }}
        >
          <div
            className={`absolute top-1/4 left-[6.7%] w-[86.6%] h-1/2 border ${
              i % 3 === 0
                ? "border-cyber-cyan/30 bg-cyber-cyan/10"
                : i % 3 === 1
                  ? "border-cyber-magenta/30 bg-cyber-magenta/10"
                  : "border-cyber-green/30 bg-cyber-green/10"
            } animate-hexRotate`}
            style={{
              animationDuration: `${5 + i}s`,
            }}
          />
          <div
            className={`absolute top-1/4 left-[6.7%] w-[86.6%] h-1/2 border ${
              i % 3 === 0
                ? "border-cyber-cyan/30 bg-cyber-cyan/10"
                : i % 3 === 1
                  ? "border-cyber-magenta/30 bg-cyber-magenta/10"
                  : "border-cyber-green/30 bg-cyber-green/10"
            } rotate-60 animate-hexRotate`}
            style={{
              animationDuration: `${5 + i}s`,
              animationDirection: "reverse",
            }}
          />
        </div>
      ))}
    </div>
  )
}
