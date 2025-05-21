import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/testimonials-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Client Testimonials</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              See what our clients have to say about our freight forwarding and customs clearing services
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We take pride in providing exceptional service to our clients. Here's what they have to say about working
              with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-1.jpg" alt="PAT Investments" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "Shipify International has been instrumental in streamlining our import processes. Their expertise
                    in customs clearance has saved us both time and money. We highly recommend their services to any
                    business involved in international trade."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">PAT Investments</h4>
                    <p className="text-muted-foreground">Manufacturing Company</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-2.jpg" alt="Tianze China Tobacco" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "We've been working with Shipify for over 3 years now. Their knowledge of international shipping
                    regulations and customs procedures is unmatched in Zimbabwe. Their team is always responsive and
                    goes above and beyond to ensure our shipments are processed smoothly."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">Tianze China Tobacco</h4>
                    <p className="text-muted-foreground">Tobacco Exporter</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-3.jpg" alt="Global Trade Solutions" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "The team at Shipify International consistently delivers exceptional service. Their attention to
                    detail and proactive approach has made our logistics operations seamless. We appreciate their
                    dedication to understanding our unique needs."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">Global Trade Solutions</h4>
                    <p className="text-muted-foreground">Import/Export Business</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-4.png" alt="Zimbabwe Mining Corp" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "As a mining company, we rely heavily on timely imports of equipment and exports of minerals.
                    Shipify International has been a reliable partner in managing our complex logistics needs. Their
                    expertise in handling specialized cargo is impressive."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">Zimbabwe Mining Corp</h4>
                    <p className="text-muted-foreground">Mining Company</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-5.jpg" alt="Harare Tech Imports" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "We import sensitive electronic equipment that requires careful handling and expedited customs
                    clearance. Shipify International has consistently delivered on their promises, ensuring our goods
                    arrive safely and on time."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">Harare Tech Imports</h4>
                    <p className="text-muted-foreground">Technology Importer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="border-none shadow-lg card-animate">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                    <Image src="/images/testimonial-6.jpg" alt="African Textiles Ltd" fill className="object-cover" />
                  </div>
                  <Quote className="h-8 w-8 text-[#FF4500] opacity-50" />
                  <p className="text-lg italic">
                    "Working with Shipify International has transformed our export operations. Their knowledge of
                    international markets and customs regulations has helped us expand our business across Africa. Their
                    team is professional, efficient, and a pleasure to work with."
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">African Textiles Ltd</h4>
                    <p className="text-muted-foreground">Textile Manufacturer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Trusted Clients</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We're proud to work with leading businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <Image
              src="/images/client-logo-1.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/client-logo-2.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/client-logo-3.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/client-logo-4.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/client-logo-5.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/client-logo-6.png"
              alt="Client Logo"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Satisfied Clients</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the exceptional service that our clients rave about. Contact us today to discuss your freight
              forwarding and customs clearing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="primary">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
