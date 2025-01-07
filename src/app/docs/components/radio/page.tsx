import React from 'react';
import { RadioGroup } from '@/components/ui/radio';
import ComponentDocs from '@/components/docs/component-docs';
import { RadioExamples } from './examples';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const radioCode = `import { RadioGroup } from '@/components/ui/radio';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function MyComponent() {
  return (
    <RadioGroup
      name="my-radio-group"
      options={options}
    />
  );
}`;

export default function RadioPage() {
  return (
    <ComponentDocs
      title="Radio"
      description="A versatile radio group component with support for different variants, validation states, descriptions, and disabled options."
      component="Radio"
      preview={
        <RadioGroup
          name="example-radio-group"
          options={options}
        />
      }
      code={radioCode}
      examples={RadioExamples}
      props={[
        {
          name: 'options',
          type: 'RadioOption[]',
          description: 'Array of options to display in the radio group. Each option should have value, label, and optional description and disabled properties.',
        },
        {
          name: 'name',
          type: 'string',
          description: 'The name attribute for the radio group. Required for form submission.',
        },
        {
          name: 'variant',
          type: '"default" | "solid"',
          defaultValue: '"default"',
          description: 'The visual style variant of the radio buttons.',
        },
        {
          name: 'validation',
          type: '"default" | "error" | "success"',
          defaultValue: '"default"',
          description: 'The validation state of the radio group.',
        },
        {
          name: 'error',
          type: 'string',
          description: 'Error message to display when validation fails.',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'The default selected value in the radio group.',
        },
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value of the radio group.',
        },
        {
          name: 'onChange',
          type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
          description: 'Callback function called when the selected value changes.',
        },
      ]}
    />
  );
} 