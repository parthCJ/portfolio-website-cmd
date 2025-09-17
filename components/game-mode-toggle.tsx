"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function GameModeToggle() {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [achievements, setAchievements] = useState<string[]>([])

  const handleExplore = () => {
    setScore((prev) => prev + 10)
    if (score + 10 >= level * 100) {
      setLevel((prev) => prev + 1)
      const newAchievement = `Level ${level + 1} Explorer`
      setAchievements((prev) => [...prev, newAchievement])
    }
  }

  return (
    <div className="fixed top-4 right-4 z-20 space-y-2">
      <div className="flex items-center gap-2">
        <Badge variant="default" className="bg-primary text-primary-foreground border-primary">
          Level {level}
        </Badge>
        <Badge variant="default" className="bg-secondary text-black border-secondary">
          Score: {score}
        </Badge>
      </div>

      <Button onClick={handleExplore} size="sm" className="glitch-effect bg-primary hover:bg-primary/80">
        🎮 Explore +10 XP
      </Button>

      {achievements.length > 0 && (
        <div className="space-y-1">
          {achievements.slice(-3).map((achievement, index) => (
            <Badge key={index} className="block text-xs bg-accent text-accent-foreground">
              🏆 {achievement}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
