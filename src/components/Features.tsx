import { Check } from "lucide-react";

const Features = () => {
  const features = [
    "Multi-vendor marketplace support",
    "Mobile-responsive design",
    "SEO optimization built-in",
    "Multiple currency support",
    "Automated shipping calculations",
    "Customer review system",
    "Discount & promotion engine",
    "Advanced reporting tools",
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Succeed Online
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our platform is packed with powerful features designed to help 
              merchants launch, grow, and scale their online businesses.
            </p>
          </div>

          {/* Right column - Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
