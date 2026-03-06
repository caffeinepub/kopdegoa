import { Clock, Heart, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo + Brand Name */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/generated/kopdeGoa-logo.dim_400x400.png"
              alt="KopDeGoa Logo"
              className="h-20 w-20 object-contain rounded-full"
            />
            <span className="text-xl font-bold">KopdeGoa</span>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Paliem, Goa</span>
            </div>
            <div className="hidden md:block text-primary-foreground/40">|</div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Open daily from 9 AM – 10 PM</span>
            </div>
            <div className="hidden md:block text-primary-foreground/40">|</div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:9604456789"
                className="hover:text-white transition-colors"
              >
                9604456789
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/80">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {new Date().getFullYear()}. Built with{" "}
              <Heart className="h-4 w-4 text-accent-red fill-accent-red inline-block" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "unknown-app")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-primary-foreground/60 max-w-2xl">
            <p>
              Please drink responsibly. Must be of legal drinking age to
              purchase alcohol.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
