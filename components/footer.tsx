import { Separator } from "@/components/ui/separator"
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-serif font-bold text-2xl">PlutoPlacements</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comprehensive HR solutions and workforce management across all industry sectors.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Bulk Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Corporate Staffing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Workforce Outsourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Talent Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  BPO Sector
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  KPO Sector
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  IT Sector
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Non-IT Sector
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+91-9521887458</li>
              <li>sasapuharish@plutoplacements.com</li>
              <li>
                Business Address
                <br />
                Hyderabad, Telangana - 500043
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80">
          <p>&copy; 2025 PlutoPlacements. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
