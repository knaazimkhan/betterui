import { Button } from "@/components/ui/button";

export const buttonCode = `import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return <Button>Click me</Button>;
}`;

// Examples
export const ButtonExamples = [
    {
        title: 'Variants',
        description: 'Different visual styles for the button.',
        preview: (
            <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
            </div>
        ),
        code: `<Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="destructive">Destructive</Button>`,
    },
    {
        title: 'Sizes',
        description: 'Buttons are available in different sizes.',
        preview: (
            <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </Button>
            </div>
        ),
        code: `<Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  </Button>`,
    },
    {
        title: 'With Icons',
        description: 'Buttons can include icons on either side.',
        preview: (
            <div className="flex flex-wrap gap-4">
                <Button
                    leftIcon={
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
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                    }
                >
                    Back
                </Button>
                <Button
                    rightIcon={
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
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    }
                >
                    Next
                </Button>
            </div>
        ),
        code: `<Button
    leftIcon={
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
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    }
  >
    Back
  </Button>
  <Button
    rightIcon={
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    }
  >
    Next
  </Button>`,
    },
    {
        title: 'States',
        description: 'Buttons can be disabled or show a loading state.',
        preview: (
            <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button fullWidth>Full Width</Button>
            </div>
        ),
        code: `<Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
  <Button fullWidth>Full Width</Button>`,
    },
];

export const metadata = {
    description: 'A versatile button component with support for different variants, sizes, states, and icons.',
    features: [
        'Multiple visual variants to suit different contexts',
        'Responsive sizes for various use cases',
        'Support for left and right icons',
        'Loading state with spinner',
        'Full width option',
        'Keyboard accessible',
        'Dark mode support',
    ],
    source: 'https://github.com/yourusername/betterui/blob/main/src/components/ui/button/index.tsx',
    usage: {
        import: `import { Button } from '@/components/ui/button'`,
        code: `export default function MyComponent() {
    return <Button>Click me</Button>
  }`,
    },
    props: [
        {
            name: 'variant',
            type: '"primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"',
            defaultValue: '"primary"',
            description: 'The visual style variant of the button.',
        },
        {
            name: 'size',
            type: '"sm" | "md" | "lg" | "icon"',
            defaultValue: '"md"',
            description: 'The size of the button.',
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether the button should take up the full width of its container.',
        },
        {
            name: 'loading',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether to show a loading spinner and disable the button.',
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether the button is disabled.',
        },
        {
            name: 'leftIcon',
            type: 'React.ReactNode',
            description: 'Icon to display on the left side of the button text.',
        },
        {
            name: 'rightIcon',
            type: 'React.ReactNode',
            description: 'Icon to display on the right side of the button text.',
        },
    ],
};

export const preview = (
    <Button>Click me</Button>
)