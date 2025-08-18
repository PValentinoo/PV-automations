import { Card, CardContent } from "@/components/ui/card";
import { pricingConfig, formatPrice } from "@/config/pricing";
import { Zap, Cpu, Building2 } from "lucide-react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

const PriceSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transparente Priser
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Få et klart overblik over vores priser baseret på projektets omfang. <br />
              Vi tilbyder fleksible priser der skalerer med jeres behov. <br />
              <i>Denne hjemmeside har taget 59 timer at udvikle, svarende til 47.200 kr.</i> <br />
            </p>
          </div>

          {/* Pricing Table */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingConfig.pricingTiers.map((tier, index) => (
              <Card 
                key={tier.id}
                className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl relative overflow-visible transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 ${
                  index === 1 
                    ? 'ring-2 ring-blue-500/50 scale-105 shadow-blue-500/30 hover:scale-110 hover:shadow-blue-500/40' 
                    : 'hover:ring-2 hover:ring-blue-500/30'
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Popular Badge for Medium Tier */}
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-blue-400/50">
                        Mest Populær
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
                      {index === 0 && <Zap className="h-8 w-8 text-white" />}
                      {index === 1 && <Cpu className="h-8 w-8 text-white" />}
                      {index === 2 && <Building2 className="h-8 w-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-slate-400 text-sm">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatPrice(tier.price, tier.currency)}
                    </div>
                    <div className="text-slate-400 text-lg">{tier.perUnit}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-semibold text-blue-400 mb-2">
                      {tier.hours}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Komplet projektstyring</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Teknisk support</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Dokumentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
            
            <CardContent className="p-8 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Vigtige bemærkninger</h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{pricingConfig.additionalInfo.disclaimer}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{pricingConfig.additionalInfo.exclusions}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{pricingConfig.additionalInfo.note}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Skræddersyede Løsninger</h4>
                    <p className="text-slate-300 mb-4">
                      {pricingConfig.customPricing.message}
                    </p>
                    <button 
                      onClick={() => smoothScrollToNative('kontakt')}
                      className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer group"
                    >
                      <span>{pricingConfig.customPricing.cta}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Tool Call to Action */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => smoothScrollToNative('ai-tool')}>
              <span className="text-lg font-semibold">
                Vil du have estimeret dit projekt? Få et gratis estimat her!
              </span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
