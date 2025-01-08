'use client';

import React from 'react';
import { RadioGroup } from '@/components/ui/radio';

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const optionsWithDescriptions = [
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

const optionsWithDisabled = [
  { value: 'available1', label: 'Available option 1' },
  { value: 'disabled1', label: 'Disabled option 1', disabled: true },
  { value: 'available2', label: 'Available option 2' },
  { value: 'disabled2', label: 'Disabled option 2', disabled: true },
];

const radioVariantsCode = `<RadioGroup
  name="variant-example"
  variant="default"
  options={basicOptions}
/>

<RadioGroup
  name="variant-example-solid"
  variant="solid"
  options={basicOptions}
/>`;

const radioWithDescriptionsCode = `<RadioGroup
  name="plans"
  options={[
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
  ]}
/>`;

const radioValidationCode = `<RadioGroup
  name="validation-error"
  options={basicOptions}
  validation="error"
  error="Please select an option"
/>

<RadioGroup
  name="validation-success"
  options={basicOptions}
  validation="success"
/>`;

const radioWithDisabledCode = `<RadioGroup
  name="with-disabled"
  options={[
    { value: 'available1', label: 'Available option 1' },
    { value: 'disabled1', label: 'Disabled option 1', disabled: true },
    { value: 'available2', label: 'Available option 2' },
    { value: 'disabled2', label: 'Disabled option 2', disabled: true },
  ]}
/>`;

export const RadioExamples = [
  {
    title: 'Variants',
    description: 'Radio groups come in different visual styles.',
    preview: (
      <div className="flex flex-col gap-8">
        <RadioGroup
          name="variant-example"
          variant="default"
          options={basicOptions}
        />
        <RadioGroup
          name="variant-example-solid"
          variant="solid"
          options={basicOptions}
        />
      </div>
    ),
    code: radioVariantsCode,
  },
  {
    title: 'With Descriptions',
    description: 'Radio options can include additional descriptive text.',
    preview: (
      <RadioGroup
        name="plans"
        options={optionsWithDescriptions}
      />
    ),
    code: radioWithDescriptionsCode,
  },
  {
    title: 'Validation States',
    description: 'Radio groups can show validation states with error messages.',
    preview: (
      <div className="flex flex-col gap-8">
        <RadioGroup
          name="validation-error"
          options={basicOptions}
          validation="error"
          error="Please select an option"
        />
        <RadioGroup
          name="validation-success"
          options={basicOptions}
          validation="success"
        />
      </div>
    ),
    code: radioValidationCode,
  },
  {
    title: 'With Disabled Options',
    description: 'Individual radio options can be disabled.',
    preview: (
      <RadioGroup
        name="with-disabled"
        options={optionsWithDisabled}
      />
    ),
    code: radioWithDisabledCode,
  },
];

export const radioCode = `import { RadioGroup } from '@/components/ui/radio';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function MyComponent() {
  return (
    <RadioGroup
      name="my-radio-group"
      options={options}
    />
  );
}`;

export const metadata = {
  description: "A versatile radio group component with support for different variants, validation states, descriptions, and disabled options.",
  features: [
    "Supports different variants",
    "Supports different sizes",
    "Supports different validation states",
    "Supports different states",
  ],
  source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/radio/index.tsx',
  usage: {
    import: `import { RadioGroup } from '@/components/ui/radio'`,
    code: `const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

      export default function MyComponent() {
        return (
          <RadioGroup
            name="my-radio-group"
            options={options}
          />
        );
      }`,
  },
  props: [
    {
      name: 'options',
      type: 'RadioOption[]',
      description: 'Array of options to display in the radio group. Each option should have value, label, and optional description and disabled properties.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'The name attribute for the radio group. Required for form submission.',
    },
    {
      name: 'variant',
      type: '"default" | "solid"',
      defaultValue: '"default"',
      description: 'The visual style variant of the radio buttons.',
    },
    {
      name: 'validation',
      type: '"default" | "error" | "success"',
      defaultValue: '"default"',
      description: 'The validation state of the radio group.',
    },
    {
      name: 'error',
      type: 'string',
      description: 'Error message to display when validation fails.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The default selected value in the radio group.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value of the radio group.',
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      description: 'Callback function called when the selected value changes.',
    },
  ],
}

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const preview = (
  <RadioGroup
    name="example-radio-group"
    options={options}
  />
)