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

const expandedWidth = 'clamp(14rem, 14vw, 16rem)' 
const collapsedWidth = '4.5rem' 

export default function Sidebar() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Portfolio')

  return (
    <motion.div
      initial={{ width: expandedWidth }}
      animate={{ width: isCollapsed ? collapsedWidth : expandedWidth }}
      transition={{ type: 'spring', stiffness: 210, damping: 25 }}
      className="flex flex-col bg-white/90 backdrop-blur-md h-[calc(100vh-1.5rem)] rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden select-none"
      style={{ minWidth: collapsedWidth, maxWidth: expandedWidth }}
    >
      {/* Header */}
      <div className="flex items-center justify-center px-2 sm:px-3 py-2 sm:py-2.5 border-b border-gray-200/30 flex-shrink-0">
        <button
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setIsCollapsed((v) => !v)}
          className="bg-white shadow rounded-full p-1 sm:p-1.5 hover:bg-gray-100 transition-colors"
          tabIndex={0}
          type="button"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
          )}
        </button>
      </div>

      {isCollapsed && (
        <div className="flex justify-center my-2">
          <div className="w-6 h-px bg-black/30"></div>
        </div>
      )}

      <nav className="flex-grow flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {menuItems.map((section, sidx) => (
            <div key={sidx} className="mb-2 sm:mb-3">
              {!isCollapsed && (
                <h3
                  className="mb-1.5 px-3 sm:px-4 font-semibold text-gray-400 uppercase tracking-wider select-none text-[0.55rem] sm:text-[0.6rem] lg:text-[0.65rem]"
                >
                  {section.section}
                </h3>
              )}
              <div className="flex flex-col space-y-0.5 sm:space-y-1">
                {section.items.map((item, iidx) => {
                  const isActive = activeItem === item.label
                  return (
                    <button
                      key={iidx}
                      onClick={() => setActiveItem(item.label)}
                      title={isCollapsed ? item.label : undefined}
                      className={`flex items-center gap-2 sm:gap-3 rounded-lg transition-colors duration-200 w-full py-1 sm:py-1.5
                        ${isActive ? 'bg-green-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}
                        ${isCollapsed ? 'justify-center' : 'px-2.5 sm:px-3'}`}
                      style={
                        isActive
                          ? {
                              backgroundColor: '#05A049',
                              boxShadow: '0 2px 4px rgb(5 160 73 / 0.25)'
                            }
                          : undefined
                      }
                      type="button"
                    >
                      <item.icon
                        className={isActive ? 'text-white' : 'text-gray-600'}
                        size={isCollapsed ? 16 : 16}
                      />
                      {!isCollapsed && (
                        <span
                          className="truncate select-none text-[0.75rem] sm:text-[0.8rem] lg:text-[0.85rem]"
                          style={{ lineHeight: 1.1 }}
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
        </div>

        {/* Footer */}
        <div className="mt-auto px-2 sm:px-3 pb-3 sm:pb-4 space-y-2 sm:space-y-3 flex-shrink-0">
          {!isCollapsed ? (
            <>
              <div
                className="p-2 sm:p-2.5 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none"
                role="button"
                onClick={()=>{
                  router.push('/auth/kyc')
                }}
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900 text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem]">
                  KYC Account Setup
                </h4>
                <p className="text-gray-600 leading-tight text-[0.5rem] sm:text-[0.55rem] lg:text-[0.6rem]">
                  Set up your investment accounts
                </p>
                <div className="flex justify-end">
                  <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 rotate-180" />
                </div>
              </div>
              
              <div
                className="p-2 sm:p-2.5 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none"
                role="button"
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900 text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem]">
                  Message from your team
                </h4>
                <p className="text-gray-600 leading-tight text-[0.5rem] sm:text-[0.55rem] lg:text-[0.6rem]">
                  Schedule a welcome call
                </p>
                <div className="flex justify-end">
                  <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-1">
                <Image
                  src="/valura-logo.png"
                  alt="Valura Logo"
                  width={32} 
                  height={32} 
                  priority
                  draggable={false}
                />
                <button
                  type="button"
                  className="text-center text-gray-800 hover:underline focus:outline-none focus:ring-0 text-[0.5rem] sm:text-[0.55rem] lg:text-[0.6rem]"
                >
                  Send feedback
                </button>
                <button
                  type="button"
                  className="text-center text-gray-500 hover:underline focus:outline-none focus:ring-0 text-[0.45rem] sm:text-[0.5rem] lg:text-[0.55rem]"
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
                width={28}
                height={28}
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