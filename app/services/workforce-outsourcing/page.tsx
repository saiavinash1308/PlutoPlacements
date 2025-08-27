import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Globe, DollarSign, Clock, Shield } from "lucide-react"

export default function WorkforceOutsourcingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Workforce Outsourcing</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Scale your operations efficiently with our comprehensive workforce outsourcing solutions.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Explore Outsourcing
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Outsource Your Workforce?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Focus on your core business while we handle your workforce management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Cost Reduction",
                description: "Reduce operational costs by up to 40% while maintaining quality standards.",
              },
              {
                icon: Globe,
                title: "Global Talent Access",
                description: "Access skilled professionals from around the world without geographical limitations.",
              },
              {
                icon: Clock,
                title: "24/7 Operations",
                description: "Round-the-clock operations with teams across different time zones.",
              },
              {
                icon: Shield,
                title: "Risk Mitigation",
                description: "Transfer operational risks and ensure compliance with local regulations.",
              },
              {
                icon: Users,
                title: "Scalability",
                description: "Quickly scale your workforce up or down based on business demands.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Maintain high-quality standards with our proven processes and methodologies.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Outsourcing Services
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Business Process Outsourcing (BPO)",
                  description:
                    "Complete business process management including customer service, data entry, and back-office operations.",
                },
                {
                  title: "Knowledge Process Outsourcing (KPO)",
                  description:
                    "High-value knowledge work including research, analytics, and specialized professional services.",
                },
                {
                  title: "IT Outsourcing",
                  description:
                    "Technology services including software development, maintenance, and IT support operations.",
                },
                {
                  title: "Manufacturing Outsourcing",
                  description:
                    "Production and manufacturing services with quality control and supply chain management.",
                },
              ].map((service, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover how workforce outsourcing can transform your business efficiency.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
