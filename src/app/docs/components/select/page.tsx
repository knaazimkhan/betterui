'use client';

import React from 'react';
import { Select } from '@/components/ui/select';
import ComponentDocs from '@/components/docs/component-docs';
import { SelectExamples } from './examples';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const selectCode = `import { Select } from '@/components/ui/select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function MyComponent() {
  return (
    <Select
      options={options}
      placeholder="Select an option"
    />
  );
}`;

export default function SelectPage() {
  return (
    <ComponentDocs
      title="Select"
      description="A versatile select component with support for different variants, sizes, validation states, and disabled options."
      component="Select"
      preview={
        <Select
          options={options}
          placeholder="Select an option"
        />
      }
      code={selectCode}
      examples={SelectExamples}
      props={[
        {
          name: 'options',
          type: 'SelectOption[]',
          description: 'Array of options to display in the select. Each option should have value, label, and optional disabled properties.',
        },
        {
          name: 'variant',
          type: '"default" | "ghost" | "underlined"',
          defaultValue: '"default"',
          description: 'The visual style variant of the select.',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: 'The size of the select.',
        },
        {
          name: 'validation',
          type: '"default" | "error" | "success"',
          defaultValue: '"default"',
          description: 'The validation state of the select.',
        },
        {
          name: 'error',
          type: 'string',
          description: 'Error message to display below the select.',
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text to display when no option is selected.',
        },
      ]}
    />
  );
} 