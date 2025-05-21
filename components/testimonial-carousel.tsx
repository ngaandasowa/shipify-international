"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "PAT Investments",
    role: "Manufacturing Company",
    content:
      "Shipify International has been instrumental in streamlining our import processes. Their expertise in customs clearance has saved us both time and money.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Tianze China Tobacco",
    role: "Tobacco Exporter",
    content:
      "We've been working with Shipify for over 3 years now. Their knowledge of international shipping regulations and customs procedures is unmatched in Zimbabwe.",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Global Trade Solutions",
    role: "Import/Export Business",
    content:
      "The team at Shipify International consistently delivers exceptional service. Their attention to detail and proactive approach has made our logistics operations seamless.",
    image: "/images/testimonial-3.jpg",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border rounded-lg card-animate">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-orange-600 transition-all duration-300 ease-in-out">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Quote className="h-8 w-8 text-orange-600 opacity-50" />
                    <p className="text-lg italic">{testimonial.content}</p>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-2 h-2 rounded-full p-0 transition-all duration-300 ease-in-out border-orange-600 ${
              index === current ? "bg-orange-600" : "bg-transparent"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
