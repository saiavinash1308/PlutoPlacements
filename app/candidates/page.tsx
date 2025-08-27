"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, FileText, CheckCircle, Users, Briefcase, Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CandidatesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast({
      title: "Application Submitted!",
      description: "We'll review your profile and get back to you soon.",
    })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold mb-4">Application Submitted Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in joining our talent pool. Our HR team will review your application and
              contact you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Join Our Talent Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Submit your resume and become part of our extensive talent pool. We connect skilled professionals with
              leading companies across various industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">10,000+ Candidates</h3>
                <p className="text-sm text-muted-foreground">In our talent network</p>
              </div>
              <div className="text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Multiple Industries</h3>
                <p className="text-sm text-muted-foreground">BPO, KPO, IT, Non-IT sectors</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-sm text-muted-foreground">Opportunities with top companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Submit Your Application</CardTitle>
                <CardDescription>
                  Fill out the form below to join our talent network. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Current Location *</Label>
                    <Input id="location" name="location" placeholder="City, State/Country" required />
                  </div>

                  {/* Professional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select name="experience" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="industry">Preferred Industry *</Label>
                      <Select name="industry" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bpo">BPO</SelectItem>
                          <SelectItem value="kpo">KPO</SelectItem>
                          <SelectItem value="it">IT</SelectItem>
                          <SelectItem value="non-it">Non-IT</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentRole">Current Job Title</Label>
                    <Input
                      id="currentRole"
                      name="currentRole"
                      placeholder="e.g., Software Developer, Customer Service Representative"
                    />
                  </div>

                  <div>
                    <Label htmlFor="skills">Key Skills *</Label>
                    <Textarea
                      id="skills"
                      name="skills"
                      placeholder="List your key skills, technologies, or areas of expertise"
                      required
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label htmlFor="resume">Upload Resume/CV *</Label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md hover:border-primary/50 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="flex text-sm text-muted-foreground">
                          <label
                            htmlFor="resume"
                            className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80"
                          >
                            <span>Upload a file</span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              className="sr-only"
                              accept=".pdf,.doc,.docx"
                              required
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter / Additional Information</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      placeholder="Tell us why you're interested in joining our talent network..."
                      rows={4}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" name="consent" required />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to PlutoPlacements storing and processing my personal data for recruitment purposes. *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" name="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      I would like to receive updates about job opportunities and company news.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <FileText className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
