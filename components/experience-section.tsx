import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Computer Vision and Machine Learning",
    company: "Personal Projects",
    location: "India",
    period: "June 2025 – Present",
    description:
      "Worked with Computer Vision (OpenCV, YOLOv8, LabelImg) to make models. Built CNN for Feature Extractions and Image Classifications.",
    technologies: ["OpenCV", "YOLOv8", "LabelImg", "CNN", "Python", "Machine Learning"],
    type: "project",
  },
  {
    title: "Backend Developer – IoT Sensor Data Project",
    company: "Freelance",
    location: "India",
    period: "December 2024 – February 2025",
    description:
      "Created a backend using RestAPI, JavaScript, Node.js, Express.js and MongoDB to handle real-time IoT sensor data with Postman and developed a secure MQTT connection publishing to AWS.",
    technologies: ["Node.js", "Express.js", "MongoDB", "MQTT", "AWS", "IoT", "REST API"],
    type: "work",
  },
  {
    title: "Generative AI",
    company: "Learning & Development",
    location: "India",
    period: "January 2024 – April 2024",
    description:
      "Gained a strong understanding of LLMs (Large Language Models) such as GPT, LLaMA, and Mistral, and worked with LangChain to build LLM applications.",
    technologies: ["GPT", "LLaMA", "Mistral", "LangChain", "Python", "AI/ML"],
    type: "learning",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey through various projects and learning experiences in computer science and technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full md:transform md:-translate-x-2 z-10"></div>

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:mr-8" : "md:pl-1/2 md:ml-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <Badge
                          variant={exp.type === "work" ? "default" : exp.type === "project" ? "secondary" : "outline"}
                        >
                          {exp.type === "work" ? "Work" : exp.type === "project" ? "Project" : "Learning"}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-primary">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-pretty">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
