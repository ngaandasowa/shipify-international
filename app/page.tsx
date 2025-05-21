import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Truck, FileCheck, Warehouse, Users, MapPin, Phone, Mail } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { QuoteRequestShort } from "@/components/quote-request-short"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center py-20 md:py-32">
        <div className="hero-overlay" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl hero-text">
              Fast & Reliable Customs Clearance and Freight Forwarding Services
            </h1>
            <p className="text-xl text-white/90 max-w-[600px] animate-fade-in">
              Your trusted partner for seamless international trade solutions in Zimbabwe and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
              >
                <Link href="/services">
                  Our Services <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive freight forwarding and customs clearing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customs Consultancy</h3>
              <p className="text-muted-foreground">
                Expert guidance on customs regulations, documentation, and compliance requirements
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customs Clearance</h3>
              <p className="text-muted-foreground">
                Efficient processing of import and export documentation for smooth customs clearance
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Port Clearance</h3>
              <p className="text-muted-foreground">
                Specialized services for clearing goods at ports of entry across Zimbabwe
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <Warehouse className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
              <p className="text-muted-foreground">
                Secure storage solutions with inventory management and distribution services
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transportation</h3>
              <p className="text-muted-foreground">
                Reliable local and international transportation services for your cargo
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                Dedicated account managers to handle your specific freight forwarding needs
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="btn-secondary">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-gray">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/warehouse.jpg"
                alt="Shipify International Warehouse"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Shipify International?</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ease-in-out">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of Zimbabwean customs regulations and procedures
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ease-in-out">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Team</h3>
                    <p className="text-muted-foreground">
                      Highly qualified professionals with years of industry experience
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ease-in-out">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">End-to-End Solutions</h3>
                    <p className="text-muted-foreground">Comprehensive services from documentation to final delivery</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ease-in-out">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Customer-Centric Approach</h3>
                    <p className="text-muted-foreground">Dedicated to providing personalized service and support</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="btn-primary">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading businesses across Zimbabwe and beyond
            </p>
          </div>

          <TestimonialCarousel />

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="btn-secondary">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg">
                Request a quote for our freight forwarding and customs clearing services. Our team will get back to you
                within 24 hours.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-600" />
                  <span>No obligation quotes</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-600" />
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-600" />
                  <span>Personalized service</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 ease-in-out">
              <QuoteRequestShort />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-gray">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-muted-foreground">Near Robert Mugabe International Airport, Harare, Zimbabwe</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+263 123 456 789</p>
              <p className="text-muted-foreground">+263 987 654 321</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-animate">
              <div className="h-12 w-12 icon-circle mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@shipifyinternational.com</p>
              <p className="text-muted-foreground">support@shipifyinternational.com</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="btn-primary">
              <Link href="/contact">View Full Contact Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
