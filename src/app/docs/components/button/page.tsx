'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import ComponentDocs from '@/components/docs/component-docs';
import { ButtonExamples } from './examples';

const buttonCode = `import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return <Button>Click me</Button>;
}`;

export default function ButtonPage() {
  return (
    <ComponentDocs
      title="Button"
      description="A versatile button component with support for different variants, sizes, states, and icons."
      component="Button"
      preview={<Button>Click me</Button>}
      code={buttonCode}
      examples={ButtonExamples}
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
  );
} 