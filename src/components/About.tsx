import { Users, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Two passionate entrepreneurs on a mission to transform the e-commerce landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <div className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
              S
            </div>
            <h3 className="text-2xl font-bold mb-2">Saif</h3>
            <p className="text-muted-foreground">
              Co-Founder & Technical Lead
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-accent mb-4 flex items-center justify-center text-accent-foreground text-2xl font-bold">
              M
            </div>
            <h3 className="text-2xl font-bold mb-2">Mouazz</h3>
            <p className="text-muted-foreground">
              Co-Founder & Product Lead
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Partnership</h3>
            <p className="text-muted-foreground">
              Two minds, one vision - building exceptional digital experiences together
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-muted-foreground">
              Pushing boundaries with cutting-edge technology and creative solutions
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="text-muted-foreground">
              Empowering merchants with tools to succeed in the digital marketplace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
