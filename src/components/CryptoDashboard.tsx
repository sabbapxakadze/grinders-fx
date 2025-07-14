import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
    queryKey: ['coins'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
      );
      return response.json();
    },
    refetchInterval: 30000,
  });

  const { data: chartData } = useQuery({
    queryKey: ['bitcoin-chart'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily'
      );
      const data = await response.json();
      return data.prices?.map((price: [number, number], index: number) => ({
        day: `Day ${index + 1}`,
        price: Math.round(price[1])
      })) || [];
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
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

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Leader</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatPrice(coins[0]?.current_price || 0)}</div>
              <p className="text-xs text-muted-foreground">Bitcoin (BTC)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Gainer</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                +{Math.max(...(coins?.map((coin: CoinData) => coin.price_change_percentage_24h) || [0])).toFixed(2)}%
              </div>
              <p className="text-xs text-muted-foreground">24h Change</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Activity</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Live</div>
              <p className="text-xs text-muted-foreground">Real-time data</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        {chartData && chartData.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Bitcoin Price Trend (7 Days)</CardTitle>
              <CardDescription>Live price movement over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="day" 
                      className="text-muted-foreground"
                    />
                    <YAxis 
                      className="text-muted-foreground"
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip 
                      formatter={(value) => [formatPrice(Number(value)), 'Price']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Coins List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {coins?.map((coin: CoinData) => (
            <Card key={coin.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <img 
                  src={coin.image} 
                  alt={coin.name}
                  className="w-8 h-8 mr-3"
                />
                <div className="flex-1">
                  <CardTitle className="text-sm">{coin.name}</CardTitle>
                  <CardDescription className="uppercase">{coin.symbol}</CardDescription>
                </div>
                {coin.price_change_percentage_24h > 0 ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">
                  {formatPrice(coin.current_price)}
                </div>
                <div className={`text-sm ${coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-destructive'}`}>
                  {coin.price_change_percentage_24h > 0 ? '+' : ''}
                  {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Market Cap: {formatMarketCap(coin.market_cap)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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