'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';

export const SwitchExamples = [
  {
    title: 'Variants',
    description: 'Switch comes in two variants: default and primary.',
    preview: (
      <div className="flex flex-col gap-4">
        <Switch label="Default variant" variant="default" />
        <Switch label="Primary variant" variant="primary" />
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Default variant" variant="default" />
      <Switch label="Primary variant" variant="primary" />
    </div>
  );
}`,
  },
  {
    title: 'Sizes',
    description: 'Switch is available in three sizes: small, medium, and large.',
    preview: (
      <div className="flex flex-col gap-4">
        <Switch label="Small size" size="sm" />
        <Switch label="Medium size" size="md" />
        <Switch label="Large size" size="lg" />
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Small size" size="sm" />
      <Switch label="Medium size" size="md" />
      <Switch label="Large size" size="lg" />
    </div>
  );
}`,
  },
  {
    title: 'With Description',
    description: 'Switch can include a description text below the label.',
    preview: (
      <div className="flex flex-col gap-4">
        <Switch
          label="Email notifications"
          description="Receive email notifications when someone mentions you."
        />
        <Switch
          label="Marketing emails"
          description="Receive emails about new products, features, and more."
        />
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Switch
        label="Email notifications"
        description="Receive email notifications when someone mentions you."
      />
      <Switch
        label="Marketing emails"
        description="Receive emails about new products, features, and more."
      />
    </div>
  );
}`,
  },
  {
    title: 'Validation States',
    description: 'Switch supports different validation states with error messages.',
    preview: (
      <div className="flex flex-col gap-4">
        <Switch
          label="Terms and conditions"
          validation="error"
          error="You must accept the terms and conditions"
        />
        <Switch
          label="Newsletter subscription"
          validation="success"
        />
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Switch
        label="Terms and conditions"
        validation="error"
        error="You must accept the terms and conditions"
      />
      <Switch
        label="Newsletter subscription"
        validation="success"
      />
    </div>
  );
}`,
  },
  {
    title: 'Disabled State',
    description: 'Switch can be disabled to prevent user interaction.',
    preview: (
      <div className="flex flex-col gap-4">
        <Switch
          label="Disabled switch"
          disabled
        />
        <Switch
          label="Disabled checked switch"
          disabled
          defaultChecked
        />
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Switch
        label="Disabled switch"
        disabled
      />
      <Switch
        label="Disabled checked switch"
        disabled
        defaultChecked
      />
    </div>
  );
}`,
  },
];

export const switchCode = `import { Switch } from '@/components/ui/switch';

export default function MyComponent() {
  return (
    <Switch
      label="Email notifications"
      description="Receive email notifications when someone mentions you."
    />
  );
}`;

export const metadata = {
  description: "A toggle switch component that allows users to turn an option on or off. Supports different variants, sizes, validation states, and accessibility features.",
  features: [
    "Supports different variants",
    "Supports different sizes",
    "Supports different validation states",
    "Supports different states",
  ],
  source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/switch/index.tsx',
  code: switchCode,
  usage: {
    import: `import { Switch } from '@/components/ui/switch'`,
    code: `export default function MyComponent() {
      return (
        <Switch
          label="Email notifications"
          description="Receive email notifications when someone mentions you."
        />
      );
    }`,
  },
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label text to display next to the switch.',
    },
    {
      name: 'description',
      type: 'string',
      description: 'Additional descriptive text to display below the label.',
    },
    {
      name: 'variant',
      type: '"default" | "primary"',
      defaultValue: '"default"',
      description: 'The visual style variant of the switch.',
    },
    {
      name: 'validation',
      type: '"default" | "error" | "success"',
      defaultValue: '"default"',
      description: 'The validation state of the switch.',
    },
    {
      name: 'error',
      type: 'string',
      description: 'Error message to display when validation fails.',
    },
    {
      name: 'size',
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: 'The size of the switch.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'The controlled checked state of the switch.',
    },
    {
      name: 'defaultChecked',
      type: 'boolean',
      description: 'The default checked state of the switch.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the switch is disabled.',
    },
    {
      name: 'onClick',
      type: '(event: React.MouseEvent<HTMLButtonElement>) => void',
      description: 'Callback function called when the switch is clicked.',
    },
  ],
}

export const preview = (
  <Switch
    label="Email notifications"
    description="Receive email notifications when someone mentions you."
  />
)