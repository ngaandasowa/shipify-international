import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-white.png" alt="Shipify International Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Shipify International</span>
                <span className="text-xs text-gray-400">SkylightCargo Express</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted partner for seamless international trade solutions in Zimbabwe and beyond.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-orange-600 transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white hover:text-orange-600" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-600 transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white hover:text-orange-600" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-white hover:text-orange-600" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-600 transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white hover:text-orange-600" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#customs-consultancy"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Customs Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#customs-clearance"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#port-clearance"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Port Clearance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#warehousing"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Warehousing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#transportation"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300 text-sm"
                >
                  Transportation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Near Robert Mugabe International Airport, Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+263 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@shipifyinternational.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shipify International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-orange-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-orange-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
