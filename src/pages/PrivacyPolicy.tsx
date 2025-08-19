import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { personalInfo } from "@/config/personalInfo";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tilbage</span>
          </button>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Privatlivspolitik
          </h1>
          <p className="text-muted-foreground mt-2">
            Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Her finder du PV Automations privatlivspolitik
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              PV Automations respekterer dit privatliv og er forpligtet til at beskytte dine personlige oplysninger. 
              Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger, når du besøger vores hjemmeside 
              eller bruger vores tjenester.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Hvilke oplysninger indsamler vi?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Personlige oplysninger</h3>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• Navn og kontaktoplysninger (når du udfylder kontaktformularer)</li>
                  <li>• E-mailadresse (når du abonnerer på vores nyhedsbrev)</li>
                  <li>• Virksomhedsoplysninger (når du anmoder om konsultation)</li>
                  <li>• Kommunikation mellem dig og PV Automations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Automatisk indsamlede oplysninger</h3>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• IP-adresse og browseroplysninger</li>
                  <li>• Besøgstid og sidevisninger</li>
                  <li>• Referrerende hjemmesider</li>
                  <li>• Enhedsoplysninger og lokation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Hvordan bruger vi dine oplysninger?
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Vi bruger dine oplysninger til følgende formål:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• At levere og forbedre vores tjenester</li>
                <li>• At besvare dine henvendelser og forespørgsler</li>
                <li>• At sende dig relevante oplysninger om vores tjenester</li>
                <li>• At analysere hjemmesidens brug og forbedre brugeroplevelsen</li>
                <li>• At overholde lovpligtige forpligtelser</li>
                <li>• At beskytte vores rettigheder og sikkerhed</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cookies
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Min hjemmeside bruger cookies til at forbedre din oplevelse:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Nødvendige cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    Disse cookies er nødvendige for hjemmesidens funktionalitet og kan ikke deaktiveres.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Analytiske cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    Hjælper os med at forstå, hvordan besøgende bruger hjemmesiden.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Du kan administrere dine cookie-indstillinger i din browser. Bemærk, at deaktivering af cookies kan påvirke hjemmesidens funktionalitet.
              </p>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Deling af oplysninger
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vi deler ikke dine personlige oplysninger med tredjeparter, medmindre:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• Du har givet dit eksplicitte samtykke</li>
              <li>• Det er nødvendigt for at levere vores tjenester</li>
              <li>• Vi er lovpligtigt forpligtet til det</li>
              <li>• Det er nødvendigt for at beskytte vores rettigheder eller sikkerhed</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Datasikkerhed
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger mod:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• Uautoriseret adgang eller brug</li>
              <li>• Tab, misbrug eller ændring</li>
              <li>• Uautoriseret videregivelse</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Vores sikkerhedsforanstaltninger omfatter kryptering, adgangskontrol og regelmæssige sikkerhedsgennemgange.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Dine rettigheder
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Du har følgende rettigheder vedrørende dine personlige oplysninger:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• Ret til adgang til dine oplysninger</li>
              <li>• Ret til rettelse af unøjagtige oplysninger</li>
              <li>• Ret til sletning af dine oplysninger</li>
              <li>• Ret til begrænsning af behandling</li>
              <li>• Ret til dataportabilitet</li>
              <li>• Ret til at indvende mod behandling</li>
              <li>• Ret til at trække samtykke tilbage</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For at udøve disse rettigheder, kontakt mig på {personalInfo.email}.
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Opbevaring af oplysninger
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi opbevarer dine personlige oplysninger kun så længe, som det er nødvendigt for at opfylde de formål, 
              de blev indsamlet til, eller for at overholde lovpligtige forpligtelser. Når oplysningerne ikke længere 
              er nødvendige, sletter eller anonymiserer vi dem sikkert.
            </p>
          </section>

          {/* Third Party Services */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Tredjepartstjenester
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vores hjemmeside kan indeholde links til tredjeparters hjemmesider eller tjenester. 
              Vi er ikke ansvarlige for disse tredjeparters privatlivspolitikker eller praksis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vi anbefaler, at du læser privatlivspolitikkerne for alle tredjeparter, du interagerer med.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ændringer i privatlivspolitikken
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi kan opdatere denne privatlivspolitik fra tid til anden for at afspejle ændringer i vores praksis 
              eller af andre operationelle, juridiske eller regulatoriske årsager. Vi vil informere dig om eventuelle 
              væsentlige ændringer via e-mail eller gennem en meddelelse på vores hjemmeside.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hvis du har spørgsmål eller bekymringer om denne privatlivspolitik eller vores håndtering af dine 
              personlige oplysninger, kontakt mig venligst:
            </p>
            <div className="space-y-2 text-muted-foreground">
                              <p><strong>E-mail:</strong> {personalInfo.email}</p>
                              <p><strong>Telefon:</strong> {personalInfo.phone}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Vi vil svare på din henvendelse inden for rimelig tid og hjælpe dig med eventuelle spørgsmål.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
