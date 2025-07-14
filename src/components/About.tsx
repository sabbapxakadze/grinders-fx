import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BarChart3, Shield, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Analysis",
      description: "Professional market analysis from seasoned traders with years of experience in forex markets."
    },
    {
      icon: Zap,
      title: "Real-Time Signals",
      description: "Get instant trading signals delivered to your Discord with precise entry and exit points."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Transparent performance tracking with detailed statistics and historical results."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk management strategies to protect your capital and maximize profits."
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Grinders FX</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Grinders FX?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another signal service. We're a community of dedicated traders 
            committed to helping you achieve consistent profitability in the forex market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Section */}
        <div className="bg-background rounded-lg p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="text-6xl font-bold text-primary">GFX</div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Professional Trading Team</h3>
              <p className="text-muted-foreground mb-6">
                Our team of professional traders has over 15 years of combined experience in forex markets. 
                We've developed proprietary strategies that consistently outperform the market, and now we're 
                sharing these strategies with our exclusive community.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">500%</div>
                  <div className="text-sm text-muted-foreground">Annual ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">24/7</div>
                  <div className="text-sm text-muted-foreground">Market Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Trades Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;