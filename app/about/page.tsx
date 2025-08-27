import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About PlutoPlacements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading HR solutions provider specializing in bulk hiring and workforce management across diverse
            industries. We connect talent with opportunity at scale.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize the hiring landscape by providing scalable, efficient, and quality-driven recruitment
                solutions that empower businesses to achieve their workforce goals seamlessly.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted partner for organizations seeking comprehensive HR solutions, setting new
                standards in bulk recruitment and workforce management across all industries.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Stats */}
        <section className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Placements Made</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why Choose PlutoPlacements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Seasoned HR professionals with deep industry knowledge and proven track record.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous screening processes ensuring only the best candidates reach you.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  From small teams to large-scale operations, we adapt to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-lg p-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with PlutoPlacements and experience the difference that expert HR solutions can make for your
            business.
          </p>
          <Button size="lg" className="mr-4">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg">
            Schedule Consultation
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
