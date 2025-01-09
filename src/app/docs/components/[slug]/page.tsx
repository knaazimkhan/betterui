import { notFound } from 'next/navigation'
import { MDXLayout } from '@/components/docs/mdx-layout'
import { registry } from '@/docs/registry'

interface ComponentPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getComponentContent(slug: string) {
  try {
    const content = await import(`@/content/docs/components/${slug}.mdx`)
    console.log('content', content)
    return content
  } catch {
    return null
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const content = await getComponentContent(slug)
  console.log(slug)
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
  return Object.keys(registry).map((slug) => ({
    slug,
  }))
} 