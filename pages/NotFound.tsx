import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

/**
 * NotFound Page (404)
 * Design: Industrial Minimalism
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 container flex items-center justify-center py-24">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-accent mb-4">
              404
            </div>
            <div className="accent-bar mx-auto mb-6" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          <Link href="/">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-300">
              Back to Home
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
