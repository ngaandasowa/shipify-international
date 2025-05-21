"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

export default function QuotePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your request. Our team will contact you shortly.",
      })

      // Reset form
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/quote-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Request a Quote</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              Fill out the form below to request a quote for our freight forwarding and customs clearing services
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <Card className="card-animate">
                <CardHeader>
                  <CardTitle>Quote Request Form</CardTitle>
                  <CardDescription>
                    Please provide the details of your shipment to receive an accurate quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" placeholder="Your company name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Your email address" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="Your phone number" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Service Requirements</h3>
                      <div className="space-y-2">
                        <Label htmlFor="service-type">Service Type</Label>
                        <Select required>
                          <SelectTrigger id="service-type">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customs-consultancy">Customs Consultancy</SelectItem>
                            <SelectItem value="customs-clearance">Customs Clearance</SelectItem>
                            <SelectItem value="port-clearance">Port Clearance</SelectItem>
                            <SelectItem value="warehousing">Warehousing</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Shipment Type</Label>
                        <RadioGroup defaultValue="import" className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="import" id="import" />
                            <Label htmlFor="import">Import</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="export" id="export" />
                            <Label htmlFor="export">Export</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="both" />
                            <Label htmlFor="both">Both</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Shipment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin">Origin</Label>
                          <Input id="origin" placeholder="Country/City of origin" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination</Label>
                          <Input id="destination" placeholder="Country/City of destination" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cargo-type">Cargo Type</Label>
                          <Input id="cargo-type" placeholder="Type of cargo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Estimated Weight (kg)</Label>
                          <Input id="weight" type="number" placeholder="Estimated weight" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dimensions">Dimensions (cm)</Label>
                          <Input id="dimensions" placeholder="L x W x H" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="value">Estimated Value (USD)</Label>
                          <Input id="value" type="number" placeholder="Estimated value" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="special-requirements">Special Requirements</Label>
                        <Textarea
                          id="special-requirements"
                          placeholder="Any special requirements or additional information"
                          rows={4}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" required />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the terms and conditions
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            By submitting this form, you agree to our{" "}
                            <Link href="/terms" className="text-[#006400] hover:underline">
                              terms and conditions
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-[#006400] hover:underline">
                              privacy policy
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="bg-orangered text-white hover:bg-red-700 font-medium rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="sticky top-20 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-orangered/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-sm text-muted-foreground">+263 123 456 789</p>
                        <p className="text-sm text-muted-foreground">+263 987 654 321</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-orangered/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-muted-foreground">info@shipifyinternational.com</p>
                        <p className="text-sm text-muted-foreground">quotes@shipifyinternational.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-orangered/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-sm text-muted-foreground">
                          Near Robert Mugabe International Airport, Harare, Zimbabwe
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered h-5 w-5 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>Experienced team of professionals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered h-5 w-5 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>Local expertise in Zimbabwean customs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered h-5 w-5 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>Comprehensive end-to-end solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered h-5 w-5 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>Competitive pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orangered h-5 w-5 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>Personalized customer service</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
