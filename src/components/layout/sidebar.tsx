'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface NavItem {
  title: string;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Switch', href: '/docs/components/switch' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Avatar', href: '/docs/components/avatar' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Spinner', href: '/docs/components/spinner' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Pagination', href: '/docs/components/pagination' },
    ],
  },
  {
    title: 'Overlay',
    items: [
      { title: 'Modal', href: '/docs/components/modal' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-[4rem] bottom-0 left-0 z-30 hidden w-[16rem] border-r border-secondary-200 bg-white pb-10 dark:border-secondary-800 dark:bg-secondary-950 lg:block xl:w-[18rem]">
      <div className="h-full overflow-y-auto py-6 pl-4 pr-6">
        <nav className="space-y-6">
          {navigation.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 px-2 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block rounded-md px-2 py-1.5 text-sm transition-colors',
                      pathname === item.href
                        ? 'bg-secondary-100 font-medium text-secondary-900 dark:bg-secondary-800 dark:text-secondary-100'
                        : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 dark:text-secondary-400 dark:hover:bg-secondary-800 dark:hover:text-secondary-100'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 