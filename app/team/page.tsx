import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/team-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Our Team</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              Meet the experienced professionals behind Shipify International
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of experience in freight forwarding and customs clearing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-1.jpg" alt="John Moyo" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">John Moyo</h3>
                <p className="text-[#006400] font-medium">Chief Executive Officer</p>
                <p className="text-muted-foreground mt-3">
                  With over 20 years of experience in the freight forwarding industry, John leads our company with a
                  vision for excellence and innovation.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-2.jpg" alt="Sarah Ndlovu" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">Sarah Ndlovu</h3>
                <p className="text-[#006400] font-medium">Operations Director</p>
                <p className="text-muted-foreground mt-3">
                  Sarah oversees all operational aspects of our business, ensuring that we deliver efficient and
                  reliable services to our clients.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-3.jpg" alt="David Mutasa" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">David Mutasa</h3>
                <p className="text-[#006400] font-medium">Customs Clearance Manager</p>
                <p className="text-muted-foreground mt-3">
                  David is an expert in customs regulations and procedures, with a proven track record of efficient
                  customs clearance for our clients.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-4.jpg" alt="Grace Chigumba" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">Grace Chigumba</h3>
                <p className="text-[#006400] font-medium">Finance Manager</p>
                <p className="text-muted-foreground mt-3">
                  Grace manages our financial operations, ensuring that we maintain financial stability and provide
                  competitive pricing to our clients.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-5.jpg" alt="Michael Dube" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">Michael Dube</h3>
                <p className="text-[#006400] font-medium">Logistics Manager</p>
                <p className="text-muted-foreground mt-3">
                  Michael oversees our logistics operations, ensuring that your goods are transported safely and
                  efficiently to their destination.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                <Image src="/images/team-member-6.jpg" alt="Tendai Mpofu" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6 border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold">Tendai Mpofu</h3>
                <p className="text-[#006400] font-medium">Customer Relations Manager</p>
                <p className="text-muted-foreground mt-3">
                  Tendai leads our customer relations team, ensuring that we provide exceptional service and support to
                  our clients at every stage.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 icon-circle">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Expertise</h2>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Industry Knowledge</h3>
                  <p className="text-muted-foreground">
                    Our team has extensive knowledge of the freight forwarding and customs clearing industry, with
                    expertise in local and international regulations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Professional Qualifications</h3>
                  <p className="text-muted-foreground">
                    Our team members hold professional qualifications in logistics, supply chain management, and customs
                    clearance.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Continuous Training</h3>
                  <p className="text-muted-foreground">
                    We invest in continuous training and development for our team to ensure that they stay up-to-date
                    with the latest industry trends and regulations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Customer-Centric Approach</h3>
                  <p className="text-muted-foreground">
                    Our team is dedicated to providing exceptional service and support to our clients, with a focus on
                    understanding and meeting their unique needs.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/team-expertise.jpg"
                alt="Team Expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Work With Our Expert Team</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Contact us today to learn how our experienced team can help with your freight forwarding and customs
              clearing needs.
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
