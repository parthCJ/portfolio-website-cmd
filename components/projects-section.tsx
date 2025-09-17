"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye, Activity } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "AI Fitness Tracker",
    description:
      "A computer vision application that automatically counts push-ups by tracking 33 key body landmarks and calculating the elbow joint's angle using advanced pose estimation.",
    longDescription:
      "This project demonstrates the power of computer vision in fitness applications. Using MediaPipe for pose detection and OpenCV for image processing, the system can accurately track body movements and provide real-time feedback on exercise form and repetition counting.",
    technologies: ["MediaPipe", "OpenCV", "NumPy", "Python", "Computer Vision"],
    github: "https://github.com/parthCJ/body-exercise-detection",
    demo: "#",
    icon: Activity,
    featured: true,
  },
  {
    id: 2,
    title: "SecureAuth Backend System",
    description:
      "A comprehensive backend system built with Node.js and Express.js featuring secure user authentication, session management, and JWT-based security.",
    longDescription:
      "This robust backend system implements industry-standard security practices including JWT authentication, HTTP-only cookies, password hashing, and secure session management. Deployed on AWS EC2 with Nginx reverse proxy and SSL encryption.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "AWS EC2", "Nginx", "SSL"],
    github: "https://github.com/parthCJ/SecureAuth-Backend-System",
    demo: "#",
    icon: Eye,
    featured: true,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my technical projects demonstrating expertise in AI/ML, computer vision, and backend
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon
            const isSelected = selectedProject === project.id

            return (
              <Card
                key={project.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isSelected ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedProject(isSelected ? null : project.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="mt-1">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">
                    {isSelected ? project.longDescription : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/parthCJ" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
