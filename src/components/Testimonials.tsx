import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Day Trader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Grinders FX signals have been game-changing for my trading. Made $2,500 profit in my first month!",
      profit: "+$2,500",
      timeframe: "First Month"
    },
    {
      name: "Sarah Chen",
      role: "Forex Trader",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "The Discord community is amazing and the signals are incredibly accurate. Best investment I've made.",
      profit: "+$4,200",
      timeframe: "3 Months"
    },
    {
      name: "Mike Rodriguez",
      role: "Part-time Trader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Even as a beginner, I'm seeing consistent profits. The risk management guidance is invaluable.",
      profit: "+$1,800",
      timeframe: "6 Weeks"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Members Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real traders, real results. See how Grinders FX has transformed their trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="text-center">
                <Quote className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex justify-center gap-4 text-sm">
                  <Badge variant="secondary" className="text-success">
                    {testimonial.profit}
                  </Badge>
                  <Badge variant="outline">
                    {testimonial.timeframe}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join hundreds of successful traders who trust Grinders FX for their trading signals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;