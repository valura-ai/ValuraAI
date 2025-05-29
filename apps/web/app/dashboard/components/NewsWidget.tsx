"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function NewsWidget() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wbaB77xMXV7KZYBMGnfL4l3Z153Hoi.png"
            alt="News"
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENews Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-3">
          {/* CNN Logo, Name and Timestamp */}
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-red-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">
              CNN
            </div>
            <span className="text-sm font-medium text-gray-800">CNN News</span>
            <span className="text-xs text-gray-500 font-medium">25 min ago</span>
          </div>
          
          {/* Headline */}
          <h3 className="font-medium text-base leading-tight text-[#000000] mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetur
          </h3>
          
          {/* Description */}
          <p className="text-sm text-[#8A8A8F] leading-relaxed line-clamp-4">
            Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam...
          </p>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-end pt-3">
            <div className="flex items-center gap-4">
              <button 
                className="w-8 h-8 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] rounded-full flex items-center justify-center transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.16)] active:shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button 
                className="w-8 h-8 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] rounded-full flex items-center justify-center transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.16)] active:shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
                aria-label="Next news"
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}