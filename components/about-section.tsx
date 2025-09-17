import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A passionate developer with a strong foundation in computer science and hands-on experience in cutting-edge
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <div className="space-y-2">
                      <p className="font-medium">Bachelor of Technology - Computer Science</p>
                      <p className="text-muted-foreground">M.L.V. Textile and Engineering College</p>
                      <p className="text-sm text-muted-foreground">Sept 2023 – May 2027</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Bapu Nagar, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 9468999789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">parthsharmacj@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">What I Do</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Computer Vision & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Building intelligent systems using OpenCV, YOLOv8, and CNN architectures for feature extraction
                      and image classification.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating robust APIs and systems using Node.js, Express.js, and MongoDB with secure authentication
                      and real-time data handling.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Generative AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Working with Large Language Models like GPT, LLaMA, and Mistral, building applications using
                      LangChain framework.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Data Structures and Algorithm Certification - Pregrad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Micro Certification - ServiceNow</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
