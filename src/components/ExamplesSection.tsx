import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Monitor, 
  Database, 
  MessageCircle, 
  FileSpreadsheet, 
  MoreHorizontal 
} from "lucide-react";

const ExamplesSection = () => {
  const examples = [
    {
      icon: BarChart3,
      title: "Intelligent dataanalyse-platform",
      description: "Hjemmeside, Excel-ark eller app, hvor specifikt indhold eller data analyseres via et automatiseret AI-workflow. Systemet opdager mønstre, anomalier og andre relevante fokuspunkter, så vigtige indsigtspunkter hurtigt bliver synlige.",
      tag: "AI Analytics"
    },
    {
      icon: Monitor,
      title: "Automatiseret hjemmeside",
      description: "Hjemmeside, hvor klienter og medarbejdere kan logge ind, kommunikere og dele dokumenter. Dokumenter screenes og behandles automatisk af AI, hvilket gør samarbejdet mere effektivt og overskueligt, og eliminere simple opgaver.",
      tag: "Web Platform"
    },
    {
      icon: Database,
      title: "Power BI / Power Query-integration i Excel",
      description: "Excel-ark, der automatisk henter data og informationer fra Power BI eller databaser, og bearbejder dem til brugbare rapporter og analyser og dashboards.",
      tag: "Data Integration"
    },
    {
      icon: MessageCircle,
      title: "Automatiseret kundeservice",
      description: "AI-drevne chatbots og ticketsystemer, som analyserer og besvarer spørgsmål baseret på et defineret korpus af dokumenter, og sikrer hurtigere og mere præcise svar.",
      tag: "AI Support"
    },
    {
      icon: FileSpreadsheet,
      title: "Optimering af Excel-processer",
      description: "  Makroer og automatiseringer, der neutraliserer gentagne opgaver, fra datahåndtering og beregninger til oprettelse af sheets og funktioner, hvilket effektiviserer arbejdet og reducerer fejl.",
      tag: "Excel Automation"
    },
    {
      icon: MoreHorizontal,
      title: "... og meget mere",
      description: "Hver løsning er skræddersyet til jeres specifikke forretningsbehov og målsætninger",
      tag: "Custom Solutions"
    }
  ];

  return (
    <section id="eksempler" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Løsninger der{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              skaber resultater
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fra startup til enterprise - vi leverer automatiseringsløsninger der transformerer 
            forretningsprocesser og øger effektiviteten markant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 transform hover:scale-[1.02] bg-gradient-card border-border/50"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {example.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {example.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Uanset virksomhedsstørrelse.</span> Vi skalerer løsninger fra små til store projekter.
          </p>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Proven track record</span> med erfaring fra store virksomheder
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;