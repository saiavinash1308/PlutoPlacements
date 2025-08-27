import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Headphones, MessageSquare, FileText, BarChart3, Clock, Globe } from "lucide-react"

export default function BPOPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">BPO Services</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive Business Process Outsourcing solutions to streamline your operations and reduce costs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore BPO Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* BPO Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our BPO Service Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end business process solutions designed to enhance efficiency and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "Customer Support",
                description: "24/7 multilingual customer service across voice, chat, and email channels.",
              },
              {
                icon: MessageSquare,
                title: "Technical Support",
                description: "Expert technical assistance and troubleshooting for your products and services.",
              },
              {
                icon: FileText,
                title: "Data Entry & Processing",
                description: "Accurate and efficient data management services with quality assurance.",
              },
              {
                icon: BarChart3,
                title: "Finance & Accounting",
                description: "Complete financial process outsourcing including bookkeeping and payroll.",
              },
              {
                icon: Clock,
                title: "Back Office Operations",
                description: "Administrative support services to streamline your internal processes.",
              },
              {
                icon: Globe,
                title: "Digital Marketing",
                description: "Comprehensive digital marketing services including SEO, social media, and content.",
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

      {/* Industry Expertise */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Industry Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Healthcare",
                "Financial Services",
                "E-commerce",
                "Telecommunications",
                "Insurance",
                "Real Estate",
                "Travel & Hospitality",
                "Technology",
              ].map((industry, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground">{industry}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Our BPO Services?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Cost reduction up to 60% compared to in-house operations",
                "Access to skilled professionals and latest technologies",
                "24/7 operations across multiple time zones",
                "Scalable solutions that grow with your business",
                "Improved focus on core business activities",
                "Enhanced service quality and customer satisfaction",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Business Processes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you reduce costs and improve efficiency with our proven BPO solutions.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Get BPO Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
