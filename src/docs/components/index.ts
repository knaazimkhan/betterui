import { lazy } from "react"

interface Demo {
  name: string
  component: React.LazyExoticComponent<React.ComponentType<any>>
  file: string
  data: {
    name: string
    description: string
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