import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, Database, Code, Factory } from "lucide-react"

const industries = [
  {
    icon: Headphones,
    title: "BPO Sector",
    description: "Customer service, technical support, and back-office operations staffing solutions.",
    stats: "2000+ placements",
  },
  {
    icon: Database,
    title: "KPO Sector",
    description: "Knowledge process outsourcing including research, analytics, and specialized services.",
    stats: "1500+ placements",
  },
  {
    icon: Code,
    title: "IT Sector",
    description: "Software development, system administration, and technical consulting roles.",
    stats: "50+ placements",
  },
  {
    icon: Factory,
    title: "Non-IT Sector",
    description: "Manufacturing, healthcare, finance, retail, and other traditional industry roles.",
    stats: "4000+ placements",
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized recruitment expertise across diverse sectors with deep understanding of industry-specific
            requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <industry.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {industry.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
