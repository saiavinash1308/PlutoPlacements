"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MessageCircle, ChevronLeft, X } from "lucide-react"

export default function SocialSidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/plutoplacements", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com/plutoplacements", label: "Twitter", color: "hover:bg-sky-500" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/plutoplacements",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    { icon: Instagram, href: "https://instagram.com/plutoplacements", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Mail, href: "mailto:sasapuharish@plutoplacements.com", label: "Email", color: "hover:bg-red-600" },
    { icon: Phone, href: "tel:+91 9521887458", label: "Call Us", color: "hover:bg-green-600" },
    { icon: MessageCircle, href: "https://wa.me/919521887458", label: "WhatsApp", color: "hover:bg-green-500" },
  ]

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div
        className={`bg-card/90 backdrop-blur-sm border border-border/50 rounded-l-lg shadow-lg transition-all duration-300 ${
          isExpanded ? "translate-x-0" : "translate-x-44"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded && (
          <div className="flex justify-end p-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="p-3">
          <div className="flex flex-col gap-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-full justify-start gap-3 ${social.color} text-foreground hover:text-white transition-colors backdrop-blur-sm`}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                  <span className={`transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
                    {social.label}
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <button
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-8 rounded-l-lg transition-all duration-300 hover:bg-primary cursor-pointer flex flex-col items-center justify-center ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsExpanded(true)}
        onMouseEnter={() => setIsExpanded(true)}
        aria-label="Open social media links"
      >
        <ChevronLeft className="h-4 w-4 mb-2" />
        <div className="flex flex-col items-center text-xs font-medium tracking-wider leading-tight">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>N</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
        </div>
      </button>
    </div>
  )
}
