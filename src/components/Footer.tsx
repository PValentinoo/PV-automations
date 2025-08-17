import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowUp } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

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
            <Button variant="hero" size="sm" onClick={() => smoothScrollToNative('kontakt', -20)}>
              Book konsultation
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hurtige links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hjem" className="text-muted-foreground hover:text-primary transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#eksempler" className="text-muted-foreground hover:text-primary transition-colors">
                  Eksempler
                </a>
              </li>
              <li>
                <a href="#ydelser" className="text-muted-foreground hover:text-primary transition-colors">
                  Ydelser
                </a>
              </li>
              <li>
                <a href="#om" className="text-muted-foreground hover:text-primary transition-colors">
                  Om
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
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
                  href="mailto:philipchristiansen1@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  philipchristiansen1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+45 29 11 73 37</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/philip-valentin/" 
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
            © 2025 PV Automations. Alle rettigheder forbeholdt.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privatlivspolitik
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Handelsbetingelser
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