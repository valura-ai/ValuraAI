"use client"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"

const watchlistData = [
  {
    symbol: "GOOG",
    name: "Alphabet.A",
    price: "$1230.19",
    changePercent: "3.4%",
    positive: true,
    color: "bg-black",
  },
  {
    symbol: "SPOT",
    name: "Spotify Inc",
    price: "$2342.89",
    changePercent: "3.4%",
    positive: true,
    color: "bg-[#1DB954]",
  },
  {
    symbol: "AMZN",
    name: "Amazon Inc",
    price: "$340.23",
    changePercent: "3.4%",
    positive: false,
    color: "bg-[#FF9900]",
  },
  {
    symbol: "SNAP",
    name: "Snapchat Inc",
    price: "$340.23",
    changePercent: "3.4%",
    positive: false,
    color: "bg-[#FFFC00]",
  },
]

function MiniChart({ positive }: { positive: boolean }) {
  return (
    <svg className="w-16 h-6" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={positive ? "M0 18 L12 10 L24 15 L36 8 L48 13 L64 6" : "M0 6 L12 9 L24 10 L36 15 L48 10 L64 14"}
        stroke={positive ? "#05A049" : "#EF4444"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Watchlist() {
  return (
    <Card className="w-full rounded-2xl shadow-lg flex flex-col min-h-0 max-h-[360px]">
      <CardHeader className="pb-2 flex items-center justify-between flex-shrink-0">
        <div>
          <h3 className="text-black font-semibold text-base">Watchlists</h3>
          <p className="text-black text-xs opacity-40">You have 4 Stocks</p>
        </div>
        <Button
          size="sm"
          className="bg-[#05A049] hover:bg-[#047A38] text-white rounded-full px-5 py-2 font-medium"
        >
          Add Stock
        </Button>
      </CardHeader>
      <CardContent className="p-0 overflow-auto flex-grow min-h-0">
        <div className="divide-y divide-gray-200/40">
          {watchlistData.map((stock, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                <div
                  className={`${stock.color} w-10 h-10 rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">
                    {stock.symbol === "GOOG" ? "N" : stock.symbol.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-black font-semibold text-sm">{stock.symbol}</div>
                  <div className="text-black text-xs opacity-40">{stock.name}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MiniChart positive={stock.positive} />
                <div className="text-right min-w-[80px]">
                  <div className="text-black font-semibold text-sm">{stock.price}</div>
                  <div className={`flex items-center justify-end gap-1 text-sm font-medium ${stock.positive ? "text-[#05A049]" : "text-[#EF4444]"}`}>
                    {stock.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {stock.changePercent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}