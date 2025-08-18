import { Card, CardContent } from "@/components/ui/card";
import { Send, Sparkles, Clock, Code, FileText } from "lucide-react";
import { useState } from "react";
import { smoothScrollToNative } from "@/lib/smoothScroll";

interface ProjectAnalysis {
  Projektbeskrivelse: string;
  "Tech-stack": string;
  Tidsestimat: string;
}

const AIProjectEvaluation = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [analysisResult, setAnalysisResult] = useState<ProjectAnalysis | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  // Helper function to format AI response text
  const formatAIResponse = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\n\n/g, '</p><p class="mb-3">')
      .replace(/\n/g, '<br>');
  };

  // Helper function to format technical implementations with proper line breaks
  const formatTechnicalImplementations = (text: string) => {
    // Split by comma and clean up each item
    const items = text.split(',').map(item => item.trim()).filter(item => item.length > 0);
    
    // If there's only one item or no commas, use the original formatting
    if (items.length <= 1) {
      return formatAIResponse(text);
    }
    
    // Format multiple items with simple line breaks
    return items.map(item => formatAIResponse(item)).join('<br>');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectDescription.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setAnalysisResult(null);
    setLoadingStep(0);

    // Simulate loading steps for better UX
    const loadingSteps = [
      "Analyserer projektbeskrivelse...",
      "Genererer AI-evaluering...",
      "Beregner tidsestimat...",
      "Færdiggør analyse..."
    ];

    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    try {
      // AI Project Evaluation webhook URL
      const webhookUrl = import.meta.env.VITE_N8N_AI_EVALUATION_WEBHOOK_URL || "https://pvalentino.app.n8n.cloud/webhook-test/projektbot";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectDescription: projectDescription.trim(),
          timestamp: new Date().toISOString(),
          source: "PV Automation Website"
        }),
      });

      clearInterval(stepInterval);
      setLoadingStep(loadingSteps.length - 1);

      if (response.ok) {
        const data = await response.json();
        
        // Handle the new structured response format
        if (data.success && data.data) {
          setAnalysisResult(data.data);
          setSubmitStatus("success");
        } else if (Array.isArray(data) && data.length > 0) {
          // Fallback for old format
          setAnalysisResult(data[0]);
          setSubmitStatus("success");
        } else {
          console.error('Unexpected response format:', data);
          setSubmitStatus("error");
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Webhook error:', response.status, errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      clearInterval(stepInterval);
      console.error('Network error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setLoadingStep(0);
    }
  };

  const resetForm = () => {
    setProjectDescription("");
    setAnalysisResult(null);
    setSubmitStatus("idle");
  };

  return (
    <section id="ai-evaluation" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Tool - Projekt Evaluering
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Få en grundig evaluering af jeres projekts tekniske implementering og tidsbudget. <br />
              Lad endelig dette værktøj Inspirere for jeres fremtidige projekt  <br />
              <i>Tid anvendt til at udvikle dette værktøj: 5,5 timer.</i> <br />

            </p>
          </div>

          {!analysisResult ? (
            <Card className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl relative overflow-hidden transition-all duration-500 ${
              isSubmitting ? 'scale-[0.98] opacity-90' : 'scale-100 opacity-100'
            }`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
              
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg transition-all duration-500 ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}>
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Estimer jeres projekt
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Beskriv jeres projekt her. Inkluder gerne så mange detaljer som muligt <br />
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <div className="relative">
                      <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Vi vil gerne automatisere vores mails i Outlook, så de automatisk bliver sorteret, grupperet og placeret i de rette mapper eller opdelt efter prioritet."
                        className="w-full p-6 border border-slate-600/50 rounded-xl bg-slate-800/50 text-white placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                        rows={6}
                        required
                      />
                      <div className="absolute top-2 right-4 text-slate-500 text-sm">
                        {projectDescription.length}/1000
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                                         <button
                       type="submit"
                       disabled={isSubmitting || !projectDescription.trim()}
                       className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       <div className="relative flex items-center gap-3">
                         <Send className="h-5 w-5" />
                         Analyser projekt
                       </div>
                     </button>
                    
                    <div className="text-center sm:text-left">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        Gratis estimat
                      </div>
                      <div className="text-sm text-slate-400">
                        Ingen forpligtelse
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Loading State */}
                  {isSubmitting && (
                    <div className="max-w-2xl mx-auto mb-8">
                      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg">
                            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            Dit projekt bliver analyseret...
                          </h4>
                        </div>

                        {/* Progress Steps */}
                        <div className="space-y-3">
                          {[
                            "Analyserer projektbeskrivelse...",
                            "Genererer AI-evaluering...",
                            "Beregner tidsestimat...",
                            "Færdiggør analyse..."
                          ].map((step, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                                index < loadingStep 
                                  ? 'bg-emerald-500 text-white' 
                                  : index === loadingStep 
                                    ? 'bg-blue-500 text-white animate-pulse' 
                                    : 'bg-slate-600 text-slate-400'
                              }`}>
                                {index < loadingStep ? (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  index + 1
                                )}
                              </div>
                              <span className={`text-sm transition-all duration-500 ${
                                index < loadingStep 
                                  ? 'text-emerald-400' 
                                  : index === loadingStep 
                                    ? 'text-blue-400 font-medium' 
                                    : 'text-slate-500'
                              }`}>
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6">
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${((loadingStep + 1) / 4) * 100}%` }}
                            />
                          </div>
                          <div className="text-center mt-2">
                            <span className="text-xs text-slate-400">
                              {Math.round(((loadingStep + 1) / 4) * 100)}% færdig
                            </span>
                          </div>
                        </div>

                        {/* Fun Facts */}
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <div className="text-center">
                            <p className="text-xs text-slate-500">
                              💡 Did you know? Man kan nemt udskifte AI modeller til enten at være hurtigere, stærkere eller billigere.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">Der opstod en fejl. Prøv venligst igen eller kontakt os direkte.</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-sm text-slate-500">
                      Dette er ikke et bindende tilbud, men alene en vejledende evaulering og estimat af jeres projekt.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
              
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Projektrapport
                  </h3>
                  <p className="text-lg text-slate-300 mb-2">
                    Her er et estimat af jeres projekt
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      AI-genereret med GPT-4
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Høj konfidens
                    </span>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Projektbeskrivelse */}
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Projektbeskrivelse</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {analysisResult.Projektbeskrivelse}
                    </p>
                  </div>

                  {/* AI Analysis - Full Response */}
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Code className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Tekniske implementeringer</h4>
                    </div>
                    <div 
                      className="text-slate-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: formatTechnicalImplementations(analysisResult["Tech-stack"]) 
                      }}
                    />
                  </div>

                  {/* Tidsestimat */}
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-emerald-500/20 rounded-lg">
                        <Clock className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Udviklingstimer</h4>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {analysisResult.Tidsestimat}
                      </div>
                      <p className="text-slate-400 text-sm">
                        Dette er et vejledende estimat baseret på AI-analyse
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <button
                      onClick={resetForm}
                      className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      Analyser et nyt projekt
                    </button>
                    <button
                      onClick={() => smoothScrollToNative("kontakt")}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Kontakt mig
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-sm text-slate-500 text-center">
                      Dette er ikke et bindende tilbud, men alene en vejledende evaluering og estimat af jeres projekt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIProjectEvaluation;
