'use client';

import React from 'react';
import { Select } from '@/components/ui/select';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const longOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'Solid' },
];

const disabledOptions = [
    { value: 'option1', label: 'Available Option' },
    { value: 'option2', label: 'Disabled Option', disabled: true },
    { value: 'option3', label: 'Another Option' },
];

const selectVariantsCode = `<Select
  variant="default"
  options={options}
  placeholder="Default select"
/>

<Select
  variant="ghost"
  options={options}
  placeholder="Ghost select"
/>

<Select
  variant="underlined"
  options={options}
  placeholder="Underlined select"
/>`;

const selectSizesCode = `<Select
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
/>`;

const selectValidationCode = `<Select
  validation="error"
  options={options}
  placeholder="Error select"
  error="Please select an option"
/>

<Select
  validation="success"
  options={options}
  placeholder="Success select"
/>`;

const selectWithPlaceholderCode = `<Select
  options={longOptions}
  placeholder="Select a framework"
/>`;

const selectWithDisabledCode = `<Select
  options={disabledOptions}
  placeholder="Select an option"
/>`;

export const SelectExamples = [
    {
        title: 'Variants',
        description: 'Select fields come in different visual styles.',
        preview: (
            <div className="flex flex-col gap-4">
                <Select
                    variant="default"
                    options={options}
                    placeholder="Default select"
                />
                <Select
                    variant="ghost"
                    options={options}
                    placeholder="Ghost select"
                />
                <Select
                    variant="underlined"
                    options={options}
                    placeholder="Underlined select"
                />
            </div>
        ),
        code: selectVariantsCode,
    },
    {
        title: 'Sizes',
        description: 'Select fields are available in different sizes.',
        preview: (
            <div className="flex flex-col gap-4">
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
            </div>
        ),
        code: selectSizesCode,
    },
    {
        title: 'Validation States',
        description: 'Select fields can show validation states with error messages.',
        preview: (
            <div className="flex flex-col gap-4">
                <Select
                    validation="error"
                    options={options}
                    placeholder="Error select"
                    error="Please select an option"
                />
                <Select
                    validation="success"
                    options={options}
                    placeholder="Success select"
                />
            </div>
        ),
        code: selectValidationCode,
    },
    {
        title: 'With Placeholder',
        description: 'Select fields can include a placeholder option.',
        preview: (
            <Select
                options={longOptions}
                placeholder="Select a framework"
            />
        ),
        code: selectWithPlaceholderCode,
    },
    {
        title: 'With Disabled Options',
        description: 'Individual options can be disabled.',
        preview: (
            <Select
                options={disabledOptions}
                placeholder="Select an option"
            />
        ),
        code: selectWithDisabledCode,
    },
];


export const selectCode = `import { Select } from '@/components/ui/select';
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  
  export default function MyComponent() {
    return (
      <Select
        options={options}
        placeholder="Select an option"
      />
    );
  }`;

export const metadata = {
    description: "A versatile select component with support for different variants, sizes, validation states, and disabled options.",
    features: [
        "Supports different variants",
        "Supports different sizes",
        "Supports validation states",
        "Supports disabled options",
    ],
    source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/select/index.tsx',
    usage: {
        import: `import { Select } from '@/components/ui/select'`,
        code: `
        const options = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ];

        export default function MyComponent() {
            return (
                <Select
                    options={options}
                    placeholder="Select an option"
                />
            );
        }`,
    },
    props: [
        {
            name: 'options',
            type: 'SelectOption[]',
            description: 'Array of options to display in the select. Each option should have value, label, and optional disabled properties.',
        },
        {
            name: 'variant',
            type: '"default" | "ghost" | "underlined"',
            defaultValue: '"default"',
            description: 'The visual style variant of the select.',
        },
        {
            name: 'size',
            type: '"sm" | "md" | "lg"',
            defaultValue: '"md"',
            description: 'The size of the select.',
        },
        {
            name: 'validation',
            type: '"default" | "error" | "success"',
            defaultValue: '"default"',
            description: 'The validation state of the select.',
        },
        {
            name: 'error',
            type: 'string',
            description: 'Error message to display below the select.',
        },
        {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder text to display when no option is selected.',
        },
    ]
}

export const preview = (
    <Select
        options={options}
        placeholder="Select an option"
    />
)