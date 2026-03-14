import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description:
        "Only the finest selections from trusted sources, chosen with the discerning eye of a true Goan connoisseur.",
    },
    {
      icon: Heart,
      title: "Authenticity",
      description:
        "Genuine products with verified origins — as authentic as Goa's beaches, spice fields, and age-old traditions.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Building lasting relationships with our customers, grounded in the Goan spirit of honesty and warm hospitality.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "A community rooted in Goan culture, tradition, and its people — bound together like the tides of Goa's golden shores.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
              About <span className="text-primary">KopdeGoa</span>
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto rounded-full" />
            <p className="text-base text-muted-foreground italic tracking-wide">
              🌺 Rooted in Goan culture · Inspired by the susegad way of life 🌺
            </p>
          </div>

          {/* Story */}
          <div className="mb-16 space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-primary">KopdeGoa</span> —
              born from the sun-soaked beaches, swaying palms, and the warm,
              unhurried spirit of Goa. Our story is woven with the richness of{" "}
              <em>susegad</em> — the beloved Goan philosophy of embracing life
              with ease, joy, and contentment.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Rooted in Goa's unique Portuguese-Goan heritage, our shelves carry
              flavors that echo centuries of culture — from the legendary cashew{" "}
              <em>feni</em> of the Goan heartland to international labels that
              complement our coastal traditions. Every selection is a tribute to
              Goa's vibrant celebrations, its festas, and its legendary
              hospitality — <em>Atithi Devo Bhava</em> (a guest is like God).
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              At KopdeGoa, we don't just sell liquor — we share experiences,
              create memories, and build lasting bonds with our community.
              Whether you're celebrating Carnival, a family feast, or simply
              watching the Goan sunset, we're here to serve you with care and
              genuine heart.
            </p>
          </div>

          {/* Goan divider */}
          <div className="goan-divider h-0.5 w-full mb-16 rounded-full opacity-60" />

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
