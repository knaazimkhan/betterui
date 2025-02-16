import { Fragment } from 'react'

import NextLink from 'next/link'

import { MarkdownProps } from 'fumadocs-mdx/config'
import { AutoTypeTable } from 'fumadocs-typescript/ui'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { TypeTable } from 'fumadocs-ui/components/type-table'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page'

import { CodeSnippet } from './code-snippet'
import { PreviewComponent } from './preview-component'

interface DocsWrapperProps extends MarkdownProps {
  title: string
  description?: string
}

export function DocsWrapper(props: DocsWrapperProps) {
  const { title, description, body: MDXContent } = props

  return (
    <Fragment>
      <DocsTitle>{title}</DocsTitle>
      <DocsDescription>{description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            AutoTypeTable,
            Tabs,
            Tab,
            TypeTable,
            NextLink,
            PreviewComponent,
            CodeSnippet,
          }}
        />
      </DocsBody>
    </Fragment>
  )
}
