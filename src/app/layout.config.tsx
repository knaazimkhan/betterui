import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AlbumIcon, HomeIcon, LayoutPanelTop } from 'lucide-react';
 
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
      url: "/docs/components/text/introduction",
      active: "nested-url",
      icon: <LayoutPanelTop />,
    },
  ],
};