import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Building2, Briefcase, Target } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Bulk Hiring & Mass Recruitment",
    description:
      "High-volume talent acquisition for BPO, KPO, IT, and Non-IT sectors with streamlined processes and quick turnaround times.",
  },
  {
    icon: UserCheck,
    title: "HR Solutions & Consulting",
    description:
      "Tailored HR strategies, workforce planning, and process optimization to enhance your organization's human capital management.",
  },
  {
    icon: Building2,
    title: "Corporate Staffing Solutions",
    description:
      "Providing skilled manpower across multiple domains with flexible engagement models to meet your specific requirements.",
  },
  {
    icon: Briefcase,
    title: "Workforce Outsourcing",
    description:
      "Flexible and reliable staffing models to support business growth while reducing operational overhead and complexity.",
  },
  {
    icon: Target,
    title: "Talent Management",
    description:
      "End-to-end employee lifecycle support including sourcing, onboarding, training, and retention strategies.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive HR solutions designed to meet your organization's unique workforce challenges and growth
            objectives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
