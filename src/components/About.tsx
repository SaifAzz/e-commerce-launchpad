import { Cpu, GitBranch, Terminal, Zap, Layers, Rocket, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const technicalRoles = [
    {
      icon: Cpu,
      title: "Tech Lead",
      description: "Full Stack Developer",
      color: "primary"
    },
    {
      icon: GitBranch,
      title: "Product Owner",
      description: "Team Leader",
      color: "accent"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Technical background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Technical header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">ABOUT_TEAM</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="text-foreground">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Building scalable solutions with cutting-edge technology
          </p>
        </div>

        {/* Technical Roles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {technicalRoles.map((role, idx) => {
            const Icon = role.icon;
            const isPrimary = role.color === "primary";
            return (
              <Card key={idx} className="relative overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
                {isPrimary ? (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl" />
                ) : (
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl" />
                )}
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4">
                    {isPrimary ? (
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold font-mono">{role.title}</h3>
                        <span className="text-muted-foreground">//</span>
                      </div>
                      <p className="text-muted-foreground font-mono text-sm">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View Team Button */}
        <div className="flex justify-center mb-20">
          <Link to="/team">
            <Button size="lg" className="group font-mono shadow-xl hover:shadow-2xl transition-all duration-300">
              View Full Team Profiles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Core Values - Technical Focus */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Performance</h3>
              <p className="text-muted-foreground text-sm">
                Optimized code, scalable architecture, and lightning-fast execution
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Zap className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-mono">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Cutting-edge technologies and modern development practices
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Architecture</h3>
              <p className="text-muted-foreground text-sm">
                Robust system design and maintainable codebase structure
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
