import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const checkboxVariantsCode = `<Checkbox
/>

<Checkbox
/>`;

const checkboxWithDescriptionCode = `<Checkbox
/>

<Checkbox
/>`;

const checkboxValidationCode = `<Checkbox
/>

<Checkbox
/>`;

const checkboxStatesCode = `<Checkbox
/>

<Checkbox
  defaultChecked
/>

<Checkbox
  disabled
/>

<Checkbox
  disabled
  defaultChecked
/>`;

const checkboxGroupCode = `<div className="space-y-4">
  <Checkbox
    name="notifications"
  />
  <Checkbox
    name="notifications"
  />
  <Checkbox
    name="notifications"
  />
</div>`;

export const CheckboxExamples = [
    {
        title: 'Variants',
        description: 'Checkboxes come in different visual styles.',
        preview: (
            <div className="flex flex-col gap-4">
                <Checkbox
                />
                <Checkbox
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
                />
                <Checkbox
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
                />
                <Checkbox
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
                />
                <Checkbox
                    defaultChecked
                />
                <Checkbox
                    disabled
                />
                <Checkbox
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
                />
                <Checkbox
                    name="notifications"
                />
                <Checkbox
                    name="notifications"
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
    code: checkboxCode,
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
        />
    </div>
)