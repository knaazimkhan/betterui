import React from 'react';
import { Input } from '@/components/ui/input';
import ComponentDocs from '@/components/docs/component-docs';
import { InputExamples } from './examples';

const inputCode = `import { Input } from '@/components/ui/input';

export default function MyComponent() {
  return <Input placeholder="Enter text" />;
}`;

export default function InputPage() {
  return (
    <ComponentDocs
      title="Input"
      description="A versatile input component with support for different variants, sizes, validation states, and icons."
      component="Input"
      preview={<Input placeholder="Enter text" />}
      code={inputCode}
      examples={InputExamples}
      props={[
        {
          name: 'variant',
          type: '"default" | "ghost" | "underlined"',
          defaultValue: '"default"',
          description: 'The visual style variant of the input.',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: 'The size of the input.',
        },
        {
          name: 'validation',
          type: '"default" | "error" | "success"',
          defaultValue: '"default"',
          description: 'The validation state of the input.',
        },
        {
          name: 'error',
          type: 'string',
          description: 'Error message to display below the input.',
        },
        {
          name: 'leftIcon',
          type: 'React.ReactNode',
          description: 'Icon to display on the left side of the input.',
        },
        {
          name: 'rightIcon',
          type: 'React.ReactNode',
          description: 'Icon to display on the right side of the input.',
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: '"text"',
          description: 'The type attribute of the input element.',
        },
      ]}
    />
  );
} 