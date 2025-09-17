import { TerminalInterface } from "@/components/terminal-interface"
import { GameModeToggle } from "@/components/game-mode-toggle"
import { MatrixBackground } from "@/components/matrix-background"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <GameModeToggle />
        <TerminalInterface />
      </div>
    </main>
  )
}
