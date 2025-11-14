import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import { Mail, Phone, Linkedin, Award, Code, Users, Terminal, Zap, Cpu, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-24 relative overflow-hidden">
          {/* Technical background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Header with technical styling */}
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-sm font-mono text-primary">TEAM_PROFILES</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Engineering
                </span>
                <br />
                <span className="text-foreground">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the technical minds powering MindSync's innovation
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-16">
              {teamMembers.map((member, memberIdx) => (
                <div key={member.id} className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  
                  <Card className="relative overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500">
                    {/* Header with gradient */}
                    <CardHeader className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 pb-8 pt-8 border-b border-border/50">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      
                      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="space-y-4 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-muted-foreground">ACTIVE</span>
                          </div>
                          <div>
                            <CardTitle className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                              {member.name}
                            </CardTitle>
                            <div className="flex items-center gap-3 flex-wrap">
                              <Badge variant="secondary" className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20">
                                {member.title}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        {/* Contact links with tech styling */}
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href={`mailto:${member.email}`}
                            className="group/contact flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                          >
                            <Mail className="h-4 w-4 text-muted-foreground group-hover/contact:text-primary transition-colors" />
                            <span className="text-sm font-mono text-muted-foreground group-hover/contact:text-primary transition-colors">
                              {member.email.split('@')[0]}
                            </span>
                          </a>
                          <a 
                            href={`tel:${member.phone}`}
                            className="group/contact flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                          >
                            <Phone className="h-4 w-4 text-muted-foreground group-hover/contact:text-primary transition-colors" />
                            <span className="text-sm font-mono text-muted-foreground group-hover/contact:text-primary transition-colors">
                              {member.phone}
                            </span>
                          </a>
                          {member.linkedin && (
                            <a 
                              href={`https://linkedin.com/in/${member.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/contact flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                              <Linkedin className="h-4 w-4 text-muted-foreground group-hover/contact:text-primary transition-colors" />
                              <span className="text-sm font-mono text-muted-foreground group-hover/contact:text-primary transition-colors">
                                LinkedIn
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-8 md:p-10 space-y-10 bg-gradient-to-b from-card to-card/50">
                      {/* Skills Summary with tech badge */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold font-mono tracking-tight">
                            <span className="text-muted-foreground">//</span> Summary
                          </h3>
                        </div>
                        <div className="pl-12">
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {member.skillsSummary}
                          </p>
                        </div>
                      </div>

                      {/* Skills with technical badges */}
                      <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                            <Code className="h-5 w-5 text-accent" />
                          </div>
                          <h3 className="text-2xl font-bold font-mono tracking-tight">
                            <span className="text-muted-foreground">const</span>{" "}
                            <span className="text-primary">skills</span>{" "}
                            <span className="text-muted-foreground">=</span>{" "}
                            <span className="text-accent">{"{"}</span>
                          </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pl-12">
                          {member.skills.map((skillCategory, idx) => {
                            const isTechnical = skillCategory.category === "Technical Literacy";
                            const isLeadership = skillCategory.category === "Product Management & Leadership";
                            
                            return (
                              <div 
                                key={idx} 
                                className="relative group/skill"
                              >
                                {/* Category header with icon */}
                                <div className="flex items-center gap-3 mb-4">
                                  {isTechnical && (
                                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover/skill:bg-primary/20 transition-colors">
                                      <Cpu className="h-5 w-5 text-primary" />
                                    </div>
                                  )}
                                  {isLeadership && (
                                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover/skill:bg-accent/20 transition-colors">
                                      <Users className="h-5 w-5 text-accent" />
                                    </div>
                                  )}
                                  {!isTechnical && !isLeadership && (
                                    <div className="p-2 rounded-lg bg-secondary border border-border group-hover/skill:bg-secondary/80 transition-colors">
                                      <Zap className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                  )}
                                  <h4 className="font-bold text-lg text-foreground font-mono">
                                    <span className="text-muted-foreground">"{skillCategory.category}"</span>
                                    <span className="text-muted-foreground">:</span>
                                  </h4>
                                </div>
                                
                                {/* Skills as badges */}
                                <div className="flex flex-wrap gap-2">
                                  {skillCategory.items.map((item, itemIdx) => {
                                    // Split items that contain colons (like "Frontend: React, Next.js")
                                    const parts = item.split(':');
                                    if (parts.length > 1) {
                                      return (
                                        <div key={itemIdx} className="w-full space-y-2">
                                          <span className="text-sm font-semibold text-foreground/70 font-mono">
                                            {parts[0]}:
                                          </span>
                                          <div className="flex flex-wrap gap-2 ml-4">
                                            {parts[1].split(',').map((tech, techIdx) => (
                                              <Badge
                                                key={techIdx}
                                                variant="secondary"
                                                className="font-mono text-xs px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 transition-all cursor-default"
                                              >
                                                {tech.trim()}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                      );
                                    }
                                    
                                    return (
                                      <Badge
                                        key={itemIdx}
                                        variant="secondary"
                                        className="font-mono text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 text-foreground border-border hover:border-primary/30 transition-all cursor-default"
                                      >
                                        {item}
                                      </Badge>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="pl-12">
                          <span className="text-2xl font-bold font-mono text-accent">{"}"}</span>
                          <span className="text-muted-foreground">;</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

