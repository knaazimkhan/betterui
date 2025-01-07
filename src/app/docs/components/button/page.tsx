import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Button Component',
  description: 'A versatile button component with multiple variants and sizes.',
};

export default function ButtonDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Button Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Full Width</h2>
        <Button fullWidth>Full Width Button</Button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { Button } from '@/components/ui/button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width</Button>

// Disabled state
<Button disabled>Disabled</Button>`}</code>
        </pre>
      </section>
    </div>
  );
} 