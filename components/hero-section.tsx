import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Connecting Corporates with the
                <span className="text-primary"> Right Talent</span>, Fast
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                PlutoPlacements specializes in bulk hiring and workforce management across BPO, KPO, IT, and Non-IT
                sectors. We deliver end-to-end recruitment solutions that scale with your business needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Hiring Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Placements</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Building className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/professional-team-meeting.png"
              alt="Professional HR team collaborating"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
