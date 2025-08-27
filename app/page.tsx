import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ClientsShowcase from "@/components/clients-showcase"
import IndustriesSection from "@/components/industries-section"
import WhyChooseUs from "@/components/why-choose-us"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ClientsShowcase />
      <IndustriesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
