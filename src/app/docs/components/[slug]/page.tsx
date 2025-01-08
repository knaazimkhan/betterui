import { notFound } from 'next/navigation'
import { registry } from '@/docs/registry'
import ComponentDocs from '@/components/docs/component-docs'

interface ComponentPageProps {
  params: Promise<{ slug: string }>
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const component = registry[slug]

  if (!component) {
    notFound()
  }

  return (
    <ComponentDocs
      title={component.name}
      description={component.metadata.description}
      component={component.name}
      preview={component.preview}
      code={component.metadata.usage.code}
      examples={component.examples}
      props={component.metadata.props}
    />
  )
} 