"use client"
import React, { useState } from "react"
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, isSameDay, isSameMonth, isToday } from "date-fns"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "./ui/button"

const weekdayLabels = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]

function generateCalendarDays(currentMonth: Date) {
  const startMonth = startOfMonth(currentMonth)
  const endMonth = endOfMonth(currentMonth)
  const startDate = startOfWeek(startMonth, { weekStartsOn: 1 }) // Monday start
  const endDate = endOfWeek(endMonth, { weekStartsOn: 1 })
  const days = []
  let day = startDate
  while (day <= endDate) {
    days.push(day)
    day = addDays(day, 1)
  }
  return days
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

interface CalendarProps {
  onDateChange: (date: Date) => void
  selectedDate: Date | null
}

export function Calendar({ selectedDate, onDateChange }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())
  const days = generateCalendarDays(currentMonth)
  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1))
  }
  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1))
  }
  return (
    <div className="flex flex-col w-full max-w-sm p-4 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-2 flex-shrink-0">
        <Button variant="ghost" size="icon" onClick={prevMonth} aria-label="Previous Month">
          <ChevronLeft className="w-5 h-5 text-gray-500" />
        </Button>
        <h2 className="font-medium text-[#8A8A8F]">{format(currentMonth, "LLLL, yyyy")}</h2>
        <Button variant="ghost" size="icon" onClick={nextMonth} aria-label="Next Month">
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </Button>
      </div>
      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-xs font-medium text-[#8A8A8F] mb-2 select-none flex-shrink-0">
        {weekdayLabels.map((wd) => (
          <div key={wd} className="text-center py-1">{wd}</div>
        ))}
      </div>
      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1 text-sm flex-grow">
        {days.map((day, idx) => {
          const isCurrentMonth = isSameMonth(day, currentMonth)
          const isSelected = selectedDate ? isSameDay(day, selectedDate) : false
          const isTodayDate = isToday(day)
          return (
            <button
              key={idx}
              onClick={() => onDateChange(day)}
              disabled={!isCurrentMonth}
              type="button"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors
                ${
                  isSelected
                    ? "text-white"
                    : isTodayDate
                    ? "border"
                    : isCurrentMonth
                    ? "text-[#8A8A8F] hover:bg-gray-100"
                    : "text-gray-300 cursor-default"
                }`}
              style={{
                backgroundColor: isSelected ? "#05A049" : undefined,
                borderColor: isTodayDate ? "#05A049" : undefined,
                color: isTodayDate && !isSelected ? "#05A049" : undefined,
              }}
              aria-current={isSelected ? "date" : undefined}
              aria-label={`${format(day, "do LLLL yyyy")}${isSelected ? " selected" : ""}`}
            >
              {format(day, "d")}
            </button>
          )
        })}
      </div>
    </div>
  )
}

interface NotificationBannerProps {
  selectedDate: Date | null
}

export function NotificationBanner({ selectedDate }: NotificationBannerProps) {
  if (!selectedDate) return null
  return (
    <div
      className="max-w-sm mx-auto mt-6 text-white p-4 rounded-lg flex items-center gap-3"
      style={{ backgroundColor: "#05A049" }}
    >
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <Play className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold">{format(selectedDate, "do LLLL, yyyy")}</div>
        <div className="text-sm opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.
        </div>
      </div>
    </div>
  )
}

export default function CalendarWithNotification() {
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date())
  return (
    <div className="flex flex-col items-center h-full max-h-full overflow-hidden">
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <NotificationBanner selectedDate={selectedDate} />
    </div>
  )
}