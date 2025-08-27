"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const clients = [
  {
    name: "Infosis BPM",
    logo: "/infosis.png",
    industry: "IT Services",
    hires: "50+ Hires",
    testimonial: "PlutoPlacements delivered exceptional talent for our expansion.",
  },
  {
    name: "Teleperformance",
    logo: "/TP.png",
    industry: "BPO",
    hires: "1200+ Hires",
    testimonial: "Outstanding bulk hiring services with quality candidates.",
  },
  {
    name: "First Source",
    logo: "/FirstSource.png",
    industry: "KPO",
    hires: "300+ Hires",
    testimonial: "Professional approach and timely delivery of skilled professionals.",
  },
  {
    name: "TTEC",
    logo: "/TTECH.png",
    industry: "Manufacturing",
    hires: "800+ Hires",
    testimonial: "Reliable partner for our workforce requirements.",
  },
  {
    name: "Tech M",
    logo: "/Tech-M.png",
    industry: "Finance",
    hires: "400+ Hires",
    testimonial: "Excellent service in providing qualified finance professionals.",
  },
  {
    name: "Concentrix",
    logo: "/Concentrix.png",
    industry: "Retail",
    hires: "600+ Hires",
    testimonial: "Great support in scaling our retail operations nationwide.",
  },
]

export default function ClientsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've successfully placed thousands of candidates across various industries, building lasting partnerships
            with top organizations.
          </p>
        </div>

        {/* Scrolling Banner */}
        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 px-2">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      className="h-16 w-auto mx-auto mb-4 object-contain"
                    />
                    <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {client.industry}
                    </Badge>
                    <p className="text-primary font-semibold mb-3">{client.hires}</p>
                    <p className="text-sm text-muted-foreground italic">"{client.testimonial}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-card p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Successful Placements</div>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
