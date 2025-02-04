import { generateOGImage } from 'fumadocs-ui/og'

import { metadataImage } from '@/lib/metadata-image'

export const runtime = 'edge'

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Better UI',
  })
})

export function generateStaticParams() {
  return metadataImage.generateParams()
}
