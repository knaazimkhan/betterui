import { createFromSource } from 'fumadocs-core/search/server'

import { source } from '@/lib/source'

// it should be cached forever
export const revalidate = false

export const { GET } = createFromSource(source)
