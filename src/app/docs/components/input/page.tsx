import { Metadata } from 'next';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Input Component',
  description: 'A versatile input component with support for icons, validation states, and various styles.',
};

export default function InputDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Input Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Input</h2>
        <div className="grid gap-6">
          <Input placeholder="Enter your text" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Input Variants</h2>
        <div className="grid gap-4">
          <Input variant="default" placeholder="Default variant" />
          <Input variant="ghost" placeholder="Ghost variant" />
          <Input variant="underlined" placeholder="Underlined variant" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Input Sizes</h2>
        <div className="grid gap-4">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Validation States</h2>
        <div className="grid gap-4">
          <Input
            validation="error"
            placeholder="Error state"
            error="This field is required"
          />
          <Input
            validation="success"
            placeholder="Success state"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="grid gap-4">
          <Input
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            }
            placeholder="Search..."
          />
          <Input
            type="email"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            placeholder="Enter your email"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Input Types</h2>
        <div className="grid gap-4">
          <Input type="password" placeholder="Password input" />
          <Input type="number" placeholder="Number input" />
          <Input type="email" placeholder="Email input" />
        </div>
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { Input } from '@/components/ui/input';

// Basic input
<Input placeholder="Basic input" />

// Input variants
<Input variant="default" placeholder="Default variant" />
<Input variant="ghost" placeholder="Ghost variant" />
<Input variant="underlined" placeholder="Underlined variant" />

// Input sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />

// Validation states
<Input
  validation="error"
  error="This field is required"
  placeholder="Error state"
/>
<Input validation="success" placeholder="Success state" />

// With icons
<Input
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
<Input
  rightIcon={<EmailIcon />}
  type="email"
  placeholder="Enter your email"
/>

// Different types
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="email" placeholder="Email input" />`}</code>
        </pre>
      </section>
    </div>
  );
} 