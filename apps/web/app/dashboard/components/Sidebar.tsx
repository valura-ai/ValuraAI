'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  BookOpen,
  Lock,
  TrendingDown,
  BarChart3,
  Zap,
  Users,
  MessageSquare
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const menuItems = [
  {
    section: 'YOUR',
    items: [
      { icon: TrendingUp, label: 'Portfolio' },
      { icon: Sparkles, label: 'Valura AI' }
    ]
  },
  {
    section: 'EXPLORE',
    items: [
      { icon: BookOpen, label: 'Guided' },
      { icon: Lock, label: 'Valura Exclusives' },
      { icon: TrendingDown, label: 'Deal Flow' },
      { icon: BarChart3, label: 'Public Markets' },
      { icon: Zap, label: 'Trade Stocks & ETFs' }
    ]
  },
  {
    section: 'LOUNGE',
    items: [{ icon: Users, label: 'Community' }]
  }
]

const expandedWidth = 'clamp(15rem, 15vw, 15rem)' 
const collapsedWidth = '5rem' 

export default function Sidebar() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Portfolio')

  return (
    <motion.div
      initial={{ width: expandedWidth }}
      animate={{ width: isCollapsed ? collapsedWidth : expandedWidth }}
      transition={{ type: 'spring', stiffness: 210, damping: 25 }}
      className="flex flex-col bg-white/90 backdrop-blur-md h-screen rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden select-none"
      style={{ minWidth: collapsedWidth, maxWidth: expandedWidth }}
    >
      {/* Header */}
      <div className="flex items-center justify-center px-3 sm:px-4 py-3 border-b border-gray-200/30 flex-shrink-0">
        <button
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setIsCollapsed((v) => !v)}
          className="bg-white shadow rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
          tabIndex={0}
          type="button"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent" style={{ minHeight: 0 }}>
        {menuItems.map((section, sidx) => (
          <div key={sidx} className="mb-4">
            {!isCollapsed && (
              <h3
                className="mb-2 px-4 font-semibold text-gray-400 uppercase tracking-wider select-none"
                style={{ fontSize: 'clamp(0.7rem, 0.7vw, 0.6rem)' }}
              >
                {section.section}
              </h3>
            )}
            <div className="flex flex-col space-y-1">
              {section.items.map((item, iidx) => {
                const isActive = activeItem === item.label
                return (
                  <button
                    key={iidx}
                    onClick={() => setActiveItem(item.label)}
                    title={isCollapsed ? item.label : undefined}
                    className={`flex items-center gap-3 rounded-lg transition-colors duration-200 w-full
                      ${isActive ? 'bg-green-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}
                      ${isCollapsed ? 'justify-center' : 'px-3 sm:px-4'} py-1.5`}
                    style={
                      isActive
                        ? {
                            backgroundColor: '#05A049',
                            boxShadow: '0 3px 5px rgb(5 160 73 / 0.25)'
                          }
                        : undefined
                    }
                    type="button"
                  >
                    <item.icon
                      className={isActive ? 'text-white' : 'text-gray-600'}
                      size={isCollapsed ? 20 : 18}
                    />
                    {!isCollapsed && (
                      <span
                        className="truncate select-none"
                        style={{ lineHeight: 1, fontSize: 'clamp(0.9rem, 0.9vw, 0.9rem)' }}
                      >
                        {item.label}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-auto px-4 pb-5 space-y-4">
          {!isCollapsed ? (
            <>
              <div
                className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none text-xs"
                role="button"
                onClick={()=>{
                  router.push('/auth/kyc')
                }}
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.775rem)' }}>
                  KYC Account Setup
                </h4>
                <p className="text-gray-600 leading-tight" style={{ fontSize: 'clamp(0.55rem, 0.7vw, 0.65rem)' }}>
                  Set up your investment accounts
                </p>
                <div className="flex justify-end">
                  <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </div>
              </div>
              <div
                className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none text-xs"
                role="button"
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.775rem)' }}>
                  Message from your team
                </h4>
                <p className="text-gray-600 leading-tight" style={{ fontSize: 'clamp(0.55rem, 0.7vw, 0.65rem)' }}>
                  Schedule a welcome call
                </p>
                <div className="flex justify-end">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Image
                  src="/valura-logo.png"
                  alt="Valura Logo"
                  width={40} // Increased from 32
                  height={40} // Increased from 32
                  priority
                  draggable={false}
                />
                <button
                  type="button"
                  className="text-center text-gray-800 hover:underline focus:outline-none focus:ring-0"
                  style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.65rem)' }}
                >
                  Send feedback
                </button>
                <button
                  type="button"
                  className="text-center text-gray-500 hover-underl
ine focus:outline-none focus:ring-0"
                  style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.6rem)' }}
                >
                  Legal, Privacy & Terms
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center">
              <Image
                src="/valura-logo.png"
                alt="Valura Logo"
                width={36}
                height={36}
                priority
                draggable={false}
              />
            </div>
          )}
        </div>
      </nav>
    </motion.div>
  )
}