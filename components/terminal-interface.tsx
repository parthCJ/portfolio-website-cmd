"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const commands = {
  help: "Available commands: about, projects, skills, experience, contact, clear, matrix",
  about: `
╔══════════════════════════════════════════════════════════════╗
║                         PARTH SHARMA                         ║
║                    Computer Science Student                  ║
╠══════════════════════════════════════════════════════════════╣
║ Location  : Bapu Nagar, Rajasthan                            ║
║ Email     : parthsharmacj@gmail.com                          ║
║ Phone     : +91 9468999789                                   ║
║ GitHub    : https://github.com/parthCJ                       ║
║ LinkedIn  : https://www.linkedin.com/in/parthsharmacj/       ║
║                                                              ║
║ Currently pursuing B.Tech in Computer Science at             ║
║ M.L.V. Textile and Engineering College (2023-2027)           ║
║                                                              ║
║ Specializing in: AI/ML, Computer Vision, Backend Dev         ║
╚══════════════════════════════════════════════════════════════╝`,

  projects: `
ACTIVE PROJECTS:

[1] Tixly - AI Customer Support Agent
    ├─ LLaMA 3.1 70B ticket classification
    ├─ ChromaDB RAG pipeline (60% faster)
    ├─ LSTM demand prediction
    └─ Tech: LLaMA 3.1, Groq API, ChromaDB, AWS EC2

[2] FitDetect - Full Stack Fitness App
    ├─ Real-time pose estimation (30 FPS)
    ├─ Google OAuth 2.0 (500+ users)
    ├─ MongoDB workout tracking
    └─ Tech: Next.js, MediaPipe, MongoDB, NextAuth
    
[3] AI Fitness Tracker
    ├─ Computer vision push-up counter
    ├─ 33 body landmarks tracking
    ├─ Real-time angle calculations
    └─ Tech: MediaPipe, OpenCV, NumPy
    
[4] SecureAuth Backend System  
    ├─ JWT-based authentication
    ├─ MongoDB integration
    ├─ AWS EC2 deployment
    └─ Tech: Node.js, Express.js, SSL

Type 'project 1', 'project 2', 'project 3', or 'project 4' for details...`,

  skills: `
SKILL TREE:

Languages        ████████████████████ 100%
├─ JavaScript    ████████████████████ 95%
├─ Python        ████████████████████ 90%
├─ C++           ████████████████████ 85%
└─ SQL           ████████████████████ 80%

Frameworks       ████████████████████ 100%
├─ Node.js       ████████████████████ 90%
├─ Express.js    ████████████████████ 85%
├─ FastAPI       ████████████████████ 80%
└─ OpenCV        ████████████████████ 85%

Technologies     ████████████████████ 100%
├─ MongoDB       ████████████████████ 85%
├─ AWS           ████████████████████ 75%
├─ Docker        ████████████████████ 70%
└─ Git           ████████████████████ 90%`,

  experience: `
EXPERIENCE LOG:

[CURRENT] Computer Vision & ML Engineer
├─ Duration: June 2025 - Present
├─ Focus: OpenCV, YOLOv8, CNN models
└─ Achievement: Built feature extraction systems

[RECENT] Backend Developer - IoT Project  
├─ Duration: Dec 2024 - Feb 2025
├─ Focus: REST API, MQTT, AWS integration
└─ Achievement: Real-time sensor data handling

[LEARNING] Generative AI Specialist
├─ Duration: Jan 2024 - Apr 2024  
├─ Focus: LLMs (GPT, LLaMA, Mistral)
└─ Achievement: LangChain applications`,

  contact: `
╔══════════════════════════════════════════════════════════════╗
║                    CONTACT PROTOCOLS AVAILABLE               ║
╠══════════════════════════════════════════════════════════════╣
║ Email     : parthsharmacj@gmail.com                          ║
║ Phone     : +91 9468999789                                   ║
║ GitHub    : https://github.com/parthCJ                       ║
║ LinkedIn  : https://www.linkedin.com/in/parthsharmacj/       ║
║ Location  : Rajasthan, India                                 ║
║                                                              ║
║ Ready to collaborate on exciting projects!                   ║
╚══════════════════════════════════════════════════════════════╝`,

  matrix: "Entering Matrix mode... Reality is just code.",
  clear: "CLEAR_SCREEN",
}

export function TerminalInterface() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    "Welcome to Parth Sharma's Interactive Portfolio Terminal v2.0",
    "Type 'help' to see available commands...",
    "",
  ])
  const [currentPath, setCurrentPath] = useState("~/portfolio")
  const [isMatrixMode, setIsMatrixMode] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const newHistory = [...history, `${currentPath}$ ${cmd}`]

    if (command === "clear") {
      setHistory(["Terminal cleared.", ""])
      return
    }

    if (command === "matrix") {
      setIsMatrixMode(!isMatrixMode)
      newHistory.push("Matrix mode toggled!")
      setHistory([...newHistory, ""])
      return
    }

    if (command.startsWith("project ")) {
      const projectNum = command.split(" ")[1]
      if (projectNum === "1") {
        newHistory.push(`
TIXLY - AI CUSTOMER SUPPORT AGENT - DETAILED VIEW

Repository: github.com/parthCJ/Tixly-Customer_support_agent
Status: ACTIVE

Core Features:
├─ LLaMA 3.1 70B via Groq API
├─ 1000+ tickets classified daily
├─ ChromaDB vector embeddings
└─ 7-day demand prediction (LSTM)

Technical Implementation:
├─ RAG pipeline (60% faster responses)
├─ ChromaDB for vector storage
├─ LSTM model for resource allocation
├─ AWS EC2 with Nginx reverse proxy
└─ Production-grade deployment

Achievement Unlocked: AI/ML Systems Expert`)
      } else if (projectNum === "2") {
        newHistory.push(`
FITDETECT - FULL STACK FITNESS APP - DETAILED VIEW

Repository: github.com/parthCJ/FitDetect
Status: DEPLOYED

Core Features:
├─ Google OAuth 2.0 authentication
├─ Real-time pose estimation (30 FPS)
├─ Handles 500+ concurrent users
└─ Automated workout tracking

Technical Stack:
├─ Next.js full-stack framework
├─ NextAuth.js for authentication
├─ MediaPipe for pose estimation
├─ MongoDB for data persistence
└─ Custom CV algorithms

Achievement Unlocked: Full Stack + CV Master`)
      } else if (projectNum === "3") {
        newHistory.push(`
AI FITNESS TRACKER - DETAILED VIEW

Repository: github.com/parthCJ/body-exercise-detection
Status: ACTIVE

Core Features:
├─ Real-time push-up detection
├─ 33 body landmark tracking
├─ Angle calculation algorithms
└─ Performance analytics

Technical Implementation:
├─ MediaPipe for pose detection
├─ OpenCV for video processing  
├─ NumPy for mathematical operations
└─ Real-time frame processing

Achievement Unlocked: Computer Vision Expert`)
      } else if (projectNum === "4") {
        newHistory.push(`
SECUREAUTH BACKEND - DETAILED VIEW

Repository: github.com/parthCJ/SecureAuth-Backend-System
Status: DEPLOYED

Core Features:
├─ JWT token authentication
├─ Secure session management
├─ MongoDB data persistence
└─ AWS EC2 cloud deployment

Technical Stack:
├─ Node.js runtime environment
├─ Express.js web framework
├─ MongoDB database
├─ Nginx reverse proxy
└─ SSL certificate encryption

Achievement Unlocked: Backend Security Master`)
      } else {
        newHistory.push("Project not found. Available: project 1, project 2, project 3, project 4")
      }
    } else if (commands[command as keyof typeof commands]) {
      newHistory.push(commands[command as keyof typeof commands])
    } else if (command === "") {
      // Empty command, just add new line
    } else {
      newHistory.push(`Command not found: ${command}. Type 'help' for available commands.`)
    }

    setHistory([...newHistory, ""])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  return (
    <div
      className={`min-h-screen p-2 sm:p-4 font-mono ${isMatrixMode ? "dark" : ""}`}
      style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
    >
      {/* Terminal Header */}
      <Card className="w-full max-w-4xl mx-auto h-[85vh] sm:h-[80vh] bg-card/95 backdrop-blur border-2 border-primary/20">
        <div className="p-3 sm:p-6 h-full flex flex-col">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-2 sm:mb-4 pb-2 border-b border-primary/20">
            <div className="flex gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <span
              className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4 font-mono truncate"
              style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
            >
              <span className="hidden sm:inline">parth@portfolio-terminal: </span>
              {currentPath}
            </span>
            {isMatrixMode && (
              <Badge variant="outline" className="ml-auto text-xs sm:text-sm text-primary border-primary font-mono">
                <span className="hidden sm:inline">MATRIX MODE</span>
                <span className="sm:hidden">MATRIX</span>
              </Badge>
            )}
          </div>

          {/* Terminal Output */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto overflow-x-auto space-y-1 text-xs sm:text-sm leading-relaxed font-mono"
            style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
          >
            {history.map((line, index) => (
              <div
                key={index}
                className="whitespace-pre font-mono break-words sm:break-normal"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace',
                  fontSize: "clamp(10px, 2.5vw, 14px)",
                }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4 pt-2 border-t border-primary/20"
          >
            <span
              className="text-primary font-bold font-mono text-xs sm:text-sm flex-shrink-0"
              style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
            >
              <span className="hidden sm:inline">{currentPath}$</span>
              <span className="sm:hidden">$</span>
            </span>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 focus:ring-offset-0 font-mono text-xs sm:text-sm"
              style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
              placeholder="Type command..."
              autoFocus
            />
            <span
              className="terminal-cursor text-primary font-mono text-xs sm:text-sm"
              style={{ fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", "Courier New", monospace' }}
            >
              |
            </span>
          </form>

          {/* Quick Commands */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4 max-h-16 sm:max-h-none overflow-y-auto">
            {Object.keys(commands)
              .filter((cmd) => cmd !== "clear")
              .map((cmd) => (
                <Button
                  key={cmd}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setInput(cmd)
                    handleCommand(cmd)
                    setInput("")
                  }}
                  className="text-xs px-2 py-1 sm:px-3 sm:py-2 glitch-effect hover:border-primary hover:text-primary font-mono flex-shrink-0"
                >
                  {cmd}
                </Button>
              ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
