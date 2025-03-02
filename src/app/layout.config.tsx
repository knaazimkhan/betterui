import Image from 'next/image'

import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { HomeIcon, LayoutPanelTop } from 'lucide-react'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-end justify-center gap-1">
        <Image src="/logo.svg" alt="Better UI" width={25} height={25} />
        <span className="font-bold text-primary">Better UI</span>
      </div>
    ),
    transparentMode: 'top',
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
      icon: <HomeIcon />,
    },
    {
      text: 'Docs',
      url: '/docs/introduction',
      active: 'nested-url',
      icon: <LayoutPanelTop />,
    },
  ],
}
