'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';

const cardVariantsCode = `<Card variant="default">
  <CardBody>Default Card</CardBody>
</Card>

<Card variant="ghost">
  <CardBody>Ghost Card</CardBody>
</Card>`;

const cardShadowsCode = `<Card shadow="none">
  <CardBody>No Shadow</CardBody>
</Card>

<Card shadow="sm">
  <CardBody>Small Shadow</CardBody>
</Card>

<Card shadow="md">
  <CardBody>Medium Shadow</CardBody>
</Card>

<Card shadow="lg">
  <CardBody>Large Shadow</CardBody>
</Card>`;

const cardBordersCode = `<Card border="none">
  <CardBody>No Border</CardBody>
</Card>

<Card border="default">
  <CardBody>Default Border</CardBody>
</Card>`;

const cardWithSectionsCode = `<Card>
  <CardHeader>Card Header</CardHeader>
  <CardBody>Card Body Content</CardBody>
  <CardFooter>Card Footer</CardFooter>
</Card>`;

const cardWithImageCode = `<Card>
  <CardImage
    src="/placeholder.jpg"
    alt="Card image"
    width={400}
    height={200}
  />
  <CardBody>
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-secondary-600 dark:text-secondary-400">
      Card description goes here
    </p>
  </CardBody>
</Card>`;

export const CardExamples = [
    {
        title: 'Variants',
        description: 'Cards come in different visual styles.',
        preview: (
            <div className="flex flex-col gap-4">
                <Card variant="default">
                    <CardBody>Default Card</CardBody>
                </Card>
                <Card variant="ghost">
                    <CardBody>Ghost Card</CardBody>
                </Card>
            </div>
        ),
        code: cardVariantsCode,
    },
    {
        title: 'Shadows',
        description: 'Cards can have different shadow depths.',
        preview: (
            <div className="flex flex-col gap-4">
                <Card shadow="none">
                    <CardBody>No Shadow</CardBody>
                </Card>
                <Card shadow="sm">
                    <CardBody>Small Shadow</CardBody>
                </Card>
                <Card shadow="md">
                    <CardBody>Medium Shadow</CardBody>
                </Card>
                <Card shadow="lg">
                    <CardBody>Large Shadow</CardBody>
                </Card>
            </div>
        ),
        code: cardShadowsCode,
    },
    {
        title: 'Borders',
        description: 'Cards can be rendered with or without borders.',
        preview: (
            <div className="flex flex-col gap-4">
                <Card border="none">
                    <CardBody>No Border</CardBody>
                </Card>
                <Card border="default">
                    <CardBody>Default Border</CardBody>
                </Card>
            </div>
        ),
        code: cardBordersCode,
    },
    {
        title: 'With Sections',
        description: 'Cards can be divided into header, body, and footer sections.',
        preview: (
            <Card>
                <CardHeader>Card Header</CardHeader>
                <CardBody>Card Body Content</CardBody>
                <CardFooter>Card Footer</CardFooter>
            </Card>
        ),
        code: cardWithSectionsCode,
    },
    {
        title: 'With Image',
        description: 'Cards can include images along with content.',
        preview: (
            <Card>
                <CardImage
                    src="/placeholder.jpg"
                    alt="Card image"
                    width={400}
                    height={200}
                />
                <CardBody>
                    <h3 className="text-lg font-semibold">Card Title</h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                        Card description goes here
                    </p>
                </CardBody>
            </Card>
        ),
        code: cardWithImageCode,
    },
];

export const cardCode = `import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';

export default function MyComponent() {
  return (
    <Card>
      <CardBody>Card Content</CardBody>
    </Card>
  );
}`;

export const metadata = {
    description: "A versatile card component for displaying content in a contained way. Supports variants, shadows, borders, and multiple sections.",
    features: [
        "Supports different variants",
        "Supports different shadows",
        "Supports different borders",
        "Supports sections",
        "Supports images",
    ],
    source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/card/index.tsx',
    usage: {
        import: `import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';`,
        code: `export default function MyComponent() {
            return (
                <Card>
                    <CardBody>Card Content</CardBody>
                </Card>
            );
        }`,
    },
    props: [
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
    ]
}

export const preview = (
    <Card>
      <CardBody>Card Content</CardBody>
    </Card>
  )