'use client'

import React, { useState } from 'react'

import { RotateCw } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface PreviewComponentProps {
  children: React.ReactNode
  className?: string
}

export function PreviewComponent({
  children,
  className,
}: PreviewComponentProps) {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="relative">
      <Button
        onClick={() => setRefreshKey((prev: number) => prev + 1)}
        className="absolute top-2 right-2 z-10 p-2 rounded-full hover:bg-primary/10 transition-colors"
        variant="ghost"
        aria-label="Refresh Preview"
      >
        <RotateCw className="text-primary size-4" />
      </Button>
      <div
        key={refreshKey}
        className={cn(
          'border rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0 md:p-16',
          className
        )}
      >
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}
