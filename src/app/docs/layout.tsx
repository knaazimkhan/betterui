import React from 'react';
import { SidebarNav } from '@/components/docs/sidebar-nav'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-gray-200 dark:border-gray-800">
        <SidebarNav />
      </aside>
      <main className="flex-1 pl-64">
        {children}
      </main>
    </div>
  )
} 