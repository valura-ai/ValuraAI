"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Coin {
  s: string; // Symbol
  c: string; // Current price
  P: string; // 24h price change (percentage)
}

const symbols = ["btcusdt", "ethusdt", "bnbusdt", "solusdt", "xrpusdt"];

// 🔁 Placeholder sparkline data — can be replaced with historical API data
const mockSparklineData = [
  { time: 1, price: 200 },
  { time: 2, price: 205 },
  { time: 3, price: 202 },
  { time: 4, price: 210 },
  { time: 5, price: 208 },
];

const CryptoTable: React.FC = () => {
  const [coins, setCoins] = useState<Record<string, Coin>>({});

  useEffect(() => {
    const streamNames = symbols.map((sym) => `${sym}@ticker`).join("/");
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${streamNames}`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const coin: Coin = data.data;
      setCoins((prev) => ({
        ...prev,
        [coin.s]: coin,
      }));
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Crypto Prices (Binance)</h2>
      <table className="min-w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Symbol</th>
            <th className="p-2 border">Price (USD)</th>
            <th className="p-2 border">24h Change</th>
            <th className="p-2 border">Graph</th> {/* ✅ Mini graph column */}
          </tr>
        </thead>
        <tbody>
          {symbols.map((sym) => {
            const coin = coins[sym.toUpperCase()];
            const price = coin
              ? `$${parseFloat(coin.c).toLocaleString()}`
              : "Loading...";
            const change = coin ? parseFloat(coin.P) : 0;

            return (
              <tr key={sym} className="hover:bg-gray-50">
                <td className="p-2 border flex items-center gap-2">
                 <img
                    src={`https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png`} // replace with mapping logic
                      alt={sym}
                        className="w-5 h-5"
                         />

                  {sym.toUpperCase()}
                </td>
                <td className="p-2 border">{price}</td>
                <td
                  className={`p-2 border ${
                    change >= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {coin ? `${change.toFixed(2)}%` : ""}
                </td>
                <td className="p-2 border" style={{ width: 100, height: 40 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockSparklineData}>
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#3b82f6"
                        dot={false}
                        strokeWidth={2}
                      />
                      <Tooltip contentStyle={{ display: "none" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
