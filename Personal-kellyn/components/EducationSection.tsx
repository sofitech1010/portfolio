"use client"
import { useState } from "react"
import { Award, Sparkles } from "lucide-react"

export function EducationSection() {
  const [activeCert, setActiveCert] = useState(0)

  const certificates = [
    {
      id: 1,
      title: "Google Analytics Certification",
      provider: "Google",
      date: "January 23, 2024",
      hours: "~40 hours",
      image: "/certificates/google-analytics-cert.png",
      skills: ["Data Analysis", "User Behavior", "Reporting", "Conversions"],
      color: "cyan",
    },
    {
      id: 2,
      title: "HubSpot Inbound Marketing Certification",
      provider: "HubSpot Academy",
      date: "March 23, 2025",
      expiry: "March 23, 2028",
      image: "/certificates/hubspot-cert.png",
      skills: ["Lead Generation", "Marketing Automation", "CRM", "Inbound Strategy"],
      color: "magenta",
    },
    {
      id: 3,
      title: "Meta Blueprint Certified Professional",
      provider: "Meta",
      date: "April 2026",
      expiry: "Expires January 2027",
      image: "/certificates/meta-cert.png",
      skills: ["Paid Social", "Campaign Strategy", "Ad Creation", "Audience Targeting"],
      color: "green",
    },
  ]

  const cert = certificates[activeCert]

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-cyber-dark via-purple-950/20 to-cyan-950/20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-magenta/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="text-cyber-cyan font-roboto-mono text-sm tracking-wider">CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold gradient-text mb-4">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            {certificates.map((c, index) => (
              <button
                key={c.id}
                onClick={() => setActiveCert(index)}
                className={`w-full p-4 rounded-2xl transition-all duration-500 text-left group ${
                  activeCert === index
                    ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/50"
                    : "bg-gray-900/40 border border-gray-800 hover:bg-gray-800/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCert === index 
                      ? "bg-cyber-cyan shadow-[0_0_10px_#00ffff]" 
                      : "bg-gray-700 group-hover:bg-gray-600"
                  }`} />
                  <div className="flex-1">
                    <h4 className={`font-orbitron text-sm transition-colors ${
                      activeCert === index ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                    }`}>
                      {c.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{c.provider}</p>
                  </div>
                  <Award className={`w-5 h-5 transition-colors ${
                    c.color === "cyan" ? "text-cyber-cyan" : c.color === "magenta" ? "text-cyber-magenta" : "text-cyber-green"
                  }`} />
                </div>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 via-cyber-magenta/20 to-cyber-green/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green" />
              
              <div className="p-6">
                <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 min-h-[200px] flex items-center justify-center">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    className="w-full max-h-[280px] object-contain"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-orbitron font-bold text-white">{cert.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    cert.color === "cyan" ? "bg-cyber-cyan/20 text-cyber-cyan" :
                    cert.color === "magenta" ? "bg-cyber-magenta/20 text-cyber-magenta" :
                    "bg-cyber-green/20 text-cyber-green"
                  }`}>
                    {cert.provider}
                  </span>
                </div>

                <p className="text-gray-400 text-sm font-roboto-mono mb-3">
                  Issued: {cert.date}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-800/50 border border-gray-700 rounded-lg font-roboto-mono text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700/50 text-center">
            <div className="text-4xl font-orbitron font-bold text-cyber-cyan mb-1">3+</div>
            <div className="text-gray-400 font-roboto-mono text-sm">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700/50 text-center">
            <div className="text-4xl font-orbitron font-bold text-cyber-magenta mb-1">6+</div>
            <div className="text-gray-400 font-roboto-mono text-sm">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700/50 text-center">
            <div className="text-4xl font-orbitron font-bold text-cyber-green mb-1">2026</div>
            <div className="text-gray-400 font-roboto-mono text-sm">Latest Cert</div>
          </div>
        </div>
      </div>
    </section>
  )
}
