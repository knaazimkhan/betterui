import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  // Base styles
  'w-full rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900',
        ghost: 'border-none bg-secondary-100 dark:bg-secondary-800',
        underlined: 'border-b border-secondary-200 dark:border-secondary-800 rounded-none px-0 hover:border-primary-500 focus:border-primary-500',
      },
      validation: {
        default: '',
        error: 'border-error-500 focus-visible:ring-error-500 dark:border-error-400',
        success: 'border-success-500 focus-visible:ring-success-500 dark:border-success-400',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
      hasLeftIcon: {
        true: 'pl-10',
      },
      hasRightIcon: {
        true: 'pr-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      validation: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', variant, validation, size, leftIcon, rightIcon, error, ...props }, ref) => {
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            inputVariants({
              variant,
              validation: error ? 'error' : validation,
              size,
              hasLeftIcon,
              hasRightIcon,
              className,
            })
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-errormessage={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-500">
            {rightIcon}
          </div>
        )}
        {error && (
          <p
            id={`${props.id}-error`}
            className="mt-1 text-sm text-error-500 dark:text-error-400"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants }; 