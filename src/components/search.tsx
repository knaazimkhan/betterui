'use client'

import SearchDialog from 'fumadocs-ui/components/dialog/search-default'

import type { SharedProps } from 'fumadocs-ui/components/dialog/search'

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} />
}
