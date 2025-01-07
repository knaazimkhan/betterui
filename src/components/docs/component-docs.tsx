import React from 'react';
import { CodeBlock } from './code-block';
import { PropsTable } from './props-table';
import { Breadcrumb } from './breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Example {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

interface Prop {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface ComponentDocsProps {
  title: string;
  description: string;
  component: string;
  preview: React.ReactNode;
  code: string;
  examples: Example[];
  props: Prop[];
}

export default function ComponentDocs({
  title,
  description,
  component,
  preview,
  code,
  examples = [],
  props,
}: ComponentDocsProps) {
  return (
    <div className="space-y-12">
      <div>
        <Breadcrumb
          items={[
            { label: 'Components', href: '/docs/components' },
            { label: component, href: `/docs/components/${component.toLowerCase()}` },
          ]}
        />
        <h1 className="text-3xl font-bold mt-4">{title}</h1>
        <p className="text-secondary-600 dark:text-secondary-400 mt-2">{description}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Preview</h2>
        <Tabs defaultValue="preview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
              {preview}
            </div>
          </TabsContent>

          <TabsContent value="code">
            <CodeBlock code={code} language="tsx" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Installation</h2>
        <Tabs defaultValue="cli" className="space-y-4">
          <TabsList>
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>

          <TabsContent value="cli">
            <div className="space-y-4">
              <p className="text-secondary-600 dark:text-secondary-400">
                Install the {component} component using the CLI:
              </p>
              <CodeBlock
                code={`pnpm dlx @betterui/cli add ${component.toLowerCase()}`}
                language="bash"
              />
            </div>
          </TabsContent>

          <TabsContent value="manual">
            <div className="space-y-4">
              <p className="text-secondary-600 dark:text-secondary-400">
                Install the required dependencies and copy the component code:
              </p>
              <CodeBlock
                code={`pnpm add @/components/ui/${component.toLowerCase()}`}
                language="bash"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {examples.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Examples</h2>
          <div className="space-y-8">
            {examples.map((example) => (
              <div key={example.title} className="space-y-4">
                <h3 className="text-xl font-semibold">{example.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400">{example.description}</p>
                <Tabs defaultValue="preview" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview">
                    <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
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
        </div>
      )}

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Props</h2>
        <PropsTable props={props} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-secondary-400">
          <li>All interactive elements are keyboard accessible.</li>
          <li>ARIA attributes are properly set for dynamic content.</li>
          <li>Color contrast meets WCAG guidelines.</li>
          <li>Focus states are clearly visible.</li>
          <li>Screen reader announcements for state changes.</li>
        </ul>
      </div>
    </div>
  );
} 