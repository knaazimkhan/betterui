import { notFound } from 'next/navigation'
import { registry } from '@/docs/registry'
import ComponentDocs from '@/components/docs/component-docs'
import { CodeBlock } from '@/components/docs/code-block'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ComponentPageProps {
  params: Promise<{ slug: string }>
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const component = registry[slug]

  if (!component) {
    notFound()
  }

  return (
    <ComponentDocs
      title={component.name}
      description={component.metadata.description}
      component={component.name}
      preview={component.preview}
      code={component.metadata.code}
      examples={component.examples}
      props={component.metadata.props}
    />
  )

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-background pt-24 pb-12 -mt-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            {component.name}
          </h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl">
            {component.metadata.description}
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={component.metadata.source}
              className="inline-flex items-center gap-2 text-sm text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-secondary-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Sidebar - Navigation */}
          <div
            // initial={{ opacity: 0, x: -20 }}
            // animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <nav className="space-y-1 sticky top-24">
              <a href="#features" className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900">Features</a>
              <a href="#installation" className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900">Installation</a>
              <a href="#usage" className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900">Usage</a>
              <a href="#examples" className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900">Examples</a>
              <a href="#props" className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900">Props</a>
            </nav>
          </div>

          {/* Main Content */}
          <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Features */}
            <section id="features">
              <h2 className="text-3xl font-bold mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {component.metadata.features.map((feature, index) => (
                  <div
                    key={index}
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg border border-secondary-200 dark:border-secondary-800"
                  >
                    <p className="text-secondary-600 dark:text-secondary-400">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Installation */}
            <section id="installation">
              <h2 className="text-3xl font-bold mb-6">Installation</h2>
              <div className="space-y-4">
                <CodeBlock
                  code={`npm install @betterui/react`}
                  language="bash"
                />
              </div>
            </section>

            {/* Usage */}
            <section id="usage">
              <h2 className="text-3xl font-bold mb-6">Usage</h2>
              <div className="space-y-4">
                <CodeBlock
                  code={component.metadata.usage.import}
                  language="typescript"
                />
                <CodeBlock
                  code={component.metadata.usage.code}
                  language="tsx"
                />
              </div>
            </section>

            {/* Examples */}
            <section id="examples">
              <h2 className="text-3xl font-bold mb-6">Examples</h2>
              <div className="space-y-8">
                {component.examples.map((example, index) => (
                  <div
                    key={example.title}
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <Tabs defaultValue="preview">
                      <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                      </TabsList>
                      <TabsContent value="preview">
                        <div className="p-8 rounded-lg border border-secondary-200 dark:border-secondary-800 bg-background">
                          {/* <example.preview /> */}
                          {example.preview}
                        </div>
                      </TabsContent>
                      <TabsContent value="code">
                        <CodeBlock code={example.code} language="tsx" />
                      </TabsContent>
                    </Tabs>
                  </div>
                ))}
              </div>
            </section>

            {/* Props */}
            <section id="props">
              <h2 className="text-3xl font-bold mb-6">Props</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-secondary-200 dark:border-secondary-800">
                      <th className="py-4 px-6 text-sm font-semibold">Prop</th>
                      <th className="py-4 px-6 text-sm font-semibold">Type</th>
                      <th className="py-4 px-6 text-sm font-semibold">Default</th>
                      <th className="py-4 px-6 text-sm font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.metadata.props.map((prop) => (
                      <tr key={prop.name} className="border-b border-secondary-200 dark:border-secondary-800">
                        <td className="py-4 px-6 font-mono text-sm">{prop.name}</td>
                        <td className="py-4 px-6 font-mono text-sm text-primary-600 dark:text-primary-400">{prop.type}</td>
                        <td className="py-4 px-6 font-mono text-sm text-secondary-500">{prop.defaultValue || '—'}</td>
                        <td className="py-4 px-6 text-sm text-secondary-600 dark:text-secondary-400">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 