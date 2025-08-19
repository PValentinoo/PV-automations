import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target, Code, Database, Zap, Lightbulb } from "lucide-react";
import { personalInfo } from "@/config/personalInfo";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Udvikling",
      description: "React, TypeScript, Node.js, Python og moderne web teknologier"
    },
    {
      icon: Database,
      title: "Database & Backend",
      description: "Supabase, PostgreSQL, API integration og cloud services"
    },
    {
      icon: Zap,
      title: "Automatisering",
      description: "N8N workflows, proces optimisering og business automation"
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description: "OpenAI integration, RAG systems og intelligent automatisering"
    }
  ];

  return (
    <section id="om" className="py-12 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Om{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mig
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mit navn er <strong>{personalInfo.name}</strong>, og jeg står bag <strong>{personalInfo.company}</strong>.<br />
              Jeg er udvikler og automatiseringsekspert med en passion for at optimere arbejdsgange 
              og bringe moderne teknologi ind i virksomheder.<br />
              <br />
              Med <strong>{personalInfo.experience}+ års erfraing</strong> fra {personalInfo.workExperience.industry} har jeg udviklet en bred vifte af 
              værktøjer og automatiseringer, som har effektiviseret processer, reduceret manuelle 
              opgaver og frigjort tid til værdiskabende arbejde.<br /> 
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border/50 shadow-soft h-full">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Min rejse i tech
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">🎯 Min Mission</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Jeg brænder for at skabe løsninger der ikke bare fungerer, men som faktisk gør en forskel 
                        for virksomheder. Det handler om at forstå de rigtige problemer og bygge de rigtige løsninger.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">🚀 Erfaring & Ekspertise</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Med over {personalInfo.experience} års erfaring i revision og digital transformation har jeg arbejdet med alt fra små startups til 
                        store virksomheder. Jeg specialiserer mig i at bygge skalerbare systemer der vokser med 
                        jeres forretning.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">🌟 Min Tilgang</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Jeg tror på tæt samarbejde og åben kommunikation. Jeg starter altid med at lytte til 
                        jeres behov og forstå jeres udfordringer. Sammen finder vi den bedste løsning - ikke 
                        bare den hurtigste eller billigste, men den der giver mest værdi på lang sigt.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">🤝 Hvorfor Vælge Mig?</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Jeg kombinerer teknisk ekspertise med forretningsforståelse. Det betyder at jeg ikke 
                        bare bygger kode eller Excel ark, men løsninger der giver mening for jeres virksomhed.
                        Og jeg er her for at hjælpe jer - også efter projektet er færdigt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="bg-gradient-card border-border/50 shadow-soft">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <img 
                        src={personalInfo.profileImage.src} 
                        alt={personalInfo.profileImage.alt} 
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-soft border-4 border-white/20"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">
                      {personalInfo.name}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {personalInfo.title}
                    </p>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>📍 {personalInfo.location}</div>
                      <div>💼 {personalInfo.experience}+ års erfaring</div>
                      <div>🎓 {personalInfo.education}</div>
                      <div>🚀 {personalInfo.projectsDelivered}</div>
                      <div>🌍 {personalInfo.languages.join(", ")} talende</div>
                      <div>📊 {personalInfo.excelExpertise}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-gradient-primary rounded-lg shadow-soft">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;