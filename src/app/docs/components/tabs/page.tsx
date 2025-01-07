import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ComponentDocs from '@/components/docs/component-docs';
import { TabsExamples } from './examples';

const tabsCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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

export default function TabsPage() {
  return (
    <ComponentDocs
      title="Tabs"
      description="A set of layered sections of content that are displayed one at a time. Built on top of Radix UI Tabs primitive."
      component="Tabs"
      preview={
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
      }
      code={tabsCode}
      examples={TabsExamples}
      props={[
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
      ]}
    />
  );
} 