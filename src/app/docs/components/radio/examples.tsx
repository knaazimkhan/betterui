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