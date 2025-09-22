import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-saffron-light via-background to-navy-light overflow-hidden">
      <div className="absolute inset-0 opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/10 border border-saffron/20 rounded-full text-saffron font-medium">
            <Sparkles className="h-4 w-4" />
            Complete Implementation Guide
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build a No-Code Website Builder
            <br />
            <span className="bg-gradient-to-r from-saffron to-navy bg-clip-text text-transparent">
              for the Indian Market
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide covering everything from drag-and-drop functionality to market-specific 
            strategies, helping you build and launch a successful no-code platform in India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-saffron to-navy hover:opacity-90 text-white group"
            >
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-saffron text-saffron hover:bg-saffron-light"
            >
              Download PDF
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "Technical Implementation",
              description: "Drag-and-drop systems, templates, and hosting solutions",
              icon: "🔧"
            },
            {
              title: "Market Strategy",
              description: "Indian market insights, pricing, and localization",
              icon: "🎯"
            },
            {
              title: "Business Growth",
              description: "Marketing tactics and monetization strategies",
              icon: "📈"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-saffron/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}