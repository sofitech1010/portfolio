"use client"
import { Mail, MessageCircle, Video, Linkedin } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Linkedin,
      label: "linkedin",
      value: "Kellyn Ocampo",
      url: "#",
    },
    {
      icon: MessageCircle,
      label: "facebook",
      value: "@kellyn_ocampo",
      url: "#",
    },
    {
      icon: Video,
      label: "TikTok",
      value: "@kellyn_ocampo",
      url: "#",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@kellyn.com",
      url: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-cyber-gradient py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-12 text-center font-orbitron">CONTACT</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:border-cyber-cyan group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full border border-cyber-cyan/40 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20">
                    <IconComponent className="w-8 h-8 text-cyber-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron text-cyber-cyan mb-2">{contact.label}</h3>
                    <p className="text-gray-400 font-roboto-mono">{contact.value}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
