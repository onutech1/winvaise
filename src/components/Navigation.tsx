import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/logo.png";

/**
 * Navigation Component
 * Design: Blue and white with dark mode support
 * Features: Responsive mobile menu, dark mode toggle, sticky header
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="WINIVAISE Logo"
              className="w-14 h-14 object-contain"
            />

            <span className="font-bold text-lg text-foreground hidden sm:inline">
              WINIVAISE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <a className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden sm:flex items-center justify-center p-2 hover:bg-muted rounded-sm transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-foreground" />
          ) : (
            <Sun size={20} className="text-foreground" />
          )}
        </button>

        {/* CTA Button - Desktop */}
        <Link href="/contact">
          <a className="hidden md:inline-block px-6 py-2 bg-accent text-white font-medium rounded-sm hover:bg-blue-700 transition-colors duration-300">
            Get Quote
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="px-4 py-2 bg-accent text-white font-medium rounded-sm hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </a>
            </Link>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-muted rounded-sm transition-colors"
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={18} />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
