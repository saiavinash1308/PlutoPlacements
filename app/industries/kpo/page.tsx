import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Brain, BarChart3, FileSearch, Microscope, Calculator, BookOpen } from "lucide-react"

export default function KPOPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">KPO Services</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Knowledge Process Outsourcing solutions that leverage expertise and analytics to drive business
              intelligence.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Explore KPO Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* KPO Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">High-Value Knowledge Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized knowledge work that requires domain expertise and analytical capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Research & Analytics",
                description:
                  "Market research, data analysis, and business intelligence services for informed decision-making.",
              },
              {
                icon: Calculator,
                title: "Financial Analysis",
                description: "Investment research, risk assessment, and financial modeling for strategic planning.",
              },
              {
                icon: FileSearch,
                title: "Legal Process Outsourcing",
                description: "Legal research, document review, and compliance services by qualified professionals.",
              },
              {
                icon: Microscope,
                title: "Healthcare Analytics",
                description: "Medical coding, clinical research, and healthcare data analysis services.",
              },
              {
                icon: Brain,
                title: "Engineering Services",
                description: "CAD design, product development, and technical documentation services.",
              },
              {
                icon: BookOpen,
                title: "Content Development",
                description: "Technical writing, educational content, and knowledge base development.",
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

      {/* Expertise Areas */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Domain Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "Investment banking, wealth management, and financial planning expertise.",
                },
                {
                  title: "Healthcare & Life Sciences",
                  description: "Medical research, pharmaceutical analysis, and clinical data management.",
                },
                {
                  title: "Legal & Compliance",
                  description: "Legal research, contract analysis, and regulatory compliance services.",
                },
                {
                  title: "Engineering & Manufacturing",
                  description: "Product design, process optimization, and technical documentation.",
                },
                {
                  title: "Market Research",
                  description: "Consumer insights, competitive analysis, and market intelligence.",
                },
                {
                  title: "Education & Training",
                  description: "Curriculum development, e-learning content, and educational assessment.",
                },
              ].map((area, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">KPO Advantages</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Access to specialized domain experts and analysts",
                "Advanced analytical tools and methodologies",
                "Cost-effective alternative to in-house expertise",
                "Scalable knowledge services based on project needs",
                "Faster turnaround times with quality assurance",
                "Strategic insights that drive business growth",
              ].map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Knowledge Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Leverage our domain expertise to gain competitive advantages and drive innovation.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
          >
            Discuss Your Needs
          </Button>
        </div>
      </section>
    </div>
  )
}
