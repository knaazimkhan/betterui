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