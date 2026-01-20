import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ChefHat,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Wedding Catering", href: "/services#wedding" },
      { label: "Corporate Events", href: "/services#corporate" },
      { label: "Private Parties", href: "/services#private" },
      { label: "Fine Dining", href: "/services#dining" },
    ],
    socialLinks: [
      {
        icon: <Facebook className="w-5 h-5" />,
        href: "https://facebook.com",
        label: "Facebook",
      },
      {
        icon: <Instagram className="w-5 h-5" />,
        href: "https://instagram.com",
        label: "Instagram",
      },
      {
        icon: <Twitter className="w-5 h-5" />,
        href: "https://twitter.com",
        label: "Twitter",
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tasteful Events</h3>
                <p className="text-sm text-amber-400">
                  Premium Catering & Events
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable culinary experiences for over 15 years.
              From intimate gatherings to grand celebrations.
            </p>
            <div className="flex gap-3">
              {footerLinks.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm">+1 (234) 567-890</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tastefulevents.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm">info@tastefulevents.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm">
                      123 Culinary Avenue
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400 text-sm">
                Get updates on special offers and new menu items
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[250px]"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Tasteful Events. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for food lovers everywhere</span>
            </div>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
