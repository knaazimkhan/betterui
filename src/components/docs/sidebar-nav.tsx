'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = {
  guides: [
    { title: 'Getting Started', href: '/docs/guides/getting-started' },
    { title: 'Installation', href: '/docs/guides/installation' },
  ],
  components: [
    { title: 'Button', href: '/docs/components/button' },
    { title: 'Card', href: '/docs/components/card' },
    { title: 'Checkbox', href: '/docs/components/checkbox' },
    { title: 'Input', href: '/docs/components/input' },
    { title: 'Radio', href: '/docs/components/radio' },
    { title: 'Select', href: '/docs/components/select' },
    { title: 'Switch', href: '/docs/components/switch' },
  ],
  customization: [
    { title: 'Theming', href: '/docs/customization/theming' },
    { title: 'Styling', href: '/docs/customization/styling' },
  ],
}

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="w-full">
      <div className="space-y-8 p-6">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Guides</h4>
          <ul className="space-y-2">
            {navigation.guides.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block text-sm text-muted-foreground hover:text-foreground',
                    pathname === item.href && 'text-foreground font-medium'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Components</h4>
          <ul className="space-y-2">
            {navigation.components.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block text-sm text-muted-foreground hover:text-foreground',
                    pathname === item.href && 'text-foreground font-medium'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Customization</h4>
          <ul className="space-y-2">
            {navigation.customization.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block text-sm text-muted-foreground hover:text-foreground',
                    pathname === item.href && 'text-foreground font-medium'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
} 