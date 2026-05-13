"use client"
import { Mail, Eye } from "lucide-react"
import { TypewriterText } from "./TypewriterText"
import { Button } from "./ui/button"

const codeLines = [
  "> Especialista en arquitecturas MERN & MEAN",
  "> Desarrollador Web3/app & Blockchain",
  "> Experto en Ciberseguridad & Cloud Computing",
  "> Innovador en tecnologías emergentes",
]

export function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto mt-8 mb-8 px-4">
      <div className="p-12 text-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 border-cyan-500/20 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-scan" />

        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold font-orbitron shadow-cyan-500/50 shadow-2xl border-2 border-cyan-500 animate-glow">
          EMC
        </div>

        <TypewriterText
          text="KELLYN OCAMPO"
          variant="h3"
          component="h1"
          speed={100}
          delay={500}
          className="font-orbitron font-bold bg-gradient-to-r from-cyan-500 via-pink-500 to-green-400 bg-clip-text text-transparent mb-4"
        />

        <div className="flex justify-center items-center mb-4">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mr-4" />
          <TypewriterText
            text="FULL STACK DEVELOPER"
            variant="h5"
            component="h2"
            speed={80}
            delay={2000}
            className="font-roboto-mono text-cyan-500 text-shadow-cyan tracking-[3px]"
          />
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent ml-4" />
        </div>

        <div className="max-w-2xl mx-auto mt-6 text-left">
          {codeLines.map((line, index) => (
            <TypewriterText
              key={index}
              text={line}
              variant="body1"
              speed={30}
              delay={4000 + index * 1000}
              showCursor={index === codeLines.length - 1}
              className="text-gray-300 font-roboto-mono leading-relaxed block mb-2"
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="font-orbitron px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/30 shadow-lg animate-fadeInUp"
            style={{ animationDelay: "8s", animationFillMode: "both" }}
          >
            <Mail className="mr-2 h-5 w-5" />
            INICIAR_CONTACTO
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-orbitron px-8 py-3 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 animate-fadeInUp bg-transparent"
            style={{ animationDelay: "8.5s", animationFillMode: "both" }}
          >
            <Eye className="mr-2 h-5 w-5" />
            VER_PROYECTOS
          </Button>
        </div>
      </div>
    </div>
  )
}
