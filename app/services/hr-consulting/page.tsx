import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Shield, Clock, Award } from "lucide-react"

export default function HRConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">HR Consulting Services</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your HR operations with strategic consulting that drives organizational excellence and employee
              engagement.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get HR Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive HR Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert consultants provide end-to-end HR solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "HR Strategy Development",
                description:
                  "Develop comprehensive HR strategies aligned with your business objectives and growth plans.",
              },
              {
                icon: TrendingUp,
                title: "Performance Management",
                description:
                  "Implement effective performance management systems to drive employee productivity and engagement.",
              },
              {
                icon: Shield,
                title: "Compliance & Risk Management",
                description:
                  "Ensure full compliance with labor laws and mitigate HR-related risks across your organization.",
              },
              {
                icon: Clock,
                title: "Process Optimization",
                description: "Streamline HR processes and implement automation to improve efficiency and reduce costs.",
              },
              {
                icon: Award,
                title: "Compensation & Benefits",
                description:
                  "Design competitive compensation packages and benefits programs to attract and retain top talent.",
              },
              {
                icon: Users,
                title: "Change Management",
                description:
                  "Guide your organization through transitions with structured change management methodologies.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
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

      {/* Why Choose Our Consulting */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose PlutoPlacements HR Consulting?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "15+ years of HR consulting experience",
                "Certified HR professionals and consultants",
                "Industry-specific expertise across sectors",
                "Data-driven approach to HR solutions",
                "Customized strategies for your business",
                "Ongoing support and implementation guidance",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our HR experts help you build a stronger, more efficient organization.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
