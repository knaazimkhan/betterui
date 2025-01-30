import { lazy } from "react"

interface Demo {
  name: string
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<React.ComponentType<any>>
  file: string
  data: {
    name: string
    description: string
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    props: Record<string, any>
  }
}

export const demos: Record<string, Demo> = {
  button: {
    name: "button",
    component: lazy(() => import("./demo/button")),
    file: "docs/components/demo/button.tsx",
    data: {
      name: "Button",
      description: "The Button component is a versatile and accessible clickable element that supports various styles, sizes, and states.",
      props: {
        variant: "primary",
        size: "md",
        disabled: false
      }
    }
  }
}