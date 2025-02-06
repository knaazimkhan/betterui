import { notFound } from 'next/navigation'

import { DocsPage } from 'fumadocs-ui/page'

import { DocsWrapper } from '@/components/docs-wrapper'
import { metadataImage } from '@/lib/metadata-image'
import { source } from '@/lib/source'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

export const dynamicParams = false // it disable rendering for unspecified paths
export const revalidate = false // it should be cached forever

export default async function Page(props: PageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ full: true }}
      tableOfContent={{ style: 'clerk', single: false }}
    >
      <DocsWrapper {...page.data} />
    </DocsPage>
  )
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/docs/${page.slugs.join('/')}`,
    },
  })
}

export async function generateStaticParams() {
  return source.generateParams()
}
