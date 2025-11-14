import { ShoppingCart, CreditCard, TrendingUp, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Platform = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Complete Storefront",
      description: "Beautiful, responsive online stores that convert visitors into customers",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment gateways integrated for seamless transactions",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights to help merchants grow their business",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Powerful tools to manage products, stock, and fulfillment",
    },
  ];

  return (
    <section id="platform" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">Our First Project</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            E-Commerce Platform{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Made Simple
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Inspired by Salla's success in KSA, we're building a comprehensive 
            e-commerce solution that empowers merchants to create, manage, and 
            grow their online stores with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2">
            Learn More About Our Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Platform;
