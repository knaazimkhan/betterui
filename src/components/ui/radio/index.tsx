import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const radioVariants = cva(
  // Base styles
  'peer h-4 w-4 shrink-0 rounded-full border border-secondary-300 dark:border-secondary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof radioVariants> {
  options: RadioOption[];
  name: string;
  error?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, variant, validation, options, name, error, id: groupId, ...props }, ref) => {
    const baseId = groupId || React.useId();

    return (
      <div ref={ref} className="space-y-3">
        {options.map((option, index) => {
          const id = `${baseId}-${index}`;
          return (
            <div key={option.value} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="radio"
                  id={id}
                  name={name}
                  value={option.value}
                  disabled={option.disabled}
                  className={cn(
                    radioVariants({
                      variant,
                      validation: error ? 'error' : validation,
                      className,
                    })
                  )}
                  aria-invalid={error ? 'true' : undefined}
                  aria-errormessage={error ? `${baseId}-error` : undefined}
                  aria-describedby={option.description ? `${id}-description` : undefined}
                  {...props}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor={id}
                  className={cn(
                    'font-medium text-secondary-900 dark:text-secondary-100',
                    option.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {option.label}
                </label>
                {option.description && (
                  <p
                    id={`${id}-description`}
                    className={cn(
                      'text-secondary-500 dark:text-secondary-400',
                      option.disabled && 'opacity-50'
                    )}
                  >
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        {error && (
          <p
            id={`${baseId}-error`}
            className="mt-1 text-sm text-error-500 dark:text-error-400"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, radioVariants }; 