// 'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { getMDXComponent } from 'mdx-bundler/client'
import { ComponentPreview } from './component-preview'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

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

interface PreProps {
    children: ReactNode
    className?: string
}

export const components = {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    ComponentPreview,
    h1: ({ children, className, ...props }: HeadingProps) => (
        <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props}>
            {children}
        </h1>
    ),
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
        <code className={cn('relative rounded px-4 py-[0.2rem] font-mono text-sm', className)} {...props}>
            {children}
        </code>
    ),
    pre: ({ children, className, ...props }: PreProps) => (
        <pre className={cn('mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900', className)} {...props}>
            {children}
        </pre>
    ),
    Tabs: ({ children, className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn("relative mt-6 w-full", className)} {...props}>
            {children}
        </Tabs>
    ),
    TabsList: ({ children, className, ...props }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none border-b bg-transparent p-0",
                className,
            )}
            {...props}
        >
            {children}
        </TabsList>
    ),
    TabsTrigger: ({ children, className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
                className,
            )}
            {...props}
        >
            {children}
        </TabsTrigger>
    ),
    TabsContent: ({ children, className, ...props }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className,
            )}
            {...props}
        >
          {children}
        </TabsContent>
    ),
}

interface MDXContentProps {
    code: string
}

export function MDXContent({ code }: MDXContentProps) {
    const Component = getMDXComponent(code)
    return <Component components={components} />
} 