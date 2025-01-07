'use client';

import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import ComponentDocs from '@/components/docs/component-docs';
import { CheckboxExamples } from './examples';

const checkboxCode = `import { Checkbox } from '@/components/ui/checkbox';

export default function MyComponent() {
  return (
    <Checkbox
      label="Accept terms"
      description="I agree to the terms of service and privacy policy"
    />
  );
}`;

export default function CheckboxPage() {
  return (
    <ComponentDocs
      title="Checkbox"
      description="A versatile checkbox component with support for different variants, validation states, labels, and descriptions."
      component="Checkbox"
      preview={
        <Checkbox
          label="Accept terms"
          description="I agree to the terms of service and privacy policy"
        />
      }
      code={checkboxCode}
      examples={CheckboxExamples}
      props={[
        {
          name: 'variant',
          type: '"default" | "solid"',
          defaultValue: '"default"',
          description: 'The visual style variant of the checkbox.',
        },
        {
          name: 'validation',
          type: '"default" | "error" | "success"',
          defaultValue: '"default"',
          description: 'The validation state of the checkbox.',
        },
        {
          name: 'label',
          type: 'string',
          description: 'The label text to display next to the checkbox.',
        },
        {
          name: 'description',
          type: 'string',
          description: 'Additional descriptive text to display below the label.',
        },
        {
          name: 'error',
          type: 'string',
          description: 'Error message to display when validation fails.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Whether the checkbox is disabled.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Whether the checkbox is checked by default.',
        },
      ]}
    />
  );
} 