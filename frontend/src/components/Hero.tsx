import { Button } from '@/components/ui/button';
import { Wine, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="KopdeGoa Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent-red/80 to-primary/90" />
        <div className="absolute inset-0 bg-[url('/assets/generated/heritage-pattern-bg.dim_800x400.jpg')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/generated/kopde-goa-main-logo-transparent.dim_200x200.png"
              alt="KopdeGoa logo – wine and liquor brand"
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 object-contain drop-shadow-2xl animate-in zoom-in duration-700"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            KopdeGoa
          </h1>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-medium">
              Authentic Liquor & Wine from the Heart
            </p>
            <p className="text-lg md:text-xl text-white/90 font-semibold italic">
              In every sip, we trust.
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Experience genuine quality and tradition in every bottle
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Wine className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <MapPin className="mr-2 h-5 w-5 group-hover:bounce transition-transform" />
              Visit Store
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
