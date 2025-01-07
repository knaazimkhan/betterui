import React from 'react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentExample } from '@/components/docs/component-example';
import { PropsTable } from '@/components/docs/props-table';

const Page = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="text-secondary-600 dark:text-secondary-400 mt-2">
          A versatile button component with support for different variants, sizes, states, and icons.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock
          code={`import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return <Button>Click me</Button>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-8">
          <ComponentExample
            title="Variants"
            description="Different visual styles for the button."
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Sizes"
            description="Buttons are available in different sizes."
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </Button>
            </div>
          </ComponentExample>

          <ComponentExample
            title="With Icons"
            description="Buttons can include icons on either side."
          >
            <div className="flex flex-wrap gap-4">
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                }
              >
                Back
              </Button>
              <Button
                rightIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                Next
              </Button>
            </div>
          </ComponentExample>

          <ComponentExample
            title="States"
            description="Buttons can be disabled or show a loading state."
          >
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button fullWidth>Full Width</Button>
            </div>
          </ComponentExample>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"',
              defaultValue: '"primary"',
              description: 'The visual style variant of the button.',
            },
            {
              name: 'size',
              type: '"sm" | "md" | "lg" | "icon"',
              defaultValue: '"md"',
              description: 'The size of the button.',
            },
            {
              name: 'fullWidth',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the button should take up the full width of its container.',
            },
            {
              name: 'loading',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether to show a loading spinner and disable the button.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the button is disabled.',
            },
            {
              name: 'leftIcon',
              type: 'React.ReactNode',
              description: 'Icon to display on the left side of the button text.',
            },
            {
              name: 'rightIcon',
              type: 'React.ReactNode',
              description: 'Icon to display on the right side of the button text.',
            },
          ]}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-secondary-400">
          <li>Buttons are focusable and can be activated by keyboard.</li>
          <li>Loading state is announced to screen readers.</li>
          <li>Disabled state prevents interaction and is conveyed to assistive technology.</li>
          <li>Icons have proper aria-labels when used alone.</li>
          <li>Focus is visible and consistent across all variants.</li>
        </ul>
      </div>
    </div>
  );
};

export default Page; 