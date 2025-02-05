import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="container flex flex-col items-center py-16 text-center">
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        You can start with Better UI docs, or just use the core library.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Link
          href="/docs/introduction"
          // className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
        >
          Get Stated
        </Link>
        <a
          href="https://github.com/knaazimkhan/betterui"
          rel="noreferrer noopener"
          // className={cn(buttonVariants({ size: 'lg' }))}
        >
          Github
        </a>
      </div>
    </div>
  )
}
