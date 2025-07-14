import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "1 Month Access",
      price: "$119",
      period: "month",
      description: "Perfect for trying out our premium signals",
      features: [
        "Daily FX Signals",
        "Market Analysis",
        "Discord Community Access",
        "Risk Management Guide",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "3 Months Access",
      price: "$387",
      period: "3 months",
      description: "Best value for serious traders",
      originalPrice: "$357",
      savings: "Save $30",
      features: [
        "Daily FX Signals",
        "Market Analysis",
        "Discord Community Access",
        "Risk Management Guide",
        "24/7 Support",
        "VIP Trading Room",
        "Personal Trading Mentor",
        "Advanced Strategies"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your Trading Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the plan that fits your trading goals. All plans include our premium signals 
            and access to our exclusive Discord community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  {plan.savings && (
                    <div className="text-sm text-success font-medium mb-2">{plan.savings}</div>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">USD</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    per {plan.period}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;