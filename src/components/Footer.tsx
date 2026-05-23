import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

/**
 * Footer Component
 * Design: Industrial Minimalism - Clean footer with contact info and social links
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">WI</span>
              </div>
              <span className="font-bold text-lg">WINIVAISE</span>
            </div>
            <p className="text-sm text-background/80">
              Professional construction and renovation services for residential
              and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-background/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-background/80 hover:text-accent transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-background/80 hover:text-accent transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-background/80 hover:text-accent transition-colors">
                    Projects
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Residential Construction</li>
              <li className="text-background/80">Commercial Building</li>
              <li className="text-background/80">Renovations & Remodeling</li>
              <li className="text-background/80">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="text-background/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span className="text-background/80">info@buildpro.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span className="text-background/80">
                  123 Construction Ave
                  <br />
                  New York, NY 10001
                </span>
              </div>
              <button
                onClick={() => (window.location.href = "/admin-login")}
                className="text-xs opacity-30 hover:opacity-100"
              >
                Admin
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/80">
            &copy; 2026 WINIVAISE INTERNATIONAL LIMITED. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 hover:bg-accent/20 rounded-sm transition-colors"
            >
              <Facebook
                size={18}
                className="text-background/80 hover:text-accent"
              />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-accent/20 rounded-sm transition-colors"
            >
              <Linkedin
                size={18}
                className="text-background/80 hover:text-accent"
              />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-accent/20 rounded-sm transition-colors"
            >
              <Twitter
                size={18}
                className="text-background/80 hover:text-accent"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
