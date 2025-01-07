import { Metadata } from 'next';
import { RadioGroup } from '@/components/ui/radio';

export const metadata: Metadata = {
  title: 'Radio Component',
  description: 'A customizable radio group component with support for labels, descriptions, and validation states.',
};

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const mockOptionsWithDescription = [
  {
    value: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    value: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations with multiple teams',
  },
];

const mockOptionsWithDisabled = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'maintenance', label: 'Maintenance', disabled: true },
];

export default function RadioDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Radio Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Radio Group</h2>
        <div className="grid gap-6">
          <RadioGroup
            name="basic"
            options={mockOptions}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Descriptions</h2>
        <RadioGroup
          name="plans"
          options={mockOptionsWithDescription}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Radio Variants</h2>
        <div className="grid gap-8">
          <RadioGroup
            name="default-variant"
            options={mockOptions}
            variant="default"
          />
          <RadioGroup
            name="solid-variant"
            options={mockOptions}
            variant="solid"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Validation States</h2>
        <div className="grid gap-8">
          <RadioGroup
            name="error-state"
            options={mockOptions}
            validation="error"
            error="Please select an option"
          />
          <RadioGroup
            name="success-state"
            options={mockOptions}
            validation="success"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Disabled Options</h2>
        <RadioGroup
          name="status"
          options={mockOptionsWithDisabled}
        />
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { RadioGroup } from '@/components/ui/radio';

const options = [
  { value: 'option1', label: 'Option 1' },
  {
    value: 'option2',
    label: 'Option 2',
    description: 'With description'
  },
  { value: 'option3', label: 'Option 3', disabled: true },
];

// Basic radio group
<RadioGroup
  name="basic"
  options={options}
/>

// With variants
<RadioGroup
  name="default"
  options={options}
  variant="default"
/>
<RadioGroup
  name="solid"
  options={options}
  variant="solid"
/>

// Validation states
<RadioGroup
  name="error"
  options={options}
  validation="error"
  error="Please select an option"
/>
<RadioGroup
  name="success"
  options={options}
  validation="success"
/>`}</code>
        </pre>
      </section>
    </div>
  );
} 