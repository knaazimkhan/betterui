'use client'

import React, { useState } from 'react'

import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

import { ReplayButton } from './replay-button'

interface ComponentBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function ComponentBackground({
  children,
  className,
}: ComponentBackgroundProps) {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="relative">
      <ReplayButton onClick={() => setRefreshKey((prev: number) => prev + 1)} />

      <div
        key={refreshKey}
        className={cn(
          `relative flex flex-col items-center justify-center rounded-lg border
          bg-background p-16`,
          className
        )}
      >
        <React.Suspense
          fallback={
            <div className="flex items-center text-sm text-muted-foreground">
              <Loader2 className="mr-2 size-4 animate-spin" />
              Loading...
            </div>
          }
        >
          {children}
        </React.Suspense>
      </div>
    </div>
  )
}
