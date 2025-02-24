'use client'

import React from 'react'

import { RotateCw } from 'lucide-react'

import { Button } from './ui/button'

interface ReplayButtonProps {
  setRefreshKey?: (value: React.SetStateAction<number>) => void
  onClick: () => void
}

export const ReplayButton = ({ onClick }: ReplayButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="absolute right-2 top-2 z-10 size-8 rounded-full transition-all duration-300
        hover:rotate-[360deg] hover:bg-primary/10"
      variant="ghost"
      aria-label="Refresh Preview"
    >
      <RotateCw className="size-4 text-primary" />
    </Button>
  )
}
