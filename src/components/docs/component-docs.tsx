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
  examples,
  props,
}: ComponentDocsProps) {
  return (
    <div className="space-y-8">
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

      <Tabs defaultValue="preview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
            {preview}
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <CodeBlock code={code} language="tsx" />
        </TabsContent>

        <TabsContent value="installation" className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400">
              Install the required dependencies for the {component} component:
            </p>
            <CodeBlock
              code={`pnpm add @/components/ui/${component.toLowerCase()}`}
              language="bash"
            />
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold">{example.title}</h2>
              <p className="text-secondary-600 dark:text-secondary-400">{example.description}</p>
              <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
                {example.preview}
              </div>
              <CodeBlock code={example.code} language="tsx" />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="props" className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Props</h2>
            <PropsTable props={props} />
          </div>
        </TabsContent>
      </Tabs>

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