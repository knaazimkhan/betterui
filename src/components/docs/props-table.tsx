import React from 'react';

interface PropDefinition {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-secondary-200 dark:border-secondary-800">
            <th className="py-3 px-4 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Prop
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Type
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Default
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-secondary-200 dark:border-secondary-800"
            >
              <td className="py-3 px-4">
                <code className="font-mono text-sm">
                  {prop.name}
                  {prop.required && (
                    <span className="text-error-500 dark:text-error-400 ml-1">*</span>
                  )}
                </code>
              </td>
              <td className="py-3 px-4">
                <code className="font-mono text-sm text-primary-600 dark:text-primary-400">
                  {prop.type}
                </code>
              </td>
              <td className="py-3 px-4">
                {prop.defaultValue ? (
                  <code className="font-mono text-sm text-secondary-500 dark:text-secondary-400">
                    {prop.defaultValue}
                  </code>
                ) : (
                  <span className="text-sm text-secondary-400 dark:text-secondary-600">
                    —
                  </span>
                )}
              </td>
              <td className="py-3 px-4 text-sm text-secondary-600 dark:text-secondary-400">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 