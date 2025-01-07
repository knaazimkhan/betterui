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