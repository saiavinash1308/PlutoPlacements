import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Database, Cloud, Shield, Smartphone, Monitor } from "lucide-react"

export default function ITPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">IT Sector Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive IT staffing and technology solutions to power your digital transformation.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Find IT Talent
            </Button>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete IT Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From software development to infrastructure management, we provide end-to-end IT services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Software Development",
                description: "Custom software solutions, web applications, and mobile app development services.",
              },
              {
                icon: Database,
                title: "Data Management",
                description: "Database design, data analytics, and business intelligence solutions.",
              },
              {
                icon: Cloud,
                title: "Cloud Services",
                description: "Cloud migration, infrastructure management, and DevOps implementation.",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Security audits, threat assessment, and comprehensive cybersecurity solutions.",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for iOS and Android.",
              },
              {
                icon: Monitor,
                title: "IT Support",
                description: "24/7 technical support, system maintenance, and helpdesk services.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Technology Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "Angular", "Vue.js", "TypeScript"],
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Python", "Java", ".NET"],
                },
                {
                  category: "Database",
                  technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
                },
                {
                  category: "Cloud",
                  technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
                },
              ].map((stack, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="text-center text-muted-foreground">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IT Roles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">IT Roles We Staff</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Software Engineers & Developers",
                "DevOps & Cloud Engineers",
                "Data Scientists & Analysts",
                "Cybersecurity Specialists",
                "UI/UX Designers",
                "Project Managers & Scrum Masters",
                "Quality Assurance Engineers",
                "Database Administrators",
                "System Administrators",
                "Technical Architects",
              ].map((role, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your IT Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with top IT professionals who can drive your technology initiatives forward.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Hire IT Talent
          </Button>
        </div>
      </section>
    </div>
  )
}
