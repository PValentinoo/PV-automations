import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Get webhook URL from environment variable
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('N8N Webhook URL not configured');
      }

      // Send form data to webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'PV Automation Website'
        }),
      });

      if (response.ok) {
        toast({
          title: "Besked sendt!",
          description: "Tak for din henvendelse. Jeg vender tilbage inden for 24 timer.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          organization: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Fejl ved afsendelse",
        description: "Der opstod en fejl. Prøv venligst igen eller kontakt mig direkte.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Lad os{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                starte transformationen
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Er I klar til at tage jeres processer til næste niveau? 
              Kontakt os for en professionel gennemgang af mulighederne.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Book en samtale
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Navn *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dit fulde navn"
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="din@email.dk"
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Virksomhed/Organisation
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Din virksomhed (valgfrit)"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Projektbeskrivelse *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beskriv kort dit projekt eller dine idéer..."
                      rows={5}
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                  >
                    Send besked
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Professionel konsultation</strong> - Lad os drøfte jeres ønsker og behov
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Andre måder at kontakte mig
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <a 
                          href="mailto:philipchristiansen1@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          philipchristiansen1@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Telefon</h4>
                        <p className="text-muted-foreground">+45 29 11 73 37</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">LinkedIn</h4>
                        <p className="text-muted-foreground">linkedin.com/in/philip-valentin/</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero border-border/50 shadow-soft">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Kort om processen
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                        1
                      </div>
                      <p className="text-muted-foreground">
                        <strong>Analyse:</strong> Grundig gennemgang af jeres nuværende processer og udfordringer
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                        2
                      </div>
                      <p className="text-muted-foreground">
                        <strong>Løsningsdesign:</strong> Skræddersyet forslag med arkitektur, timeline og investering
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                        3
                      </div>
                      <p className="text-muted-foreground">
                        <strong>Implementation:</strong> Udrulning og test med minimalt disruption af jeres drift
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;