import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ecommerce.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Launching Our First Project
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building the Future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Software
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              We're Saif and Mouazz, a software company specializing in e-commerce 
              platforms and all web development. We build cutting-edge solutions that 
              transform businesses and deliver exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group shadow-medium hover:shadow-soft transition-all">
                Explore Our Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="E-commerce platform visualization" 
              className="relative rounded-2xl shadow-medium hover:shadow-soft transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
