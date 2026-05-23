import { Link } from "wouter";
import {
  ArrowRight,
  Hammer,
  Building2,
  Wrench,
  Star,
  Quote,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import winvaise from "../assets/winvaise-team.jpg";
/**
 * Home Page
 * Design: Industrial Minimalism
 * Sections: Hero, Services, Featured Projects, Testimonials, CTA
 */
export default function Home() {
  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      description:
        "Custom homes and residential projects built to your specifications with attention to detail.",
    },
    {
      icon: Hammer,
      title: "Commercial Building",
      description:
        "Large-scale commercial projects delivered on time and within budget.",
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description:
        "Transform your space with professional renovation and remodeling services.",
    },
  ];

  const projects = [
    {
      title: "Modern Residential Home",
      category: "Residential",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/residential-project-8kFRDRZkFjy8nvZs7ad22D.webp",
    },
    {
      title: "Commercial Office Building",
      category: "Commercial",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/commercial-project-KYnaNKSPJKeK74idt9ebww.webp",
    },
    {
      title: "Kitchen Renovation",
      category: "Renovation",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/renovation-project-DzEze8Rtq6xPF9ruUMeTbC.webp",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "WINIVAISE transformed our vision into reality. The team was professional, punctual, and delivered exceptional quality.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "Working with WINIVAISE on our office renovation was seamless. They managed the project perfectly with minimal disruption.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Property Developer",
      text: "Reliable, skilled, and detail-oriented. WINIVAISE is our go-to contractor for all our projects.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={winvaise}
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 py-32 md:py-48">
          <div className="max-w-2xl">
            <div className="accent-bar mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Build Your Dream Project
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Professional construction and renovation services for residential
              and commercial projects. Quality craftsmanship, on-time delivery,
              guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-300">
                  Get a Free Quote
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Link>
              <Link href="/projects">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-foreground font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-300">
                  View Our Work
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="accent-bar mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose WINIVAISE?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in construction and renovation,
              WINIVAISE has established a reputation for excellence,
              reliability, and quality craftsmanship.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Expert Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Skilled professionals with years of experience
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Quality Guaranteed
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Premium materials and meticulous attention to detail
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    On-Time Delivery
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We respect your time and budget
                  </p>
                </div>
              </li>
            </ul>
            <Link href="/about">
              <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Learn More About Us
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
          <div className="relative">
            <img
              src={winvaise}
              alt="WINIVAISE team"
              className="w-full h-96 object-cover rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-sm opacity-20" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="accent-bar" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and renovation solutions tailored to
              your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-300">
                View All Services
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="accent-bar" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work showcasing quality and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-accent text-sm font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-white font-bold text-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-300">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              Trusted by homeowners and businesses for quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background/10 p-8 rounded-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote size={24} className="text-accent mb-4 opacity-50" />
                <p className="text-background/90 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-background">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-background/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-accent text-white rounded-sm p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Our team is
            ready to help bring your vision to life.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-300">
              Get Your Free Quote
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
