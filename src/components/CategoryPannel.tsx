'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ListFilter, ChevronDown, ChevronUp } from 'lucide-react'

const categories = [
  'Sustainability',
  'Homestay',
  'School',
  'Ashram',
  'Treehouses',
  'Domes',
  'Farms',
]

export default function CategoryPanel() {
  const [active, setActive] = useState('Sustainability')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:flex items-center justify-between gap-4 px-16 py-4 w-full max-w-7xl mx-auto">
        <div className="flex space-x-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className="flex flex-col hover:cursor-pointer items-center text-sm focus:outline-none"
            >
              <img 
                src="CategoryPannel.svg" 
                alt=""
                className={cn(
                  'transition-all',
                  active === category 
                    ? 'opacity-100 scale-110 filter-none' 
                    : 'opacity-70 scale-100 filter grayscale'
                )}
              />
              <span
                className={cn(
                  'mt-1',
                  active === category ? 'text-primary font-medium' : 'text-gray-500'
                )}
              >
                {category}
              </span>
              {active === category && (
                <span className="mt-1 h-1 w-10 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-primary border-gray-300 hover:bg-gray-50 transition">
          <ListFilter/>
          Filters
        </button>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-4 py-4">
        {/* Active Category Display + Expand Button */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg flex-1 mr-4"
          >
            <img 
              src="CategoryPannel.svg" 
              alt=""
              className="w-5 h-5"
            />
            <span className="font-medium text-primary">{active}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-primary border-gray-300 hover:bg-gray-50 transition">
            <ListFilter size={16}/>
            Filters
          </button>
        </div>

        {/* Expandable Category Grid */}
        {isExpanded && (
          <div className="grid grid-cols-2 gap-3 mb-4 animate-in slide-in-from-top-1 duration-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActive(category)
                  setIsExpanded(false)
                }}
                className={cn(
                  "flex flex-col items-center p-3 rounded-lg border text-sm focus:outline-none transition-all",
                  active === category 
                    ? 'border-primary bg-primary/5 text-primary font-medium' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                )}
              >
                <img 
                  src="CategoryPannel.svg" 
                  alt=""
                  className={cn(
                    'w-8 h-8 mb-2 transition-all hidden sm:flex',
                    active === category 
                      ? 'opacity-100 scale-110 filter-none' 
                      : 'opacity-70 scale-100 filter grayscale'
                  )}
                />
                <span>{category}</span>
              </button>
            ))}
          </div>
        )}


      </div>
    </div>
  )
}