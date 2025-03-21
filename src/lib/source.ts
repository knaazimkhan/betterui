import { createElement } from 'react'

import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { defineConfig } from 'fumadocs-mdx/config'
import { icons } from 'lucide-react'

import { docs, meta } from '@/source'

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return // You may set a default icon

    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})

export default defineConfig()
