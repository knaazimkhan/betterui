'use client'

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const switchVariants = cva(
  'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-secondary-200 dark:bg-secondary-700',
        primary: 'bg-primary-200 dark:bg-primary-900',
      },
      validation: {
        default: '',
        error: 'bg-error-100 dark:bg-error-900 focus-visible:ring-error-500',
        success: 'bg-success-100 dark:bg-success-900 focus-visible:ring-success-500',
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-[52px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      validation: 'default',
      size: 'md',
    },
  }
);

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 translate-x-0 data-[state=checked]:translate-x-4',
        md: 'h-5 w-5 translate-x-0 data-[state=checked]:translate-x-5',
        lg: 'h-6 w-6 translate-x-0 data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'type'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  description?: string;
  error?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, variant, validation, size, label, description, error, id, checked, defaultChecked, onClick, disabled, ...props }, ref) => {
    const switchId = id || React.useId();
    const isChecked = checked || defaultChecked;

    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-6">
          <button
            type="button"
            role="switch"
            id={switchId}
            aria-checked={isChecked}
            data-state={isChecked ? 'checked' : 'unchecked'}
            className={cn(
              switchVariants({ variant, validation: error ? 'error' : validation, size }),
              isChecked && 'bg-primary-600 dark:bg-primary-400',
              className
            )}
            ref={ref}
            disabled={disabled}
            onClick={(e) => {
              if (!disabled && onClick) {
                onClick(e);
              }
            }}
            aria-invalid={error ? 'true' : undefined}
            aria-errormessage={error ? `${switchId}-error` : undefined}
            aria-describedby={description ? `${switchId}-description` : undefined}
            {...props}
          >
            <span
              data-state={isChecked ? 'checked' : 'unchecked'}
              className={cn(switchThumbVariants({ size }))}
            />
          </button>
        </div>
        {(label || description || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={switchId}
                className="font-medium text-secondary-900 dark:text-secondary-100"
              >
                {label}
              </label>
            )}
            {description && (
              <p
                id={`${switchId}-description`}
                className="text-secondary-500 dark:text-secondary-400"
              >
                {description}
              </p>
            )}
            {error && (
              <p
                id={`${switchId}-error`}
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

Switch.displayName = 'Switch';

export { Switch, switchVariants }; 