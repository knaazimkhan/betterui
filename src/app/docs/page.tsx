import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
          Welcome to BetterUI documentation. Learn how to use our components and build beautiful interfaces.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-secondary-200 p-6 dark:border-secondary-800">
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            Learn how to install and start using BetterUI in your projects.
          </p>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href="/docs/introduction">Get Started →</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-secondary-200 p-6 dark:border-secondary-800">
          <h2 className="text-xl font-semibold">Components</h2>
          <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            Explore our collection of fully accessible and customizable components.
          </p>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href="/docs/components/button">View Components →</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-secondary-200 p-6 dark:border-secondary-800">
        <h2 className="text-xl font-semibold">Features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-medium">Accessible</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              All components follow WAI-ARIA guidelines and support keyboard navigation.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Customizable</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Easily customize components using Tailwind CSS utility classes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">TypeScript</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Built with TypeScript for better developer experience and type safety.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              All components support dark mode out of the box.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Modern Stack</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Built with Next.js 14 and React Server Components.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Open Source</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Free and open source under the MIT license.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 