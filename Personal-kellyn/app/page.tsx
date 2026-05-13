"use client"
import { NeuralNetwork } from "../components/NeuralNetwork"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { CyberpunkHeader } from "../components/CyberpunkHeader"
import { ModernHeroSection } from "../components/ModernHeroSection"
import { AdvancedSkillsSection } from "../components/AdvancedSkillsSection"
import { EducationSection } from "../components/EducationSection"
import { CVSection } from "../components/CVSection"
import { InteractiveExperience } from "../components/InteractiveExperience"
import { ContactSection } from "../components/ContactSection"

export default function CyberpunkPortfolio() {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden">
        <NeuralNetwork />
        <AnimatedBackground />
      </div>
      <div className="relative z-10">
        <CyberpunkHeader />
        <ModernHeroSection />
        <AdvancedSkillsSection />
        <EducationSection />
        <CVSection />
        <InteractiveExperience />
        <ContactSection />

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-cyber-dark via-purple-950/20 to-cyan-950/20 text-cyber-cyan py-12 text-center border-t-2 border-cyber-cyan/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20 animate-scan"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <p className="font-orbitron text-xl font-bold glow-cyan mb-4">© 2026 KELLYN OCAMPO</p>
            <div className="h-0.5 w-72 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green mx-auto mb-4 rounded-full" />
            <p className="opacity-80 font-roboto-mono tracking-widest text-lg glow-cyan">
              DIGITAL MARKETING • BRANDING • STRATEGY • GROWTH
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
