import { notFound } from 'next/navigation'
import { MDXLayout } from '@/components/docs/mdx-layout'

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocContent(slug: string[]) {
  const path = slug.join('/')
  try {
    const content = await import(`@/content/docs/${path}.mdx`)
    return content
  } catch {
    return null
  }
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const content = await getDocContent(slug)

  if (!content) {
    notFound()
  }

  const MDXContent = content.default

  return (
    <MDXLayout>
      <MDXContent />
    </MDXLayout>
  )
}

export async function generateStaticParams() {
  return [
    { slug: ['guides', 'getting-started'] },
  ]
} 