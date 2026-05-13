import { Code, Database, Cloud, Shield, Globe, Terminal } from "lucide-react"

export const skillCategories = [
  {
    title: "Digital Marketing",
    icon: Globe,
    skills: ["SEO", "SEM", "Content Marketing", "Email Marketing", "Social Media", "Analytics", "CRM", "Marketing Automation"],
    color: "#00ffff",
  },
  {
    title: "Brand Strategy",
    icon: Terminal,
    skills: ["Brand Positioning", "Market Research", "Competitive Analysis", "Messaging Strategy", "Brand Identity", "Design Thinking"],
    color: "#ff0080",
  },
  {
    title: "Campaign Management",
    icon: Database,
    skills: ["Campaign Planning", "Budget Allocation", "Performance Tracking", "A/B Testing", "Conversion Optimization"],
    color: "#00ff41",
  },
  {
    title: "Data & Analytics",
    icon: Cloud,
    skills: ["Google Analytics", "Data Visualization", "Reporting", "KPI Tracking", "Business Intelligence", "Predictive Analytics"],
    color: "#ffff00",
  },
  {
    title: "Social & Content",
    icon: Code,
    skills: ["Social Media Strategy", "Content Creation", "Copywriting", "Video Marketing", "Community Management", "Influencer Partnerships"],
    color: "#ff6600",
  },
  {
    title: "Tools & Platforms",
    icon: Shield,
    skills: ["HubSpot", "Marketo", "Salesforce", "Adobe Suite", "Google Ads", "Meta Ads", "Hootsuite", "Tableau"],
    color: "#ff0080",
  },
]

export const experiences = [
  {
    title: "Global Brand Campaign Launch",
    description: "Led a comprehensive brand repositioning campaign across 5 markets, resulting in 45% increase in brand awareness and 32% improvement in customer engagement metrics within 6 months.",
    url: "#",
    status: "COMPLETED" as const,
    technologies: ["Strategy", "Analytics", "Design", "Content"],
  },
  {
    title: "Digital Transformation Initiative",
    description: "Spearheaded the digital transformation of marketing operations, implementing new martech stack and automating workflows to improve team efficiency by 60% and reduce campaign launch time.",
    url: "#",
    status: "COMPLETED" as const,
    technologies: ["HubSpot", "Automation", "Analytics", "Training"],
  },
  {
    title: "Integrated Marketing Campaign",
    description: "Executed multi-channel integrated marketing campaign combining SEO, paid media, email and social, generating 150K qualified leads and $2.3M in attributed revenue.",
    url: "#",
    status: "COMPLETED" as const,
    technologies: ["SEO", "Paid Media", "Email", "Social"],
  },
]
