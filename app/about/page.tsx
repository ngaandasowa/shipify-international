import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, TrendingUp, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/about-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">About Shipify International</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              Your trusted partner for seamless international trade solutions in Zimbabwe and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/company-building.jpg"
                alt="Shipify International Headquarters"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Company</h2>
              <p className="text-muted-foreground">
                Shipify International, operating under SkylightCargo Express, is a leading freight forwarding and
                customs clearing company based in Zimbabwe. With years of experience in the industry, we have
                established ourselves as a trusted partner for businesses looking to navigate the complexities of
                international trade.
              </p>
              <p className="text-muted-foreground">
                Our team of highly qualified professionals is dedicated to providing exceptional service and support to
                our clients. We understand the challenges of international shipping and customs clearance, and we work
                tirelessly to ensure that your goods move smoothly across borders.
              </p>
              <p className="text-muted-foreground">
                At Shipify International, we pride ourselves on our local expertise, global connections, and commitment
                to excellence. Our comprehensive range of services is designed to meet all your freight forwarding and
                customs clearing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Vision, Mission & Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 icon-circle mb-4">
                <TrendingUp className="h-6 w-6 text-[#006400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading freight forwarding and customs clearing company in Zimbabwe, known for our
                reliability, efficiency, and exceptional customer service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 icon-circle mb-4">
                <Globe className="h-6 w-6 text-[#006400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide comprehensive freight forwarding and customs clearing solutions that enable our clients to
                focus on their core business while we handle the complexities of international trade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 icon-circle mb-4">
                <Award className="h-6 w-6 text-[#006400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                  <span>Integrity in all our dealings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                  <span>Customer-centric approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500] flex-shrink-0 mt-0.5" />
                  <span>Continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Shipify International?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a range of benefits that set us apart from other freight forwarding and customs clearing
              companies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <Users className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground flex-grow">
                Our team consists of highly qualified professionals with years of experience in freight forwarding and
                customs clearing.
              </p>
            </div>

            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <Globe className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground flex-grow">
                We have deep understanding of Zimbabwean customs regulations and procedures, ensuring smooth clearance
                of your goods.
              </p>
            </div>

            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <Award className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-muted-foreground flex-grow">
                We are committed to providing exceptional service and support to our clients at every stage of the
                shipping process.
              </p>
            </div>

            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <Clock className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground flex-grow">
                We understand the importance of timely delivery and work diligently to ensure that your goods reach
                their destination on schedule.
              </p>
            </div>

            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <TrendingUp className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-muted-foreground flex-grow">
                We offer competitive pricing without compromising on the quality of our services, providing excellent
                value for your money.
              </p>
            </div>

            <div className="flex flex-col p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-12 w-12 icon-circle mb-4">
                <CheckCircle className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
              <p className="text-muted-foreground flex-grow">
                We provide comprehensive services from documentation to final delivery, ensuring a seamless shipping
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Experience Our Services?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Contact us today to learn more about how Shipify International can help with your freight forwarding and
              customs clearing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#BF9F30] text-black font-medium">
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
