import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

const HeroSection = () => {
  const waveWidth = 1;
  return (
    <section id="hjem" className="bg-gradient-hero relative overflow-hidden">
      {/* Subtle waves background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(197 71% 52%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(197 71% 52%)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Multiple parallel wavy lines that fade out towards top left */}
          <path
            d="M0,350 Q200,320 400,350 Q600,380 800,350 Q1000,320 1200,350"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-1"
          />
          <path
            d="M0,340 Q150,310 350,340 Q550,370 750,340 Q950,310 1200,340"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-2"
          />
          <path
            d="M0,330 Q180,300 380,330 Q580,360 780,330 Q980,300 1200,330"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-3"
          />
          <path
            d="M0,320 Q120,290 320,320 Q520,350 720,320 Q920,290 1200,320"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-4"
          />
          <path
            d="M0,310 Q250,280 450,310 Q650,340 850,310 Q1050,280 1200,310"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-5"
          />
          <path
            d="M0,300 Q170,270 370,300 Q570,330 770,300 Q970,270 1200,300"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-6"
          />
          <path
            d="M0,290 Q220,260 420,290 Q620,320 820,290 Q1020,260 1200,290"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-7"
          />
          <path
            d="M0,280 Q140,250 340,280 Q540,310 740,280 Q940,250 1200,280"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-8"
          />
          <path
            d="M0,270 Q190,240 390,270 Q590,300 790,270 Q990,240 1200,270"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-9"
          />
          <path
            d="M0,260 Q160,230 360,260 Q560,290 760,260 Q960,230 1200,260"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-10"
          />
          {/* Additional random lines for more organic feel */}
          <path
            d="M0,250 Q130,220 330,250 Q530,280 730,250 Q930,220 1200,250"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-11"
          />
          <path
            d="M0,240 Q180,210 380,240 Q580,270 780,240 Q980,210 1200,240"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-12"
          />
          <path
            d="M0,230 Q110,200 310,230 Q510,260 710,230 Q910,200 1200,230"
            stroke="url(#waveGradient)"
            strokeWidth={waveWidth}
            fill="none"
            className="wave-line-13"
          />
        </svg>
      </div>

      {/* Brushstrokes background - angled from center, fading near top */}
      <div className="absolute inset-0 -z-15">
        <img 
          src="/brushstrokes.png" 
          alt="" 
          className="absolute w-[1200px] h-[400px] object-contain opacity-60" 
          style={{ 
            left: '8%', 
            top: '-20%',
            transform: 'translateX(-50%) rotate(-55deg) scaleY(1)',
            filter: 'opacity(0.7)'
          }}
        />
      </div>

        {/* Brushstrokes background - angled from center, fading near top */}
        <div className="absolute inset-0 -z-5 hidden md:block">
        <img 
          src="/brushstrokes.png" 
          alt="" 
          className="absolute w-[1200px] h-[400px] object-contain opacity-60" 
          style={{ 
            left: '90%', 
            top: '-2%',
            transform: 'translateX(-50%) rotate(43deg) scaleY(1)',
            filter: 'opacity(0.7)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-8 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <img src="/lightbulb.png" alt="Innovation" className="h-60 w-60 object-contain" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Fra tanke til{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transformation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground font-medium">
          Professionel automatisering til virksomheder i alle størrelser
          </p>

          {/* Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Skræddersyede digitale løsninger til netop din virksomhed.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed italic">
              fra enkle procesoptimeringer til komplekse systemer.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => smoothScrollToNative('kontakt')}
            >
              Book en gratis konsultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="relative z-10 cursor-pointer"
              onClick={() => {
                console.log('Button clicked!');
                console.log('Attempting to scroll to eksempler section');
                smoothScrollToNative('eksempler');
              }}
              onMouseEnter={() => console.log('Button hovered')}
              onMouseDown={() => console.log('Button mouse down')}
            >
              Se eksempler
            </Button>
          </div>

          {/* AI Tool Button */}
          <div className="mt-6 flex justify-center relative z-20">
            <Button 
              variant="outline" 
              size="lg"
              className="relative z-10 cursor-pointer border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
              onClick={() => smoothScrollToNative('ai-evaluation')}
            >
              Gratis AI tool
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Betroet af verdens største konsulent-virksomheder
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs font-semibold text-muted-foreground">AUTOMATISERING</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-semibold text-muted-foreground">INTEGRATION</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-semibold text-muted-foreground">OPTIMERING</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;