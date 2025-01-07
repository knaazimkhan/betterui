import { Metadata } from 'next';
import { Select } from '@/components/ui/select';

export const metadata: Metadata = {
  title: 'Select Component',
  description: 'A customizable select component with support for validation states and various styles.',
};

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const mockLongOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany', disabled: true },
  { value: 'fr', label: 'France' },
];

export default function SelectDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Select Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Select</h2>
        <div className="grid gap-6">
          <Select
            options={mockOptions}
            placeholder="Choose an option"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Select Variants</h2>
        <div className="grid gap-4">
          <Select
            variant="default"
            options={mockOptions}
            placeholder="Default variant"
          />
          <Select
            variant="ghost"
            options={mockOptions}
            placeholder="Ghost variant"
          />
          <Select
            variant="underlined"
            options={mockOptions}
            placeholder="Underlined variant"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Select Sizes</h2>
        <div className="grid gap-4">
          <Select
            size="sm"
            options={mockOptions}
            placeholder="Small select"
          />
          <Select
            size="md"
            options={mockOptions}
            placeholder="Medium select"
          />
          <Select
            size="lg"
            options={mockOptions}
            placeholder="Large select"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Validation States</h2>
        <div className="grid gap-4">
          <Select
            validation="error"
            options={mockOptions}
            placeholder="Error state"
            error="Please select an option"
          />
          <Select
            validation="success"
            options={mockOptions}
            placeholder="Success state"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Disabled Options</h2>
        <Select
          options={mockLongOptions}
          placeholder="Select a country"
        />
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { Select } from '@/components/ui/select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

// Basic select
<Select
  options={options}
  placeholder="Choose an option"
/>

// Select variants
<Select
  variant="default"
  options={options}
  placeholder="Default variant"
/>
<Select
  variant="ghost"
  options={options}
  placeholder="Ghost variant"
/>
<Select
  variant="underlined"
  options={options}
  placeholder="Underlined variant"
/>

// Select sizes
<Select
  size="sm"
  options={options}
  placeholder="Small select"
/>
<Select
  size="md"
  options={options}
  placeholder="Medium select"
/>
<Select
  size="lg"
  options={options}
  placeholder="Large select"
/>

// Validation states
<Select
  validation="error"
  options={options}
  placeholder="Error state"
  error="Please select an option"
/>
<Select
  validation="success"
  options={options}
  placeholder="Success state"
/>`}</code>
        </pre>
      </section>
    </div>
  );
} 