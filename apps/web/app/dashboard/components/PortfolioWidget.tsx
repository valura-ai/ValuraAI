"use client"
import { ArrowDown } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"

export function PortfolioWidget() {
  return (
    <Card className="relative w-full rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col h-[160px] sm:h-[180px]">
      {/* Background graph */}
      <svg
        className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none opacity-20"
        viewBox="0 0 408 152"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 110 Q60 70 120 90 Q180 30 240 20 Q300 50 360 40 Q400 60 400 80"
          stroke="#ef4444"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <CardContent className="relative z-10 p-4 flex flex-col">
        <h3 className="text-black text-sm font-medium">Assets</h3>
        <div className="mt-1 space-y-1">
          <div className="text-3xl font-bold text-black">$54,847.30</div>
          <div className="flex items-center gap-2 text-red-600 font-medium">
            <ArrowDown className="w-4 h-4" />
            <span>3.24%</span>
            <span className="text-red-500 font-normal">-$1,023.95</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
