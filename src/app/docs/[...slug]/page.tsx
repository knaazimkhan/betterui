import { notFound } from "next/navigation";
import { MDXLayout } from "@/components/docs/mdx-layout";
import fs from "fs/promises";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { MDXContent } from "@/components/mdx/mdx-content";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import codeImport from "remark-code-import";
import remarkGfm from "remark-gfm";
import { rehypeComponent } from "@/lib/rehype-component";

interface DocPageProps {
	params: Promise<{
		slug: string[];
	}>;
}

const prettyCodeOptions: Options = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
}

async function getDocContent(slug: string[]) {
	try {
		const filePath = path.join(process.cwd(), "content/docs", `${slug.join('/')}.mdx`);
		const content = await fs.readFile(filePath, 'utf8');
		const mdxSource = await bundleMDX({
      source: content.trim(),
      mdxOptions: (options) => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), codeImport, remarkGfm]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypeComponent,
          [rehypePrettyCode, prettyCodeOptions],          
          [rehypeAutolinkHeadings, {
            properties: {
              className: ['anchor'],
              ariaLabel: 'Link to heading',
            },
          }],
        ]
        return options
      }
    });
		return mdxSource;
	} catch {
		return null;
	}
}

export default async function DocPage({ params }: DocPageProps) {
	const { slug } = await params;
	const data = await getDocContent(slug);

	if (!data?.code) {
		notFound();
	}

	return (
		<MDXLayout>
			<MDXContent code={data.code} />
		</MDXLayout>
	);
}

export async function generateStaticParams() {
	return [{ slug: ["guides", "getting-started"] }];
}
