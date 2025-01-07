'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';
import ComponentDocs from '@/components/docs/component-docs';
import { SwitchExamples } from './examples';

const switchCode = `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <Switch
      label="Email notifications"
      description="Receive email notifications when someone mentions you."
    />
  );
}`;

export default function SwitchPage() {
  return (
    <ComponentDocs
      title="Switch"
      description="A toggle switch component that allows users to turn an option on or off. Supports different variants, sizes, validation states, and accessibility features."
      component="Switch"
      preview={
        <Switch
          label="Email notifications"
          description="Receive email notifications when someone mentions you."
        />
      }
      code={switchCode}
      examples={SwitchExamples}
      props={[
        {
          name: 'label',
          type: 'string',
          description: 'The label text to display next to the switch.',
        },
        {
          name: 'description',
          type: 'string',
          description: 'Additional descriptive text to display below the label.',
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
          name: 'error',
          type: 'string',
          description: 'Error message to display when validation fails.',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: 'The size of the switch.',
        },
        {
          name: 'checked',
          type: 'boolean',
          description: 'The controlled checked state of the switch.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          description: 'The default checked state of the switch.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Whether the switch is disabled.',
        },
        {
          name: 'onClick',
          type: '(event: React.MouseEvent<HTMLButtonElement>) => void',
          description: 'Callback function called when the switch is clicked.',
        },
      ]}
    />
  );
} 