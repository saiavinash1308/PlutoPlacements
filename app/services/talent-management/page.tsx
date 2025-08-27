import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, TrendingUp, Award, BookOpen } from "lucide-react"

export default function TalentManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Talent Management Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Develop, engage, and retain your top talent with our comprehensive talent management strategies.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Enhance Your Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Talent Lifecycle Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From recruitment to retirement, we help you maximize your human capital investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Talent Acquisition",
                description:
                  "Strategic recruitment processes to attract and hire the best candidates for your organization.",
              },
              {
                icon: BookOpen,
                title: "Learning & Development",
                description: "Comprehensive training programs to enhance skills and accelerate career growth.",
              },
              {
                icon: TrendingUp,
                title: "Performance Management",
                description: "Data-driven performance evaluation systems that drive results and accountability.",
              },
              {
                icon: Award,
                title: "Succession Planning",
                description: "Identify and develop future leaders to ensure business continuity and growth.",
              },
              {
                icon: Users,
                title: "Employee Engagement",
                description: "Programs and initiatives to boost employee satisfaction and retention rates.",
              },
              {
                icon: CheckCircle,
                title: "Retention Strategies",
                description: "Proven methods to retain top performers and reduce costly employee turnover.",
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

      {/* Talent Management Cycle */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">The Talent Management Cycle</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { phase: "Attract", desc: "Source and recruit top talent aligned with your culture and goals" },
                { phase: "Develop", desc: "Provide continuous learning opportunities and skill enhancement" },
                { phase: "Engage", desc: "Create meaningful work experiences that motivate and inspire" },
                { phase: "Retain", desc: "Implement strategies to keep your best performers long-term" },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{phase.phase}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Benefits of Strategic Talent Management
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Increased employee productivity and performance",
                "Reduced recruitment and training costs",
                "Improved employee satisfaction and engagement",
                "Better succession planning and leadership pipeline",
                "Enhanced company culture and employer brand",
                "Higher retention rates and lower turnover costs",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock Your Team's Full Potential</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us to create a talent management strategy that drives business success.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  )
}
