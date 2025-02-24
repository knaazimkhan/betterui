import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function DocsPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-semibold text-purple-400 md:text-5xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        You can start with Better UI docs.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Link href="/docs/introduction">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="https://github.com/knaazimkhan/betterui" target="_blank">
          <Button variant="outline" size="lg">
            View on GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
