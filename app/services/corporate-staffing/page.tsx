import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Clock, Shield, TrendingUp } from "lucide-react"

export default function CorporateStaffingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Corporate Staffing Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic staffing solutions that connect top talent with leading organizations across all industries.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Find Your Team
            </Button>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Staffing Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From temporary assignments to permanent placements, we provide comprehensive staffing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Permanent Placement",
                description:
                  "Find the right full-time employees who align with your company culture and long-term goals.",
              },
              {
                icon: Clock,
                title: "Temporary Staffing",
                description: "Flexible temporary staffing solutions for project-based work and seasonal demands.",
              },
              {
                icon: Target,
                title: "Contract-to-Hire",
                description: "Evaluate candidates through contract work before making permanent hiring decisions.",
              },
              {
                icon: Shield,
                title: "Executive Search",
                description: "Specialized recruitment for C-level executives and senior management positions.",
              },
              {
                icon: TrendingUp,
                title: "Volume Recruitment",
                description: "Large-scale hiring solutions for companies expanding their workforce rapidly.",
              },
              {
                icon: Users,
                title: "Specialized Roles",
                description: "Expert recruitment for niche positions requiring specific skills and experience.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-secondary mb-4" />
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

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Staffing Process</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Requirement Analysis",
                  desc: "Understanding your specific staffing needs and requirements",
                },
                { step: "2", title: "Candidate Sourcing", desc: "Leveraging our network to find qualified candidates" },
                {
                  step: "3",
                  title: "Screening & Assessment",
                  desc: "Thorough evaluation of skills, experience, and cultural fit",
                },
                {
                  step: "4",
                  title: "Placement & Support",
                  desc: "Seamless onboarding and ongoing support for success",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Quality Staff Fast?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you build your dream team with our proven staffing solutions.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
          >
            Start Hiring Today
          </Button>
        </div>
      </section>
    </div>
  )
}
