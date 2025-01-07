import { Metadata } from 'next';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata: Metadata = {
  title: 'Checkbox Component',
  description: 'A customizable checkbox component with support for labels, descriptions, and validation states.',
};

export default function CheckboxDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkbox Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Checkbox</h2>
        <div className="grid gap-4">
          <Checkbox label="Basic checkbox" />
          <Checkbox
            label="With description"
            description="This is a helpful description"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Checkbox Variants</h2>
        <div className="grid gap-4">
          <Checkbox
            variant="default"
            label="Default variant"
          />
          <Checkbox
            variant="solid"
            label="Solid variant"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Validation States</h2>
        <div className="grid gap-4">
          <Checkbox
            validation="error"
            label="Error state"
            error="This field is required"
          />
          <Checkbox
            validation="success"
            label="Success state"
            description="Everything looks good!"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="grid gap-4">
          <Checkbox
            label="Checked state"
            defaultChecked
          />
          <Checkbox
            label="Disabled state"
            disabled
          />
          <Checkbox
            label="Disabled and checked"
            disabled
            defaultChecked
          />
        </div>
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { Checkbox } from '@/components/ui/checkbox';

// Basic checkbox
<Checkbox label="Basic checkbox" />

// With description
<Checkbox
  label="With description"
  description="This is a helpful description"
/>

// Variants
<Checkbox
  variant="default"
  label="Default variant"
/>
<Checkbox
  variant="solid"
  label="Solid variant"
/>

// Validation states
<Checkbox
  validation="error"
  label="Error state"
  error="This field is required"
/>
<Checkbox
  validation="success"
  label="Success state"
/>

// Different states
<Checkbox
  label="Checked state"
  defaultChecked
/>
<Checkbox
  label="Disabled state"
  disabled
/>
<Checkbox
  label="Disabled and checked"
  disabled
  defaultChecked
/>`}</code>
        </pre>
      </section>
    </div>
  );
} 