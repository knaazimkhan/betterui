import { MetadataRoute } from 'next'

import { source } from '@/lib/source'

import { siteConfig } from './site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
  ]

  // Dynamic project routes
  const projectRoutes = source.getPages().map((page) => ({
    url: `${siteConfig.url}/dosc/${page.slugs.join('/')}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...projectRoutes]
}
