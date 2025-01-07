import React from 'react';
import { Switch } from '@/components/ui/switch';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentExample } from '@/components/docs/component-example';
import { PropsTable } from '@/components/docs/props-table';

const Page = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Switch</h1>
        <p className="text-secondary-600 dark:text-secondary-400 mt-2">
          A control that allows users to toggle between checked and unchecked states.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock
          code={`import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return <Switch label="Notifications" />;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-8">
          <ComponentExample
            title="Basic Switch"
            description="A simple switch with a label."
          >
            <Switch label="Enable notifications" />
          </ComponentExample>

          <ComponentExample
            title="With Description"
            description="A switch with a label and description text."
          >
            <Switch
              label="Airplane Mode"
              description="Disable all wireless connections"
            />
          </ComponentExample>

          <ComponentExample
            title="Sizes"
            description="Switches are available in three sizes."
          >
            <div className="flex flex-col gap-4">
              <Switch size="sm" label="Small" />
              <Switch size="md" label="Medium (Default)" />
              <Switch size="lg" label="Large" />
            </div>
          </ComponentExample>

          <ComponentExample
            title="Variants"
            description="Different visual styles for the switch."
          >
            <div className="flex flex-col gap-4">
              <Switch variant="default" label="Default variant" />
              <Switch variant="primary" label="Primary variant" />
            </div>
          </ComponentExample>

          <ComponentExample
            title="Validation States"
            description="Switches can display validation states."
          >
            <div className="flex flex-col gap-4">
              <Switch
                validation="error"
                label="Error state"
                error="This setting is required"
              />
              <Switch
                validation="success"
                label="Success state"
                description="Setting saved successfully"
              />
            </div>
          </ComponentExample>

          <ComponentExample
            title="Disabled State"
            description="Switches can be disabled to prevent user interaction."
          >
            <Switch disabled label="Disabled switch" />
          </ComponentExample>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <PropsTable
          props={[
            {
              name: 'label',
              type: 'string',
              description: 'The label text for the switch.',
            },
            {
              name: 'description',
              type: 'string',
              description: 'Additional descriptive text below the label.',
            },
            {
              name: 'error',
              type: 'string',
              description: 'Error message to display below the switch.',
            },
            {
              name: 'checked',
              type: 'boolean',
              description: 'Controls the checked state of the switch.',
            },
            {
              name: 'defaultChecked',
              type: 'boolean',
              description: 'The initial checked state of an uncontrolled switch.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Disables the switch and prevents user interaction.',
            },
            {
              name: 'size',
              type: '"sm" | "md" | "lg"',
              defaultValue: '"md"',
              description: 'Controls the size of the switch.',
            },
            {
              name: 'variant',
              type: '"default" | "primary"',
              defaultValue: '"default"',
              description: 'The visual style variant of the switch.',
            },
            {
              name: 'validation',
              type: '"default" | "error" | "success"',
              defaultValue: '"default"',
              description: 'The validation state of the switch.',
            },
            {
              name: 'onClick',
              type: '(event: React.MouseEvent) => void',
              description: 'Function called when the switch is clicked.',
            },
          ]}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-secondary-400">
          <li>The switch uses the ARIA role="switch" to identify its purpose.</li>
          <li>The aria-checked attribute reflects the current state.</li>
          <li>Labels are properly associated with the switch using htmlFor.</li>
          <li>Error messages are linked using aria-errormessage.</li>
          <li>Descriptions are linked using aria-describedby.</li>
          <li>The switch can be operated using both mouse and keyboard.</li>
        </ul>
      </div>
    </div>
  );
};

export default Page; 