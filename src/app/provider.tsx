'use client'

import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'

import { RootProvider } from 'fumadocs-ui/provider'

const SearchDialog = dynamic(() => import('@/components/search')) // lazy load

export function Provider({ children }: { children: ReactNode }) {
  return <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
}
