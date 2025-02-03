'use client'

import { OramaClient } from '@oramacloud/client'
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama'

import type { SharedProps } from 'fumadocs-ui/components/dialog/search'

const endpoint = process.env.NEXT_PUBLIC_ORAMA_ENDPOINT || ''
const apiKey = process.env.NEXT_PUBLIC_ORAMA_PUBLIC_API_KEY || '' // public API key

const client = new OramaClient({ endpoint: endpoint, api_key: apiKey })

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} client={client} showOrama />
}
