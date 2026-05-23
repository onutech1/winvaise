import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Contact Page
 * Design: Industrial Minimalism
 * Sections: Contact form, contact information, hours
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Mansion Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Mansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="accent-bar mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Have a question or ready to start your project? We'd love to hear
            from you and help turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h2>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Phone</h3>
              </div>
              <p className="text-muted-foreground ml-13">
                <a
                  href="tel:+15551234567"
                  className="hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground ml-13">
                <a
                  href="mailto:info@buildpro.com"
                  className="hover:text-accent transition-colors"
                >
                  info@buildpro.com
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Address</h3>
              </div>
              <p className="text-muted-foreground ml-13">
                123 Construction Ave
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Clock size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Hours</h3>
              </div>
              <div className="text-muted-foreground ml-13 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm">
                <p className="text-green-800 font-semibold">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-blue-700 disabled:bg-gray-400 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <ArrowRight size={20} />}
              </button>

              <p className="text-sm text-muted-foreground">* Required fields</p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - placeholder) */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="w-full h-96 bg-border rounded-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin
                size={48}
                className="text-accent mx-auto mb-4 opacity-50"
              />
              <p className="text-muted-foreground">
                Interactive map would be displayed here
                <br />
                123 Construction Ave, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="accent-bar" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold text-foreground mb-2">
              How do I get a free quote?
            </h3>
            <p className="text-muted-foreground text-sm">
              Fill out our contact form or call us directly. We'll schedule a
              consultation to discuss your project and provide a detailed
              estimate.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">
              What areas do you serve?
            </h3>
            <p className="text-muted-foreground text-sm">
              We serve the greater New York area and surrounding regions.
              Contact us to confirm if your location is within our service area.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">
              How long does a typical project take?
            </h3>
            <p className="text-muted-foreground text-sm">
              Project timelines vary based on scope and complexity. We'll
              provide a detailed timeline during the consultation phase.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">
              Are you licensed and insured?
            </h3>
            <p className="text-muted-foreground text-sm">
              Yes, we are fully licensed, bonded, and insured. We maintain all
              necessary certifications and comply with local building codes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">
              Do you offer financing options?
            </h3>
            <p className="text-muted-foreground text-sm">
              We can discuss payment plans and financing options during your
              consultation. We work with several lenders to help make projects
              affordable.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">
              Can you work with my existing plans?
            </h3>
            <p className="text-muted-foreground text-sm">
              Absolutely! We can work with your existing plans or help you
              develop new ones. Our design team is here to help.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
