import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const selectVariants = cva(
  // Base styles
  'w-full rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-no-repeat bg-right pr-10',
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
    },
    defaultVariants: {
      variant: 'default',
      validation: 'default',
      size: 'md',
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, validation, size, options, error, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            selectVariants({
              variant,
              validation: error ? 'error' : validation,
              size,
              className,
            })
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-errormessage={error ? `${props.id}-error` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-500">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
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

Select.displayName = 'Select';

export { Select, selectVariants }; 