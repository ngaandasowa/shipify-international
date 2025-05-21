import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/contact-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-[600px]">
              Get in touch with our team for any inquiries or assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? Need a quote? Want to discuss your freight forwarding and customs
                clearing needs? Our team is here to help. Fill out the form or use our contact information to get in
                touch with us.
              </p>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#006400]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-muted-foreground">
                      Near Robert Mugabe International Airport
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#006400]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+263 123 456 789</p>
                    <p className="text-muted-foreground">+263 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#006400]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@shipifyinternational.com</p>
                    <p className="text-muted-foreground">support@shipifyinternational.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#006400]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#006400]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#FF4500]/10 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-[#FF4500]" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#FF4500]/10 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-[#FF4500]" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#FF4500]/10 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#FF4500]" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#FF4500]/10 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-[#FF4500]" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card className="card-animate">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Send Us a Message</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Your email address" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Message subject" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" rows={5} required />
                    </div>

                    <Button type="submit" className="bg-[#006400] hover:bg-[#005000] w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Location</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find us near Robert Mugabe International Airport in Harare, Zimbabwe
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15265.940265259392!2d31.09292!3d-17.9317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706887e3f%3A0x4e93e2907d6d5b92!2sRobert%20Gabriel%20Mugabe%20International%20Airport!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Shipify International Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Need a Quote?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Request a quote for our freight forwarding and customs clearing services. Our team will get back to you
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#BF9F30] text-black font-medium">
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
