import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "cyber-cyan": "#00ffff",
        "cyber-magenta": "#ff0080",
        "cyber-green": "#00ff41",
        "cyber-yellow": "#ffff00",
        "cyber-orange": "#ff6600",
        "cyber-dark": "#0a0a0a",
        "cyber-gray": "#1a1a1a",
        "cyber-light-gray": "#2d2d2d",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        "roboto-mono": ["var(--font-roboto-mono)", "monospace"],
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 25%, #0a1a1a 50%, #1a1a0a 75%, #0a0a0a 100%)",
        "cyber-card": "linear-gradient(145deg, rgba(26, 26, 26, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%)",
        "cyber-button": "linear-gradient(45deg, #00ffff 0%, #0080ff 100%)",
        "cyber-button-hover": "linear-gradient(45deg, #00b2b2 0%, #0066cc 100%)",
        "text-gradient": "linear-gradient(45deg, #00ffff 0%, #ff0080 50%, #00ff41 100%)",
      },
      animation: {
        "glitch-1": "glitch-1 0.5s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 0.5s infinite linear alternate-reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        scan: "scan 3s infinite",
        slideInUp: "slideInUp 0.6s ease-out both",
        slideInRight: "slideInRight 0.6s ease-out both",
        fadeInUp: "fadeInUp 1s ease-out both",
        hexRotate: "hexRotate 5s linear infinite",
        gridMove: "gridMove 20s linear infinite",
      },
      backdropBlur: {
        cyber: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
