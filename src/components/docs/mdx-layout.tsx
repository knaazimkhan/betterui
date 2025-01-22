'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MDXLayoutProps {
  children: ReactNode
}

interface HeadingProps {
  children: ReactNode
  className?: string
}

interface ParagraphProps {
  children: ReactNode
  className?: string
}

interface ListProps {
  children: ReactNode
  className?: string
}

interface CodeProps {
  children: ReactNode
  className?: string
}

export const components = {
  h1: ({ children, className, ...props }: HeadingProps) => {
    console.log('h1', children)
    return (
      <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} style={{ color: 'red' }}>
        {children}
      </h1>
    )
  },
  h2: ({ children, className, ...props }: HeadingProps) => (
    <h2 className={cn('mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0', className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }: HeadingProps) => (
    <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }: HeadingProps) => (
    <h4 className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  ),
  p: ({ children, className, ...props }: ParagraphProps) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  ),
  ul: ({ children, className, ...props }: ListProps) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }: ListProps) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }: ListProps) => (
    <li className={cn('mt-2', className)} {...props}>
      {children}
    </li>
  ),
  code: ({ children, className, ...props }: CodeProps) => (
    <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm', className)} {...props}>
      {children}
    </code>
  ),
}

export function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <div className="mx-auto max-w-4xl py-10 px-4">
      {children}
    </div>
  )
} 