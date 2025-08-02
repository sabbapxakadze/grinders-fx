import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import CryptoChart from "./CryptoChart";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

const CryptoDashboard = () => {
  const { data: coins, isLoading } = useQuery({
    queryKey: ['featured-coins'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,gala&vs_currencies=usd&include_24hr_change=true'
      );
      return response.json();
    },
    refetchInterval: 30000,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `$${marketCap.toFixed(2)}`;
  };

  const coinData = [
    { name: "BTC", id: "bitcoin", symbol: "₿" },
    { name: "ETH", id: "ethereum", symbol: "Ξ" },
    { name: "XRP", id: "ripple", symbol: "⚡" },
    { name: "GALA", id: "gala", symbol: "🎮" }
  ];

  if (isLoading || !coins) {
    return (
      <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Interactive Dashboard</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Live Crypto Market
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real-time cryptocurrency data. This is what our members see and more!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coinData.map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-muted rounded w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Interactive Dashboard</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Live Crypto Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore real-time cryptocurrency data. This is what our members see and more!
          </p>
        </div>

        {/* Live Coin Prices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {coinData.map((coin) => {
            const coinPrice = coins[coin.id];
            const price = coinPrice?.usd || 0;
            const change = coinPrice?.usd_24h_change || 0;
            const isPositive = change > 0;

            return (
              <Card key={coin.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <span>{coin.symbol}</span>
                    {coin.name}
                  </CardTitle>
                  {isPositive ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatPrice(price)}</div>
                  <p className={`text-xs ${isPositive ? 'text-success' : 'text-destructive'}`}>
                    {isPositive ? '+' : ''}{change.toFixed(2)}% (24h)
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* TradingView Chart */}
        <CryptoChart />


        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Want Professional Trading Signals?</CardTitle>
              <CardDescription>
                This is just a taste of what we analyze. Our members get detailed analysis, 
                entry/exit points, and risk management for profitable trades.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full md:w-auto">
                Join Grinders FX Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CryptoDashboard;