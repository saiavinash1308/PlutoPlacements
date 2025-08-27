import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Scale, Shield, Award } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Speed",
    description: "Rapid deployment with streamlined processes that deliver results in record time.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Flexible solutions that grow with your business needs, from startups to enterprises.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Proven track record with 95% client satisfaction and long-term partnerships.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Deep industry knowledge and specialized recruitment expertise across all sectors.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why Choose PlutoPlacements?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence and client success sets us apart in the competitive HR solutions landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-background hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
