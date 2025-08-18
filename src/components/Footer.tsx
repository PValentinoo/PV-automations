import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowUp } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";
import { personalInfo } from "@/config/personalInfo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="PV Automations Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professionelle automatiseringsløsninger til virksomheder i alle størrelser. 
              Fra tanke til transformation.
            </p>
            <Button variant="hero" size="sm" onClick={() => smoothScrollToNative('kontakt')}>
              Book konsultation
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hurtige links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Hjem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('eksempler')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Eksempler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('ydelser')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Ydelser
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('om')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Om
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('ai-tool')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Gratis AI tool
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('pricing')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Pris
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollToNative('kontakt')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{personalInfo.phone}</span>
              </div>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">LinkedIn profil</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {personalInfo.copyright.year} {personalInfo.company}. Alle rettigheder forbeholdt.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="/privatlivspolitik" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privatlivspolitik
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Tilbage til top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;