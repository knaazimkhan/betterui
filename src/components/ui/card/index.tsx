import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const cardVariants = cva(
  // Base styles
  'rounded-xl overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-secondary-900',
        ghost: 'bg-secondary-50/50 dark:bg-secondary-900/50',
      },
      border: {
        none: '',
        default: 'border border-secondary-200 dark:border-secondary-800',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      border: 'default',
      shadow: 'md',
    },
  }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, border, shadow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, border, shadow }), className)}
        {...props}
      />
    );
  }
);

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-b border-secondary-200 dark:border-secondary-800', className)}
        {...props}
      />
    );
  }
);

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4', className)}
        {...props}
      />
    );
  }
);

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-t border-secondary-200 dark:border-secondary-800', className)}
        {...props}
      />
    );
  }
);

interface CardImageProps extends Omit<React.ComponentProps<typeof Image>, 'alt'> {
  alt: string;
  className?: string;
}

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, alt, ...props }, ref) => {
    return (
      <div className={cn('relative w-full h-48', className)}>
        <Image
          ref={ref}
          alt={alt}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
CardImage.displayName = 'CardImage';

export { Card, CardHeader, CardBody, CardFooter, CardImage, type CardProps }; 