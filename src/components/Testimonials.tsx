import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, TrendingUp, DollarSign } from "lucide-react";

const Testimonials = () => {
  const feedbacks = [
    {
      type: "screenshot",
      title: "Trading Results Screenshot",
      author: "Alex M.",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      caption: "Made $1,847 profit following yesterday's EUR/USD signal! 🚀",
      profit: "+$1,847"
    },
    {
      type: "discord",
      author: "Sarah_Trader",
      timestamp: "Today at 2:14 PM",
      avatar: "ST",
      message: "Just wanted to thank the team! Hit my 3rd consecutive profitable week using the signals. The risk management tips are gold! 💰",
      profit: "+$892"
    },
    {
      type: "review",
      author: "Mike Rodriguez",
      role: "Part-time Trader",
      rating: 5,
      message: "Been in the VIP group for 2 months now. The accuracy is insane and the community is super helpful for beginners like me.",
      profit: "+$2,340",
      timeframe: "2 Months"
    },
    {
      type: "screenshot",
      title: "Trading Account Balance",
      author: "Emma K.",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      caption: "Started with $500, now at $1,285 in just 3 weeks! Grinders FX signals are incredible 📈",
      profit: "+157%"
    },
    {
      type: "discord",
      author: "CryptoKing91",
      timestamp: "Yesterday at 8:45 AM",
      avatar: "CK",
      message: "Another green day! The GBP/JPY signal was perfect timing. Already up 3.2% today 🔥",
      profit: "+3.2%"
    },
    {
      type: "review",
      author: "Jennifer Wu",
      role: "Forex Trader",
      rating: 5,
      message: "The daily analysis helps me understand market movements better. Not just signals, but real education.",
      profit: "+$1,650",
      timeframe: "6 Weeks"
    }
  ];

  const renderFeedback = (feedback, index) => {
    switch (feedback.type) {
      case "screenshot":
        return (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img 
                src={feedback.image} 
                alt={feedback.title}
                className="w-full h-48 object-cover bg-muted"
              />
              <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                {feedback.profit}
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                  {feedback.author.charAt(0)}
                </div>
                <span className="font-medium text-sm">{feedback.author}</span>
                <span className="text-xs text-muted-foreground">• {feedback.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{feedback.caption}</p>
            </CardContent>
          </Card>
        );

      case "discord":
        return (
          <Card key={index} className="bg-[#36393f] border-[#40444b] text-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  {feedback.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{feedback.author}</span>
                    <span className="text-xs text-gray-400">{feedback.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{feedback.message}</p>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    {feedback.profit}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "review":
        return (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{feedback.author}</CardTitle>
                  <CardDescription>{feedback.role}</CardDescription>
                </div>
                <div className="flex gap-1">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 italic">"{feedback.message}"</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-success">
                  {feedback.profit}
                </Badge>
                <Badge variant="outline">
                  {feedback.timeframe}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MessageSquare className="w-3 h-3 mr-1" />
            Real Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Community Shares
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Screenshots, messages, and reviews from real traders in our Discord and Telegram groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback, index) => renderFeedback(feedback, index))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span>87% Win Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-success" />
              <span>$2.3M+ Member Profits</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>500+ Active Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;