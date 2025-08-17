import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
     icon: Users,
      number: "100+",
          label: "Virksomhedskunder"
    },
    {
      icon: Target,
      number: "50+",
      label: "Leverede projekter"
    },
    {
      icon: Clock,
      number: "6+",
      label: "År erfaring med digitale værktøjer"
    },
    {
      icon: Award,
      number: "99%",
      label: "Kundetilfredshed"
    }
  ];

  return (
    <section id="om" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Om{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                PV Automations
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vi specialiserer os i at levere professionelle automatiseringsløsninger til virksomheder 
              fra startup til enterprise niveau. Vores erfaring spænder bredt - vi kan det hele.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Vores tilgang til transformation
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Forretningsfokuseret</h4>
                      <p className="text-muted-foreground">
                        Vi starter altid med jeres forretningsmål og designer løsninger der skaber målbar værdi.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">🤝 Samarbejde og kvalitet</h4>
                      <p className="text-muted-foreground">
                        Vi ønsker at samarbejde med jer, forstå jeres behov og hjælpe jer med at nå jeres mål.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">🙋 Assistance og rådgivning</h4>
                      <p className="text-muted-foreground">
                        Vi forlader jer ikke når produktet er færdigt - vi vil gerne høre om det virker som det skal, og om i er tilfredse med løsningen.
                      </p>
                    </div>

                  </div>
                </div>
                
                <div className="bg-gradient-hero rounded-xl p-8 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Klar til at optimere jeres processer?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Vi analyserer jeres nuværende setup og identificerer konkrete forbedringspotentialer.
                  </p>
                  <div className="text-lg font-semibold text-primary">
                    Gratis førstesamtale
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;