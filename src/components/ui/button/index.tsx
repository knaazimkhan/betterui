import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
        secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950',
        ghost: 'text-secondary-900 hover:bg-secondary-100 dark:text-secondary-100 dark:hover:bg-secondary-800',
        link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
        destructive: 'bg-error-600 text-white hover:bg-error-700 dark:bg-error-600 dark:hover:bg-error-700',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
      loading: {
        true: 'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, loading }), className)}
        disabled={loading || props.disabled}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Examples
export const examples = [
  {
    name: 'Variants',
    preview: () => (
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
    name: 'Sizes',
    preview: () => (
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
  <svg>...</svg>
</Button>`,
  },
  {
    name: 'With Icons',
    preview: () => (
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          }
        >
          Left Icon
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
              <path d="M12 5v14" />
            </svg>
          }
        >
          Right Icon
        </Button>
      </div>
    ),
    code: `<Button leftIcon={<PlusIcon />}>Left Icon</Button>
<Button rightIcon={<PlusIcon />}>Right Icon</Button>`,
  },
  {
    name: 'Loading State',
    preview: () => (
      <div className="flex flex-wrap gap-4">
        <Button loading>Loading</Button>
        <Button variant="outline" loading>Loading</Button>
      </div>
    ),
    code: `<Button loading>Loading</Button>
<Button variant="outline" loading>Loading</Button>`,
  },
];

// Metadata
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