import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const checkboxVariants = cva(
  // Base styles
  'peer h-4 w-4 shrink-0 rounded border border-secondary-300 dark:border-secondary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-secondary-900 text-primary-600 dark:text-primary-400',
        solid: 'bg-primary-600 dark:bg-primary-500 border-transparent text-white',
      },
      validation: {
        default: '',
        error: 'border-error-500 focus-visible:ring-error-500 dark:border-error-400',
        success: 'border-success-500 focus-visible:ring-success-500 dark:border-success-400',
      },
    },
    defaultVariants: {
      variant: 'default',
      validation: 'default',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, validation, label, description, error, id, ...props }, ref) => {
    const checkboxId = id || React.useId();

    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              checkboxVariants({
                variant,
                validation: error ? 'error' : validation,
                className,
              })
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-errormessage={error ? `${checkboxId}-error` : undefined}
            aria-describedby={description ? `${checkboxId}-description` : undefined}
            {...props}
          />
        </div>
        {(label || description || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={checkboxId}
                className="font-medium text-secondary-900 dark:text-secondary-100"
              >
                {label}
              </label>
            )}
            {description && (
              <p
                id={`${checkboxId}-description`}
                className="text-secondary-500 dark:text-secondary-400"
              >
                {description}
              </p>
            )}
            {error && (
              <p
                id={`${checkboxId}-error`}
                className="mt-1 text-sm text-error-500 dark:text-error-400"
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants }; 