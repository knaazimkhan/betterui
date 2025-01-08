'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const TabsExamples = [
  {
    title: 'Basic Tabs',
    description: 'A simple tabs example with basic content.',
    preview: (
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-secondary-500">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4">
            <h3 className="text-lg font-medium">Password Settings</h3>
            <p className="text-sm text-secondary-500">
              Change your password and security preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-secondary-500">
              Configure your general application settings.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    ),
    code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="p-4">
      <h3 className="text-lg font-medium">Account Settings</h3>
      <p className="text-sm text-secondary-500">
        Manage your account settings and preferences.
      </p>
    </div>
  </TabsContent>
  <TabsContent value="password">
    <div className="p-4">
      <h3 className="text-lg font-medium">Password Settings</h3>
      <p className="text-sm text-secondary-500">
        Change your password and security preferences.
      </p>
    </div>
  </TabsContent>
  <TabsContent value="settings">
    <div className="p-4">
      <h3 className="text-lg font-medium">General Settings</h3>
      <p className="text-sm text-secondary-500">
        Configure your general application settings.
      </p>
    </div>
  </TabsContent>
</Tabs>`
  },
  {
    title: 'With Icons',
    description: 'Tabs can include icons alongside text in the triggers.',
    preview: (
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="p-4">
            <h3 className="text-lg font-medium">Profile Settings</h3>
            <p className="text-sm text-secondary-500">
              Update your profile information and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="p-4">
            <h3 className="text-lg font-medium">Notification Settings</h3>
            <p className="text-sm text-secondary-500">
              Configure your notification preferences.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    ),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function MyComponent() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="p-4">
          <h3 className="text-lg font-medium">Profile Settings</h3>
          <p className="text-sm text-secondary-500">
            Update your profile information and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4">
          <h3 className="text-lg font-medium">Notification Settings</h3>
          <p className="text-sm text-secondary-500">
            Configure your notification preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}`,
  },
  {
    title: 'Disabled State',
    description: 'Individual tab triggers can be disabled.',
    preview: (
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="p-4">
            <h3 className="text-lg font-medium">Active Content</h3>
            <p className="text-sm text-secondary-500">
              This tab is currently active and can be interacted with.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="disabled">
          <div className="p-4">
            <h3 className="text-lg font-medium">Disabled Content</h3>
            <p className="text-sm text-secondary-500">
              This content cannot be accessed because the tab is disabled.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="pending">
          <div className="p-4">
            <h3 className="text-lg font-medium">Pending Content</h3>
            <p className="text-sm text-secondary-500">
              This tab is accessible and contains pending items.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    ),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function MyComponent() {
  return (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="p-4">
          <h3 className="text-lg font-medium">Active Content</h3>
          <p className="text-sm text-secondary-500">
            This tab is currently active and can be interacted with.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="p-4">
          <h3 className="text-lg font-medium">Disabled Content</h3>
          <p className="text-sm text-secondary-500">
            This content cannot be accessed because the tab is disabled.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="pending">
        <div className="p-4">
          <h3 className="text-lg font-medium">Pending Content</h3>
          <p className="text-sm text-secondary-500">
            This tab is accessible and contains pending items.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}`,
  },
];

export const tabsCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function MyComponent() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account settings content
      </TabsContent>
      <TabsContent value="password">
        Password settings content
      </TabsContent>
    </Tabs>
  );
}`;

export const metadata = {
  description: "A set of layered sections of content that are displayed one at a time. Built on top of Radix UI Tabs primitive.",
  features: [
    "Supports different variants",
    "Supports different sizes",
    "Supports different validation states",
    "Supports different states",
  ],
  source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/tabs/index.tsx',
  code: tabsCode,
  usage: {
    import: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs`,
    code: `
    export default function MyComponent() {
      return (
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Account settings content
          </TabsContent>
          <TabsContent value="password">
            Password settings content
          </TabsContent>
        </Tabs>
      );
    }
    `,
  },
  props: [
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The value of the tab that should be active when initially rendered.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value of the tab to activate.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'Event handler called when the value changes.',
    },
    {
      name: 'orientation',
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description: 'The orientation of the tabs.',
    },
    {
      name: 'dir',
      type: '"ltr" | "rtl"',
      description: 'The reading direction of the tabs.',
    },
    {
      name: 'activationMode',
      type: '"automatic" | "manual"',
      defaultValue: '"automatic"',
      description: 'Whether tabs are activated automatically on focus or manually on click.',
    },
  ],
}

export const preview = (
  <Tabs defaultValue="account">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="p-4">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="text-sm text-secondary-500">
          Manage your account settings and preferences.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="p-4">
        <h3 className="text-lg font-medium">Password Settings</h3>
        <p className="text-sm text-secondary-500">
          Change your password and security preferences.
        </p>
      </div>
    </TabsContent>
  </Tabs>
)