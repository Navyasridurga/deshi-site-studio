import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function GuideContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-20">
        <div className="mb-8">
          <Badge className="mb-4 bg-saffron text-white">Introduction</Badge>
          <h2 className="text-3xl font-bold mb-4">Understanding the Indian No-Code Market</h2>
          <p className="text-lg text-muted-foreground">
            The Indian digital landscape presents unique opportunities for no-code website builders, 
            with over 750 million internet users and a growing SME sector embracing digital transformation.
          </p>
        </div>
        
        <Card className="p-8 bg-gradient-to-r from-saffron-light to-navy-light border-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Market Opportunity</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 63 million MSMEs seeking digital presence</li>
                <li>• Growing demand for affordable web solutions</li>
                <li>• Language diversity requiring localization</li>
                <li>• Mobile-first approach essential</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Key Challenges</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Limited technical expertise among users</li>
                <li>• Price sensitivity in target market</li>
                <li>• Need for regional payment integration</li>
                <li>• Compliance with local regulations</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <Separator className="bg-saffron/20" />

      {/* Drag & Drop */}
      <section id="drag-drop" className="scroll-mt-20">
        <div className="mb-8">
          <Badge className="mb-4 bg-navy text-white">Technical Core</Badge>
          <h2 className="text-3xl font-bold mb-4">Drag-and-Drop Functionality</h2>
          <p className="text-lg text-muted-foreground">
            Building an intuitive drag-and-drop interface that works seamlessly across devices and browsers.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold text-lg mb-4">Core Technologies</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Frontend Framework</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  React.js with libraries like react-dnd or @dnd-kit for drag-and-drop functionality
                </p>
                
                <h5 className="font-medium mb-2">State Management</h5>
                <p className="text-sm text-muted-foreground">
                  Redux or Zustand for managing component hierarchy and page state
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Canvas Rendering</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  HTML5 Canvas or SVG for precise positioning and visual feedback
                </p>
                
                <h5 className="font-medium mb-2">Mobile Optimization</h5>
                <p className="text-sm text-muted-foreground">
                  Touch event handling and responsive design considerations
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-saffron-light border-saffron/20">
            <h4 className="font-semibold text-lg mb-4">Implementation Features</h4>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Component Library</p>
                  <p className="text-sm text-muted-foreground">Pre-built UI components optimized for Indian businesses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Grid System</p>
                  <p className="text-sm text-muted-foreground">Responsive grid with snap-to functionality</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Live Preview</p>
                  <p className="text-sm text-muted-foreground">Real-time preview across different device breakpoints</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="bg-saffron/20" />

      {/* Templates */}
      <section id="templates" className="scroll-mt-20">
        <div className="mb-8">
          <Badge className="mb-4 bg-saffron text-white">Content Strategy</Badge>
          <h2 className="text-3xl font-bold mb-4">Industry-Specific Templates</h2>
          <p className="text-lg text-muted-foreground">
            Curated template collections designed for Indian businesses and cultural preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-lg mb-4">Popular Industries</h4>
            <div className="space-y-3">
              {[
                "Restaurants & Food Delivery",
                "Healthcare & Clinics", 
                "Education & Coaching",
                "Retail & E-commerce",
                "Real Estate",
                "Wedding & Events"
              ].map((industry, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-saffron-light rounded-lg">
                  <div className="w-8 h-8 bg-saffron text-white rounded-md flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-lg mb-4">Template Features</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Multi-language Support</h5>
                <p className="text-sm text-muted-foreground">Hindi, English, and regional language options</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Payment Integration</h5>
                <p className="text-sm text-muted-foreground">UPI, Paytm, Razorpay integration ready</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Cultural Design Elements</h5>
                <p className="text-sm text-muted-foreground">Colors, fonts, and layouts suited for Indian audiences</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Festival Themes</h5>
                <p className="text-sm text-muted-foreground">Seasonal templates for Diwali, Holi, and other celebrations</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="bg-saffron/20" />

      {/* SEO & Marketing */}
      <section id="seo" className="scroll-mt-20">
        <div className="mb-8">
          <Badge className="mb-4 bg-navy text-white">Growth Strategy</Badge>
          <h2 className="text-3xl font-bold mb-4">SEO Tools & Marketing Integration</h2>
          <p className="text-lg text-muted-foreground">
            Built-in SEO optimization and marketing tools to help Indian businesses succeed online.
          </p>
        </div>

        <Card className="p-8 bg-navy-light border-navy/20">
          <div className="grid gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Essential SEO Features</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <h5 className="font-medium">Local SEO</h5>
                  <p className="text-xs text-muted-foreground">Google My Business integration</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">📱</div>
                  <h5 className="font-medium">Mobile-First</h5>
                  <p className="text-xs text-muted-foreground">Mobile-optimized meta tags</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h5 className="font-medium">Core Web Vitals</h5>
                  <p className="text-xs text-muted-foreground">Performance optimization</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Marketing & Monetization */}
      <section id="marketing" className="scroll-mt-20">
        <div className="mb-8">
          <Badge className="mb-4 bg-saffron text-white">Business Strategy</Badge>
          <h2 className="text-3xl font-bold mb-4">Marketing & Monetization</h2>
          <p className="text-lg text-muted-foreground">
            Proven strategies for marketing your no-code platform and generating sustainable revenue in India.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-lg mb-4">Revenue Models</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-3 text-saffron">Freemium Model</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free plan with basic templates</li>
                  <li>• Premium features for ₹299-₹999/month</li>
                  <li>• Custom domain and advanced tools</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-3 text-navy">Marketplace Commission</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Template marketplace with revenue sharing</li>
                  <li>• Plugin and integration commissions</li>
                  <li>• White-label solutions for agencies</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-saffron-light to-navy-light border-0">
            <h4 className="font-semibold text-lg mb-4">Go-to-Market Strategy</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">Digital Marketing</h5>
                <p className="text-muted-foreground">SEO, social media, and Google Ads targeting SMEs</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Partnerships</h5>
                <p className="text-muted-foreground">Collaborate with digital marketing agencies</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Community Building</h5>
                <p className="text-muted-foreground">WhatsApp groups and local business networks</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}