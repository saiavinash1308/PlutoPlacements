import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Target, ArrowRight } from "lucide-react"

export default function BulkHiringPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Bulk Hiring Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Scale your workforce efficiently with our comprehensive bulk hiring services. From 50 to 5000+ positions, we
          deliver quality talent at speed.
        </p>
        <div className="mt-8">
          <Button size="lg" className="mr-4">
            Start Your Campaign
          </Button>
          <Button variant="outline" size="lg">
            View Case Studies
          </Button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Why Choose Our Bulk Hiring</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Rapid Deployment</h3>
              <p className="text-muted-foreground text-sm">Complete hiring cycles in 15-30 days</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Volume Expertise</h3>
              <p className="text-muted-foreground text-sm">Handle 50-5000+ positions simultaneously</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Quality Focus</h3>
              <p className="text-muted-foreground text-sm">95%+ candidate retention rate</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">End-to-End</h3>
              <p className="text-muted-foreground text-sm">Complete recruitment lifecycle management</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Bulk Hiring Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary text-xl">1</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Requirement Analysis</h3>
            <p className="text-muted-foreground">
              Deep dive into your hiring needs, job profiles, and organizational culture
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary text-xl">2</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Talent Sourcing</h3>
            <p className="text-muted-foreground">
              Multi-channel sourcing strategy to build a robust candidate pipeline
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary text-xl">3</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Deployment & Support</h3>
            <p className="text-muted-foreground">
              Seamless onboarding and post-placement support for optimal retention
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "BPO/Call Centers",
            "KPO Services",
            "IT & Software",
            "Manufacturing",
            "Healthcare",
            "Retail & E-commerce",
            "Banking & Finance",
            "Logistics",
          ].map((industry) => (
            <Card key={industry} className="p-4 text-center hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <p className="font-medium">{industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="font-serif text-3xl font-bold mb-4">Ready to Scale Your Team?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your bulk hiring requirements and create a customized solution that delivers results.
        </p>
        <Button size="lg" className="mr-4">
          Get Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Download Brochure
        </Button>
      </section>
    </div>
  )
}
