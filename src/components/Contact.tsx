import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community today and start receiving professional FX signals. 
            Contact us through Discord or Telegram for instant access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Join Our Discord</CardTitle>
              <CardDescription>
                Connect with our trading community and get instant access to signals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg" asChild>
                <a href="https://discord.gg/grinders-fx" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord Server
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-xl">Message on Telegram</CardTitle>
              <CardDescription>
                Prefer Telegram? Reach out to us directly for personalized support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <a href="https://t.me/grinders_fx" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Contact on Telegram
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-background rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Trading?</h3>
            <p className="text-muted-foreground mb-6">
              Don't miss out on profitable opportunities. Join thousands of successful traders 
              who trust Grinders FX for their trading signals.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Trading Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;