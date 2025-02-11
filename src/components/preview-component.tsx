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
        className="absolute right-2 top-2 z-10 rounded-full p-2 transition-colors
          hover:bg-primary/10"
        variant="ghost"
        aria-label="Refresh Preview"
      >
        <RotateCw className="size-4 text-primary" />
      </Button>
      <div
        key={refreshKey}
        className={cn(
          `rounded-xl border bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
          p-0 md:p-16`,
          className
        )}
      >
        <div
          className="mx-auto flex max-w-6xl items-center justify-center rounded-xl bg-white/10 p-8
            shadow-2xl backdrop-blur-md"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
