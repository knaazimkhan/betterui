import React from 'react';

interface Prop {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-secondary-200 dark:border-secondary-800">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-secondary-200 bg-secondary-50 dark:border-secondary-800 dark:bg-secondary-900">
            <th className="px-4 py-3 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Name
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Type
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Default
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">{prop.name}</td>
              <td className="whitespace-nowrap px-4 py-3 font-mono text-sm text-primary-600 dark:text-primary-400">
                {prop.type}
              </td>
              <td className="whitespace-nowrap px-4 py-3 font-mono text-sm text-secondary-500 dark:text-secondary-400">
                {prop.defaultValue || '—'}
              </td>
              <td className="px-4 py-3 text-sm text-secondary-600 dark:text-secondary-400">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 