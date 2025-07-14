import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Master FX Trading with</span>
            <br />
            <span className="text-primary">Grinders FX</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our exclusive community of successful forex traders. Get professional signals, 
            expert analysis, and proven strategies that deliver consistent results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Trading Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Our Results
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">95%+</h3>
              <p className="text-muted-foreground">Win Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">5000+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>
            
            <div className="text-center">
              <div className="bg-warning/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">$2M+</h3>
              <p className="text-muted-foreground">Members' Profits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;