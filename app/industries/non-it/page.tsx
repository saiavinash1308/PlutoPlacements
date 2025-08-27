import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Building, Heart, GraduationCap, ShoppingCart, Truck } from "lucide-react"

export default function NonITPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Non-IT Sector Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive staffing solutions across diverse industries beyond technology.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional staffing solutions across traditional and emerging non-IT sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Healthcare",
                description: "Medical professionals, nurses, healthcare administrators, and support staff.",
              },
              {
                icon: GraduationCap,
                title: "Education",
                description: "Teachers, administrators, educational consultants, and training specialists.",
              },
              {
                icon: Building,
                title: "Construction",
                description: "Engineers, project managers, skilled trades, and construction professionals.",
              },
              {
                icon: ShoppingCart,
                title: "Retail & Sales",
                description: "Sales representatives, store managers, merchandisers, and customer service staff.",
              },
              {
                icon: Truck,
                title: "Manufacturing",
                description: "Production workers, quality control, supervisors, and operations managers.",
              },
              {
                icon: Users,
                title: "Hospitality",
                description: "Hotel staff, restaurant professionals, event coordinators, and service personnel.",
              },
            ].map((sector, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <sector.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{sector.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Job Categories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Administrative",
                  roles: ["Office Managers", "Executive Assistants", "Data Entry Clerks", "Receptionists"],
                },
                {
                  category: "Finance & Accounting",
                  roles: ["Accountants", "Financial Analysts", "Bookkeepers", "Auditors"],
                },
                {
                  category: "Sales & Marketing",
                  roles: ["Sales Representatives", "Marketing Coordinators", "Account Managers", "Brand Specialists"],
                },
                {
                  category: "Operations",
                  roles: [
                    "Operations Managers",
                    "Supply Chain Specialists",
                    "Logistics Coordinators",
                    "Quality Inspectors",
                  ],
                },
                {
                  category: "Human Resources",
                  roles: ["HR Generalists", "Recruiters", "Training Specialists", "Compensation Analysts"],
                },
                {
                  category: "Customer Service",
                  roles: ["Customer Representatives", "Call Center Agents", "Support Specialists", "Client Relations"],
                },
              ].map((category, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {role}
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Our Non-IT Staffing?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Deep understanding of industry-specific requirements",
                "Extensive network of qualified professionals",
                "Flexible staffing solutions: temporary, permanent, contract",
                "Rigorous screening and background verification",
                "Quick turnaround times for urgent staffing needs",
                "Ongoing support and performance monitoring",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Non-IT Professionals?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with qualified professionals across diverse industries to meet your staffing needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Find Candidates
          </Button>
        </div>
      </section>
    </div>
  )
}
