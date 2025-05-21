import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileCheck, Truck, Warehouse, MapPin, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/services-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Our Services</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              Comprehensive freight forwarding and customs clearing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Comprehensive Logistics Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At Shipify International, we offer a wide range of services to meet all your freight forwarding and
              customs clearing needs
            </p>
          </div>

          <div className="grid gap-12">
            {/* Customs Consultancy */}
            <div id="customs-consultancy" className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center icon-circle">
                    <FileCheck className="h-6 w-6 text-[#006400]" />
                  </div>
                  <h3 className="text-2xl font-bold">Customs Consultancy</h3>
                  <p className="text-muted-foreground">
                    Our customs consultancy service provides expert guidance on customs regulations, documentation, and
                    compliance requirements. We help you navigate the complexities of international trade and ensure
                    that your shipments comply with all relevant regulations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Advice on customs regulations and procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Guidance on documentation requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Compliance with international trade regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Tariff classification and valuation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/customs-consultancy.jpg"
                  alt="Customs Consultancy"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Customs Clearance */}
            <div id="customs-clearance" className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Image
                  src="/images/customs-clearance.jpg"
                  alt="Customs Clearance"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center icon-circle">
                    <FileCheck className="h-6 w-6 text-[#006400]" />
                  </div>
                  <h3 className="text-2xl font-bold">Customs Clearance</h3>
                  <p className="text-muted-foreground">
                    Our customs clearance service ensures the efficient processing of import and export documentation
                    for smooth customs clearance. We handle all the paperwork and liaise with customs authorities on
                    your behalf, saving you time and hassle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Processing of import and export documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Liaison with customs authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Payment of duties and taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Expedited clearance processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Port Clearance */}
            <div id="port-clearance" className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center icon-circle">
                    <MapPin className="h-6 w-6 text-[#006400]" />
                  </div>
                  <h3 className="text-2xl font-bold">Port Clearance</h3>
                  <p className="text-muted-foreground">
                    Our port clearance service provides specialized assistance for clearing goods at ports of entry
                    across Zimbabwe. We have extensive experience working with port authorities and can ensure that your
                    goods are cleared quickly and efficiently.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Clearance at all major ports of entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Coordination with port authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Handling of port-specific documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Expedited port clearance processes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/port-clearance.jpg"
                  alt="Port Clearance"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Warehousing */}
            <div id="warehousing" className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Image
                  src="/images/warehousing.jpg"
                  alt="Warehousing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center icon-circle">
                    <Warehouse className="h-6 w-6 text-[#006400]" />
                  </div>
                  <h3 className="text-2xl font-bold">Warehousing</h3>
                  <p className="text-muted-foreground">
                    Our warehousing service offers secure storage solutions with inventory management and distribution
                    services. We have state-of-the-art facilities that ensure the safety and security of your goods
                    while they are in our care.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Secure storage facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Distribution services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Short and long-term storage options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div id="transportation" className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center icon-circle">
                    <Truck className="h-6 w-6 text-[#006400]" />
                  </div>
                  <h3 className="text-2xl font-bold">Transportation</h3>
                  <p className="text-muted-foreground">
                    Our transportation service provides reliable local and international transportation services for
                    your cargo. We have a network of trusted carriers and can arrange for the transportation of your
                    goods by road, air, or sea.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Local and international transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Road, air, and sea freight options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Door-to-door delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orangered flex-shrink-0 mt-0.5" />
                      <span>Tracking and monitoring of shipments</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/transportation.jpg"
                  alt="Transportation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Need a Customized Solution?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Contact us today to discuss your specific freight forwarding and customs clearing requirements. We offer
              tailored solutions to meet your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/80 text-black font-medium">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
