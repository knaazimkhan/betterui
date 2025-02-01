import { notFound } from 'next/navigation'
import { MDXLayout } from '@/components/docs/mdx-layout'
import fs from 'fs/promises'
import path from 'path'
import { registry } from '@/docs/registry'
import { MDXContent } from '@/components/mdx/mdx-content'
import { bundleMDX } from 'mdx-bundler'
import { rehypeComponent } from '@/lib/rehype-component'
import { visit } from 'unist-util-visit'
import codeImport from 'remark-code-import';
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

interface ComponentPageProps {
  params: Promise<{
    slug: string
  }>
}

interface Frontmatter {
  title: string;
  description: string;
  component: string;
  date: string;
  author: string;
  published: boolean;
}

const prettyCodeOptions: Options = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
}

async function getComponentContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content/docs/components', `${slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf8')
    const mdxSource = await bundleMDX<Frontmatter>({
      source: content.trim(),
      mdxOptions: (options) => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), codeImport, remarkGfm]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypeComponent,
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          () => (tree: any) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;
                if (codeEl.tagName !== "code") {
                  return;
                }
                if (codeEl.data?.meta) {
                  // Extract event from meta and pass it down the tree.
                  const regex = /event="([^"]*)"/;
                  const match = codeEl.data?.meta.match(regex);
                  if (match) {
                    node.__event__ = match ? match[1] : null;
                    codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                  }
                }
                node.__rawString__ = codeEl.children?.[0].value;
                node.__src__ = node.properties?.__src__;
                node.__style__ = node.properties?.__style__;
              }
            })
          },
          [rehypePrettyCode, prettyCodeOptions],
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          () => (tree: any) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "figure") {
                if (!("data-rehype-pretty-code-figure" in node.properties)) {
                  return;
                }

                const preElement = node.children.at(-1);
                if (preElement.tagName !== "pre") {
                  return;
                }

                preElement.properties["__withMeta__"] =
                  node.children.at(0).tagName === "div";
                preElement.properties["__rawString__"] = node.__rawString__;

                if (node.__src__) {
                  preElement.properties["__src__"] = node.__src__;
                }

                if (node.__event__) {
                  preElement.properties["__event__"] = node.__event__;
                }

                if (node.__style__) {
                  preElement.properties["__style__"] = node.__style__;
                }
              }
            });
          },
          [rehypeAutolinkHeadings, {
            properties: {
              className: ['anchor'],
              ariaLabel: 'Link to heading',
            },
          }],
        ]
        return options
      }
    })
    return mdxSource
  } catch (error) {
    console.error('Error loading MDX:', error)
    return null
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const data = await getComponentContent(slug)

  if (!data?.code) {
    notFound()
  }

  return (
    <MDXLayout>
      <MDXContent code={data.code} />
    </MDXLayout>
  )
}

export async function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({
    slug,
  }))
}