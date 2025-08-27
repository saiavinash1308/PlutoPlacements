"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, Mail, ChevronDown, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-serif font-bold text-2xl text-primary">
              PlutoPlacements
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-background border border-border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/services/bulk-hiring" className="w-full">
                      Bulk Hiring
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/hr-consulting" className="w-full">
                      HR Consulting
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/corporate-staffing" className="w-full">
                      Corporate Staffing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/workforce-outsourcing" className="w-full">
                      Workforce Outsourcing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/talent-management" className="w-full">
                      Talent Management
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Industries</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-background border border-border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/industries/bpo" className="w-full">
                      BPO Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/industries/kpo" className="w-full">
                      KPO Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/industries/it" className="w-full">
                      IT Sector
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/industries/non-it" className="w-full">
                      Non-IT Sector
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/candidates" className="text-foreground hover:text-primary transition-colors">
                Candidates
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91-9521887458</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>sasapuharish@plutoplacements.com</span>
              </div>
            </div>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/candidates">Get Started</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Services submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/bulk-hiring"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Bulk Hiring
                  </Link>
                  <Link
                    href="/services/hr-consulting"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HR Consulting
                  </Link>
                  <Link
                    href="/services/corporate-staffing"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Corporate Staffing
                  </Link>
                  <Link
                    href="/services/workforce-outsourcing"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Workforce Outsourcing
                  </Link>
                  <Link
                    href="/services/talent-management"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talent Management
                  </Link>
                </div>
              </div>

              {/* Industries submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Industries</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/industries/bpo"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    BPO Services
                  </Link>
                  <Link
                    href="/industries/kpo"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    KPO Services
                  </Link>
                  <Link
                    href="/industries/it"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    IT Sector
                  </Link>
                  <Link
                    href="/industries/non-it"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Non-IT Sector
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/candidates"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Candidates
              </Link>

              <div className="px-4 py-2">
                <Button className="w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/candidates">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
