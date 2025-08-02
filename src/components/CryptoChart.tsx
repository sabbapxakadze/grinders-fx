import TradingViewWidget from 'react-tradingview-widget';
import { useTheme } from 'next-themes';

const CryptoChart = () => {
  const { theme } = useTheme();
  
  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart</h2>
      </div>
      <div className="h-[400px] w-full">
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme={theme === 'dark' ? 'dark' : 'light'}
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={true}
          interval="D"
          toolbar_bg={theme === 'dark' ? "#1a1a1a" : "#ffffff"}
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
        />
      </div>
    </div>
  );
};

export default CryptoChart;