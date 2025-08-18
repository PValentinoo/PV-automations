import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#hjem", label: "Hjem" },
    { href: "#eksempler", label: "Eksempler" },
    { href: "#ydelser", label: "Ydelser" },
    { href: "#om", label: "Om" },
    { href: "#pricing", label: "Priser" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  // Handle navigation item clicks
  const handleNavItemClick = (href: string, label: string) => {
    if (label === "Hjem") {
      // For "Hjem", scroll to the very top instantly
      window.scrollTo(0, 0);
    } else {
      // For other items, scroll with consistent offset
      smoothScrollToNative(href.replace('#', ''));
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
            >
              <img 
                src="/logo.png" 
                alt="PV Automations Logo" 
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavItemClick(item.href, item.label)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => smoothScrollToNative('kontakt')}
            >
              Book konsultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    handleNavItemClick(item.href, item.label);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 bg-transparent border-none cursor-pointer text-left w-full"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-4 w-fit"
                onClick={() => smoothScrollToNative('kontakt')}
              >
                Book konsultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;