import React from 'react';

interface ComponentExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ComponentExample: React.FC<ComponentExampleProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-white dark:bg-secondary-900">
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
          {title}
        </h3>
        <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
          {description}
        </p>
      </div>
      <div className="p-4 border-t border-secondary-200 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-950">
        {children}
      </div>
    </div>
  );
}; 