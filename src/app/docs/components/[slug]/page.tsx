import { notFound } from 'next/navigation'
import { MDXLayout } from '@/components/docs/mdx-layout'
import fs from 'fs/promises'
import path from 'path'
import { registry } from '@/docs/registry'
import { MDXContent } from '@/components/mdx/mdx-content'
import { bundleMDX } from 'mdx-bundler'
import { rehypeComponent } from '@/lib/rehype-component'
import { visit } from 'unist-util-visit'
import remarkGfm from 'remark-gfm'

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

async function getComponentContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/content/docs/components', `${slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf8')
    const mdxSource = await bundleMDX<Frontmatter>({
      source: content.trim(),
      mdxOptions: (options) => {
        // options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
        options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeComponent,
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
              console.log("node", node)
            }
          });
        },
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