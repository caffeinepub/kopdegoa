import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Only the finest selections from trusted sources",
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "Genuine products with verified origins",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships with our customers",
    },
    {
      icon: Users,
      title: "Community",
      description: "A community rooted in culture, tradition, and its people.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About <span className="text-primary">KopdeGoa</span>
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto rounded-full" />
          </div>

          {/* Story */}
          <div className="mb-16 space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-primary">KopdeGoa</span>, your
              trusted destination for authentic wine and liquor. Born from a
              deep appreciation for quality spirits and genuine hospitality, we
              bring you a carefully curated selection of the finest beverages.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Our roots run deep in culture and tradition, where celebration and
              togetherness are woven into the fabric of life. We understand that
              every bottle tells a story, and we're committed to ensuring that
              story is one of authenticity, quality, and trust.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              At KopdeGoa, we don't just sell liquor—we share experiences,
              create memories, and build lasting relationships with our
              community. Whether you're celebrating a special occasion or simply
              enjoying life's moments, we're here to serve you with genuine care
              and expertise.
            </p>
          </div>

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
