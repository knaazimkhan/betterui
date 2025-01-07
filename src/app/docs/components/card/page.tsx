import React from 'react';
import { Card, CardBody } from '@/components/ui/card';
import ComponentDocs from '@/components/docs/component-docs';
import { CardExamples } from './examples';

const cardCode = `import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';

export default function MyComponent() {
  return (
    <Card>
      <CardBody>Card Content</CardBody>
    </Card>
  );
}`;

export default function CardPage() {
  return (
    <ComponentDocs
      title="Card"
      description="A versatile card component for displaying content in a contained way. Supports variants, shadows, borders, and multiple sections."
      component="Card"
      preview={
        <Card>
          <CardBody>Card Content</CardBody>
        </Card>
      }
      code={cardCode}
      examples={CardExamples}
      props={[
        {
          name: 'variant',
          type: '"default" | "ghost"',
          defaultValue: '"default"',
          description: 'The visual style variant of the card.',
        },
        {
          name: 'border',
          type: '"none" | "default"',
          defaultValue: '"default"',
          description: 'The border style of the card.',
        },
        {
          name: 'shadow',
          type: '"none" | "sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: 'The shadow depth of the card.',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes to apply to the card.',
        },
      ]}
    />
  );
} 