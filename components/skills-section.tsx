"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
  {
    title: "AI/ML & Computer Vision",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "YOLOv8", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "CNN", level: 75 },
    ],
  },
  {
    title: "Technologies & Tools",
    icon: Cloud,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "AWS IoT Core", level: 75 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 80 },
      { name: "MQTT", level: 70 },
    ],
  },
]

const certifications = ["Data Structures and Algorithm - Pregrad", "Micro Certification - ServiceNow"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise across various domains of computer science and software
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon

            return (
              <Card key={category.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
