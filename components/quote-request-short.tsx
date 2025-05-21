"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function QuoteRequestShort() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <Input
          placeholder="Your Name"
          required
          className="bg-white/20 border-orange-600/30 placeholder:text-white/60 text-white focus:border-orange-600 transition-colors duration-300 rounded-lg"
        />
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="bg-white/20 border-orange-600/30 placeholder:text-white/60 text-white focus:border-orange-600 transition-colors duration-300 rounded-lg"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          required
          className="bg-white/20 border-orange-600/30 placeholder:text-white/60 text-white focus:border-orange-600 transition-colors duration-300 rounded-lg"
        />
        <Select required>
          <SelectTrigger className="bg-white/20 border-white/10 text-white rounded-lg">
            <SelectValue placeholder="Service Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customs-consultancy">Customs Consultancy</SelectItem>
            <SelectItem value="customs-clearance">Customs Clearance</SelectItem>
            <SelectItem value="port-clearance">Port Clearance</SelectItem>
            <SelectItem value="warehousing">Warehousing</SelectItem>
            <SelectItem value="transportation">Transportation</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Brief Description of Your Requirements"
          className="bg-white/20 border-orange-600/30 placeholder:text-white/60 text-white focus:border-orange-600 transition-colors duration-300 rounded-lg"
          rows={3}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-black hover:text-white border border-orange-600 rounded-lg transition-all duration-300 hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  )
}
