import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

/**
 * About Page
 * Design: Industrial Minimalism
 * Sections: Company background, mission, team overview, why choose us
 */

export default function About() {
  const values = [
    {
      title: "Quality",
      description:
        "We never compromise on quality. Every project is built to last with premium materials and expert craftsmanship.",
    },
    {
      title: "Reliability",
      description:
        "We deliver on our promises. On-time completion and transparent communication are our commitments.",
    },
    {
      title: "Expertise",
      description:
        "Our team brings years of experience and specialized knowledge to every project we undertake.",
    },
    {
      title: "Innovation",
      description:
        "We stay current with the latest building techniques and sustainable construction practices.",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/team-collaboration-S5iXru.webp",
    },
    {
      name: "Maria Garcia",
      role: "Project Manager",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/team-collaboration-S5iXru.webp",
    },
    {
      name: "David Lee",
      role: "Lead Architect",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/team-collaboration-S5iXru.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Mansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="accent-bar mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About WINIVAISE
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Building dreams with quality, integrity, and expertise since 2009.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="accent-bar mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>

            <p className="text-lg text-muted-foreground mb-4">
              WINIVAISE was founded in 2009 with a simple mission: to deliver
              exceptional construction and renovation services that exceed
              client expectations.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              What started as a small team of dedicated craftspeople has grown
              into a trusted partner for residential and commercial projects
              across the region.
            </p>

            <p className="text-lg text-muted-foreground">
              Today, WINIVAISE continues to set the standard for excellence in
              construction, combining traditional craftsmanship with modern
              building techniques and sustainable practices.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/hero-construction-JuE9uZjsqF4FZCyw95CunP.webp"
              alt="WINIVAISE team at work"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-2xl opacity-20" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>

              <p className="text-lg text-muted-foreground">
                To deliver exceptional construction and renovation services that
                transform spaces, exceed expectations, and build lasting
                relationships with our clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>

              <p className="text-lg text-muted-foreground">
                To be the most trusted and respected construction company in the
                region, known for quality, innovation, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="accent-bar" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and every project we
            undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <CheckCircle size={24} className="text-accent" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>

                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="accent-bar" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>

                  <p className="text-accent font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="accent-bar" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose WINIVAISE?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              number: "15+",
              title: "Years of Experience",
              text: "Over 15 years of proven success in residential and commercial construction.",
            },
            {
              number: "500+",
              title: "Projects Completed",
              text: "Successfully delivered hundreds of projects on time and within budget.",
            },
            {
              number: "100%",
              title: "Client Satisfaction",
              text: "Dedicated to exceeding expectations on every project.",
            },
            {
              number: "✓",
              title: "Licensed & Insured",
              text: "Fully licensed, bonded, and insured for your peace of mind.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold">
                  {item.number}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your project and get a free
            consultation.
          </p>

          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
              Get in Touch
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
