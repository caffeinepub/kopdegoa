import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop: absolutely centered logo, nav links on sides */}
        <div className="hidden md:flex items-center h-20 relative">
          {/* Left nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Absolutely centered Logo + Brand Name */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group"
            >
              <img
                src="/assets/generated/kopdeGoa-logo.dim_400x400.png"
                alt="KopDeGoa Logo"
                className="h-16 w-16 object-contain rounded-full"
              />
              <span className="text-2xl font-bold text-primary tracking-tight">
                KopdeGoa
              </span>
            </button>
          </div>

          {/* Right nav links */}
          <nav className="flex items-center gap-6 ml-auto">
            {navLinks.slice(2).map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile: truly centered logo with hamburger absolutely positioned */}
        <div className="flex md:hidden items-center justify-center h-20 relative">
          {/* Centered Logo + Brand Name */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/kopdeGoa-logo.dim_400x400.png"
              alt="KopDeGoa Logo"
              className="h-16 w-16 object-contain rounded-full"
            />
            <span className="text-2xl font-bold text-primary tracking-tight">
              KopdeGoa
            </span>
          </button>

          {/* Mobile Menu Button absolutely positioned to the right */}
          <div className="absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 items-center">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
