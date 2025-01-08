'use client';

import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const checkboxVariantsCode = `<Checkbox
  variant="default"
  label="Default checkbox"
/>

<Checkbox
  variant="solid"
  label="Solid checkbox"
/>`;

const checkboxWithDescriptionCode = `<Checkbox
  label="Newsletter"
  description="Receive updates about our products and services"
/>

<Checkbox
  label="Terms and Conditions"
  description="I agree to the terms of service and privacy policy"
/>`;

const checkboxValidationCode = `<Checkbox
  validation="error"
  label="Required field"
  error="This field is required"
/>

<Checkbox
  validation="success"
  label="Accepted terms"
/>`;

const checkboxStatesCode = `<Checkbox
  label="Enabled checkbox"
/>

<Checkbox
  label="Checked checkbox"
  defaultChecked
/>

<Checkbox
  label="Disabled checkbox"
  disabled
/>

<Checkbox
  label="Disabled and checked"
  disabled
  defaultChecked
/>`;

const checkboxGroupCode = `<div className="space-y-4">
  <Checkbox
    name="notifications"
    label="Email notifications"
    description="Receive notifications about your account via email"
  />
  <Checkbox
    name="notifications"
    label="SMS notifications"
    description="Receive notifications about your account via SMS"
  />
  <Checkbox
    name="notifications"
    label="Push notifications"
    description="Receive push notifications in your browser"
  />
</div>`;

export const CheckboxExamples = [
    {
        title: 'Variants',
        description: 'Checkboxes come in different visual styles.',
        preview: (
            <div className="flex flex-col gap-4">
                <Checkbox
                    variant="default"
                    label="Default checkbox"
                />
                <Checkbox
                    variant="solid"
                    label="Solid checkbox"
                />
            </div>
        ),
        code: checkboxVariantsCode,
    },
    {
        title: 'With Description',
        description: 'Checkboxes can include additional descriptive text.',
        preview: (
            <div className="flex flex-col gap-4">
                <Checkbox
                    label="Newsletter"
                    description="Receive updates about our products and services"
                />
                <Checkbox
                    label="Terms and Conditions"
                    description="I agree to the terms of service and privacy policy"
                />
            </div>
        ),
        code: checkboxWithDescriptionCode,
    },
    {
        title: 'Validation States',
        description: 'Checkboxes can show validation states with error messages.',
        preview: (
            <div className="flex flex-col gap-4">
                <Checkbox
                    validation="error"
                    label="Required field"
                    error="This field is required"
                />
                <Checkbox
                    validation="success"
                    label="Accepted terms"
                />
            </div>
        ),
        code: checkboxValidationCode,
    },
    {
        title: 'States',
        description: 'Checkboxes can be enabled, disabled, checked, or unchecked.',
        preview: (
            <div className="flex flex-col gap-4">
                <Checkbox
                    label="Enabled checkbox"
                />
                <Checkbox
                    label="Checked checkbox"
                    defaultChecked
                />
                <Checkbox
                    label="Disabled checkbox"
                    disabled
                />
                <Checkbox
                    label="Disabled and checked"
                    disabled
                    defaultChecked
                />
            </div>
        ),
        code: checkboxStatesCode,
    },
    {
        title: 'Checkbox Group',
        description: 'Multiple checkboxes can be grouped together.',
        preview: (
            <div className="space-y-4">
                <Checkbox
                    name="notifications"
                    label="Email notifications"
                    description="Receive notifications about your account via email"
                />
                <Checkbox
                    name="notifications"
                    label="SMS notifications"
                    description="Receive notifications about your account via SMS"
                />
                <Checkbox
                    name="notifications"
                    label="Push notifications"
                    description="Receive push notifications in your browser"
                />
            </div>
        ),
        code: checkboxGroupCode,
    },
];

export const checkboxCode = `import { Checkbox } from '@/components/ui/checkbox';

export default function MyComponent() {
  return (
    <Checkbox
      label="Accept terms"
      description="I agree to the terms of service and privacy policy"
    />
  );
}`;

export const metadata = {
    description: "A versatile checkbox component with support for different variants, validation states, labels, and descriptions.",
    features: [
        "Supports different variants",
        "Supports different sizes",
        "Supports different validation states",
        "Supports different states",
    ],
    source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/checkbox/index.tsx',
    usage: {
        import: `import { Checkbox } from '@/components/ui/checkbox'`,
        code: `
        export default function MyComponent() {
            return (
                <Checkbox
                    label="Accept terms"
                    description="I agree to the terms of service and privacy policy"
                />
            );
        }
        `,
    },
    props: [
        {
            name: 'variant',
            type: '"default" | "solid"',
            defaultValue: '"default"',
            description: 'The visual style variant of the checkbox.',
        },
        {
            name: 'validation',
            type: '"default" | "error" | "success"',
            defaultValue: '"default"',
            description: 'The validation state of the checkbox.',
        },
        {
            name: 'label',
            type: 'string',
            description: 'The label text to display next to the checkbox.',
        },
        {
            name: 'description',
            type: 'string',
            description: 'Additional descriptive text to display below the label.',
        },
        {
            name: 'error',
            type: 'string',
            description: 'Error message to display when validation fails.',
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether the checkbox is disabled.',
        },
        {
            name: 'defaultChecked',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether the checkbox is checked by default.',
        },
    ],
}

export const preview = (
    <div className="flex flex-col gap-4">
        <Checkbox
            variant="default"
            label="Default checkbox"
        />
    </div>
)