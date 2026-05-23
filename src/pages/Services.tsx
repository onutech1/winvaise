import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  Hammer,
  Wrench,
  Home,
  Briefcase,
  Paintbrush,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Services Page
 * Design: Industrial Minimalism
 * Sections: Main services with detailed descriptions
 */
export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "From custom homes to residential additions, we specialize in creating beautiful, functional living spaces.",
      features: [
        "Custom home construction",
        "Home additions and expansions",
        "Basement finishing",
        "Deck and patio construction",
        "Garage construction",
      ],
    },
    {
      icon: Briefcase,
      title: "Commercial Building",
      description:
        "Large-scale commercial projects delivered on schedule with professional project management.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Industrial facilities",
        "Multi-unit complexes",
        "Commercial renovations",
      ],
    },
    {
      icon: Paintbrush,
      title: "Renovations & Remodeling",
      description:
        "Transform your space with our comprehensive renovation and remodeling services.",
      features: [
        "Kitchen remodeling",
        "Bathroom renovation",
        "Interior remodeling",
        "Exterior upgrades",
        "Full home renovation",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Hammer,
      title: "General Contracting",
      description: "Complete project management from planning to completion.",
    },
    {
      icon: Wrench,
      title: "Project Management",
      description:
        "Expert oversight ensuring quality, timeline, and budget adherence.",
    },
    {
      icon: Building2,
      title: "Design Consultation",
      description: "Professional guidance to bring your vision to life.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description:
        "We meet with you to understand your vision, needs, and budget.",
    },
    {
      step: "2",
      title: "Planning & Design",
      description:
        "Our team creates detailed plans and designs tailored to your requirements.",
    },
    {
      step: "3",
      title: "Estimation",
      description: "We provide a comprehensive quote with transparent pricing.",
    },
    {
      step: "4",
      title: "Construction",
      description:
        "Our skilled team executes the project with precision and professionalism.",
    },
    {
      step: "5",
      title: "Quality Assurance",
      description:
        "Rigorous inspection and testing ensure everything meets our high standards.",
    },
    {
      step: "6",
      title: "Completion",
      description:
        "Final walkthrough and handoff, ready for you to enjoy your new space.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Mansion Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop"
            alt="Modern Luxury Mansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="accent-bar mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Comprehensive construction and renovation solutions crafted with
            excellence, precision, and modern innovation.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="container py-16 md:py-24">
        <div className="space-y-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={isEven ? "" : "md:order-2"}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <div className="accent-bar" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-semibold text-foreground mb-4">
                    What We Offer:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                      Get a Quote
                      <ArrowRight size={20} />
                    </a>
                  </Link>
                </div>
                <div className={isEven ? "" : "md:order-1"}>
                  <div className="relative">
                    <img
                      src={
                        index === 0
                          ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/residential-project-8kFRDRZkFjy8nvZs7ad22D.webp"
                          : index === 1
                            ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/commercial-project-KYnaNKSPJKeK74idt9ebww.webp"
                            : "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/renovation-project-DzEze8Rtq6xPF9ruUMeTbC.webp"
                      }
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-sm shadow-lg"
                    />
                    <div
                      className={`absolute ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"} w-24 h-24 bg-accent rounded-sm opacity-20`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="accent-bar" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our main services, we offer specialized solutions to meet
              your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
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
        </div>
      </section>

      {/* Our Process */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="accent-bar" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to ensure your project's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-white rounded-sm flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Services */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-foreground font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-background/80">
                  Our experienced professionals bring years of expertise to
                  every project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-foreground font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-background/80">
                  We maintain rigorous quality standards throughout every phase
                  of construction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-foreground font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-background/80">
                  Clear, detailed quotes with no hidden fees or surprise
                  charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-foreground font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                <p className="text-background/80">
                  We respect your timeline and deliver projects on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-accent text-white rounded-sm p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your project and learn how we can help.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-300">
              Schedule a Consultation
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
