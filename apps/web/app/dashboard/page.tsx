'use client'
import Sidebar from './components/Sidebar'
import CalendarWithNotification from './components/CalendarWithNotification'
import { PortfolioWidget } from './components/PortfolioWidget'
import { Watchlist } from './components/Watchlist'
import { NewsWidget } from './components/NewsWidget'
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[url('/dashboard-bg.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
      <div className="lg:ml-4">
        <Sidebar />
      </div>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden">
        {/* Top header */}
        <section className="max-w-3xl mb-6 flex-shrink-0">
          <h1 className="text-lg sm:text-xl font-semibold" style={{ color: "#00111B" }}>
            Welcome to your modern wealth platform, Priyesh!
          </h1>
          <p className="mt-1 text-sm text-gray-600 max-w-md">
            Explore all that Arta has to offer, and start building your digital family office.
          </p>
          <Button
            className="mt-3 rounded-full px-4 py-2 inline-flex items-center gap-2 text-[#00111B]"
            style={{ backgroundColor: "#FFFFFC" }}
            size="sm"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Button>
        </section>
        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 flex-grow overflow-hidden">
          {/* Left: Calendar */}
          <div className="lg:col-span-3 h-full flex flex-col overflow-hidden">
            <CalendarWithNotification />
          </div>
          {/* Center + Right: Portfolio, Watchlist and News */}
          <div className="lg:col-span-9 flex flex-col overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-grow overflow-hidden">
              {/* Portfolio and Watchlist stacked vertically */}
              <div className="flex flex-col gap-4 sm:gap-6 overflow-hidden">
                <PortfolioWidget />
                <Watchlist />
              </div>
              {/* News Widget */}
              <div className="h-full overflow-hidden flex flex-col">
                <NewsWidget />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}