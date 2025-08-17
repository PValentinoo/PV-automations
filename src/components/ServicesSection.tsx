import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

const ServicesSection = () => {
  const services = [
    {
      title: "Procesautomatisering",
      description: "Eliminér manuelle opgaver og optimer workflows",
      features: ["Workflow automation", "Databehandling", "Kvalitetssikring", "Tidsbesparelse"]
    },
    {
      title: "Systemintegration",
      description: "Forbind eksisterende systemer og skab synergi",
      features: ["API udvikling", "Database synkronisering", "Real-time data", "Legacy system opdatering"]
    },
    {
      title: "Business Intelligence",
      description: "Transformer data til strategiske indsigter",
      features: ["Dashboard udvikling", "Rapportering", "Predictive analytics", "KPI tracking"]
    },
    {
      title: "Cloud Solutions",
      description: "Moderne, skalerbar infrastruktur i skyen",
      features: ["Cloud migration", "Infrastruktur som kode", "Auto-scaling", "Cost optimization"]
    },
    {
      title: "Custom Software",
      description: "Skræddersyede applikationer til jeres behov",
      features: ["Web applikationer", "Mobile løsninger", "Desktop software", "API services"]
    },
    {
      title: "Digital Transformation",
      description: "Holistisk tilgang til digitalisering",
      features: ["Strategisk rådgivning", "Change management", "Teknologivurdering", "ROI optimering"]
    }
  ];

  return (
    <section id="ydelser" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Kompetencer der{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              driver værdiskabelse
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi leverer professionelle automatiseringsløsninger til virksomheder i alle størrelser. 
            Fra enkle procesoptimeringer til komplekse enterprise transformationer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 transform hover:scale-[1.02] bg-gradient-card border-border/50"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Klar til at transformere jeres processer?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lad os analysere jeres nuværende setup og identificere muligheder for automatisering og optimering.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            onClick={() => smoothScrollToNative('kontakt', -20)}
          >
            Kontakt mig i dag
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;