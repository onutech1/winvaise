import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* Counter Component */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/**
 * Projects Page
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Residential Home",
      category: "residential",
      description:
        "Contemporary 4-bedroom home with open floor plan and premium finishes.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/residential-project-8kFRDRZkFjy8nvZs7ad22D.webp",
      year: "2024",
    },
    {
      id: 2,
      title: "Commercial Office Building",
      category: "commercial",
      description:
        "Multi-story office complex with modern amenities and sustainable design.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/commercial-project-KYnaNKSPJKeK74idt9ebww.webp",
      year: "2024",
    },
    {
      id: 3,
      title: "Kitchen Renovation",
      category: "renovation",
      description:
        "Complete kitchen remodel with custom cabinetry and high-end appliances.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663632758615/kUSYk5p6VbJYT5jqejmJcZ/renovation-project-DzEze8Rtq6xPF9ruUMeTbC.webp",
      year: "2023",
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "renovation", label: "Renovation" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Modern Mansion Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10">
          <div className="accent-bar mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Explore our portfolio of completed residential, commercial, and
            renovation projects crafted with excellence and precision.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container py-12">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-accent text-white"
                  : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-card rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-accent text-sm font-semibold mb-2 uppercase">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <button className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={500} suffix="+" />
              </div>
              <p className="text-background/80">Projects Completed</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <p className="text-background/80">Years Experience</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={100} suffix="%" />
              </div>
              <p className="text-background/80">Client Satisfaction</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={50} suffix="+" />
              </div>
              <p className="text-background/80">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-accent text-white rounded-sm p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impressed by Our Work?
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create something amazing together.
          </p>

          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
