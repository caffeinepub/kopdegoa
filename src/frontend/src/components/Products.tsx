import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Products() {
  const categories = [
    {
      emoji: "🥃",
      name: "Whisky",
      description: "Fine single malts, blends, and premium whisky selections",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
    },
    {
      emoji: "🍷",
      name: "Wine",
      description: "Premium red, white, and rosé wines from around the world",
      color: "text-accent-red",
      bgColor: "bg-accent-red/10",
    },
    {
      emoji: "🍸",
      name: "Vodka",
      description: "Crystal clear vodkas from classic to contemporary",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      emoji: "🍹",
      name: "Rum",
      description: "Caribbean and local rums with rich, bold flavors",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      emoji: "🍺",
      name: "Beer",
      description: "Craft beers, lagers, and ales for every taste",
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
    },
    {
      emoji: "🧉",
      name: "Flavored Drinks",
      description:
        "Refreshing flavored beverages including Breezer, Smirnoff Ice, and tropical mixes",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      emoji: "🏺",
      name: "Feni & Local Spirits",
      description:
        "Traditional Goan cashew feni, coconut feni, and locally crafted spirits — the soul of Goa in every pour",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      emoji: "🍇",
      name: "Goan Wines",
      description:
        "Locally produced Goan wines made from cashew, coconut, and tropical fruits — a true taste of Goa's terroir",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
              Our <span className="text-primary">Collection</span>
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of premium wines and
              spirits — featuring the pride of Goa alongside world-class labels
            </p>
          </div>

          {/* Goan divider accent */}
          <div className="goan-divider h-0.5 w-32 mx-auto mb-12 rounded-full" />

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                data-ocid={`products.item.${index + 1}`}
                className="group border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card cursor-pointer"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.bgColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="text-3xl leading-none select-none">
                      {category.emoji}
                    </span>
                  </div>
                  <CardTitle
                    className={`text-xl font-bold text-foreground group-hover:text-primary transition-colors ${category.color}`}
                  >
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80">
                  <span className="font-semibold text-primary">
                    🌴 Visit our store in Paliem, Goa
                  </span>{" "}
                  to explore our complete collection and get expert
                  recommendations from our knowledgeable staff. From authentic
                  Goan feni to world-class spirits — we're here to help you find
                  the perfect bottle for every occasion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
