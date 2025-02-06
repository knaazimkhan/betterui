import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Better UI</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs/introduction"
          className="font-semibold text-fd-foreground underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </div>
  )
}
