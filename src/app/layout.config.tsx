import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { HomeIcon, LayoutPanelTop } from 'lucide-react';
 
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Better UI',
  },
  links: [
    {
      text: "Home",
      url: "/",
      active: "nested-url",
      icon: <HomeIcon />,
    },
    {
      text: "Docs",
      url: "/docs/introduction",
      active: "nested-url",
      icon: <LayoutPanelTop />,
    },
  ],
};