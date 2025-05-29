"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

export function NewsWidget() {
  return (
    <Card className="w-full h-fit rounded-2xl shadow-lg overflow-hidden p-0 bg-white">
      <div className="flex flex-col">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wbaB77xMXV7KZYBMGnfL4l3Z153Hoi.png"
          alt="News"
          className="w-full object-cover aspect-video"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg?height=200&width=400";
          }}
        />
        <div className="px-4 py-3 space-y-3">
          <div className="flex items-center gap-2">
            <Badge className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded-sm font-medium">
              CNN News
            </Badge>
            <span className="text-xs text-gray-500 font-medium">25 min ago</span>
          </div>
          <h3 className="font-medium text-lg leading-tight text-gray-800">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer
</h3>
<p className="text-sm text-gray-500 opacity-70 leading-relaxed">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam...
</p>

          <div className="flex items-center justify-end pt-2">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-gray-100">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-gray-100">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}